"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { savePostAction } from "@/app/admin/actions";
import type { Post } from "@/lib/blog/types";
import RichTextEditor from "./RichTextEditor";
import { uploadImage } from "./uploadImage";

type ProductOption = { slug: string; name: string };

type Props = {
  /** Existing post when editing; undefined when creating. */
  post?: Post;
  products: ProductOption[];
  categories: string[];
  today: string;
};

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/, "");
}

const input = "w-full border border-hairline bg-white px-3 py-2.5 focus:outline-none focus:border-urvar-green";
const labelText = "block text-sm font-semibold text-neutral-700 mb-1";

export default function PostForm({ post, products, categories, today }: Props) {
  const editing = Boolean(post);
  const [state, action, pending] = useActionState(savePostAction, undefined);
  const [tab, setTab] = useState<"en" | "bn">("en");
  const [enTitle, setEnTitle] = useState(post?.en.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(editing);
  const [image, setImage] = useState(post?.image ?? "");
  const [coverUploading, setCoverUploading] = useState(false);
  const [coverError, setCoverError] = useState("");
  const dirty = useRef(false);
  const markDirty = () => (dirty.current = true);

  // Warn before leaving with unsaved edits.
  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (dirty.current) e.preventDefault();
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, []);

  // A failed save leaves the edits unsaved.
  useEffect(() => {
    if (state?.error) dirty.current = true;
  }, [state]);

  // Submit manually rather than via <form action>: React resets uncontrolled
  // fields after a form action, which would wipe the writer's edits whenever
  // validation fails.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter;
    const formData = new FormData(e.currentTarget, submitter);
    dirty.current = false;
    startTransition(() => action(formData));
  }

  async function onCoverPicked(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setCoverUploading(true);
    setCoverError("");
    try {
      setImage(await uploadImage(file));
      markDirty();
    } catch (err) {
      setCoverError((err as Error).message);
    } finally {
      setCoverUploading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} onChange={markDirty} className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
      {editing && <input type="hidden" name="originalSlug" value={post!.slug} />}
      <input type="hidden" name="image" value={image} />

      {/* Main column: language tabs + content */}
      <div className="min-w-0">
        <div className="flex gap-1 mb-4 border-b border-hairline" role="tablist">
          {(["en", "bn"] as const).map((l) => (
            <button
              key={l}
              type="button"
              role="tab"
              aria-selected={tab === l}
              onClick={() => setTab(l)}
              className={`px-4 py-2 text-sm font-semibold -mb-px border-b-2 ${
                tab === l ? "border-urvar-green text-urvar-dark" : "border-transparent text-neutral-500"
              }`}
            >
              {l === "en" ? "English" : "বাংলা (optional)"}
            </button>
          ))}
        </div>

        {/* Both panels stay mounted (just hidden) so each editor keeps its content. */}
        <div hidden={tab !== "en"} className="space-y-5">
          <label className="block">
            <span className={labelText}>Title *</span>
            <input
              name="en_title"
              value={enTitle}
              onChange={(e) => {
                setEnTitle(e.target.value);
                if (!slugTouched) setSlug(slugify(e.target.value));
              }}
              className={`${input} text-lg font-semibold`}
              placeholder="e.g. How to Control Zinc Deficiency in Paddy"
            />
          </label>
          <label className="block">
            <span className={labelText}>Summary *</span>
            <textarea
              name="en_excerpt"
              defaultValue={post?.en.excerpt}
              rows={2}
              className={input}
              placeholder="1–2 sentences. Shown on the blog card and in Google results."
            />
          </label>
          <div>
            <span className={labelText}>Article</span>
            <RichTextEditor name="en_html" initialHtml={post?.en.html ?? ""} onChange={markDirty} />
          </div>
        </div>

        <div hidden={tab !== "bn"} className="space-y-5">
          <p className="text-sm text-neutral-600 bg-neutral-100 px-3 py-2">
            Leave this tab empty to show the English article on the Bengali site.
          </p>
          <label className="block">
            <span className={labelText}>শিরোনাম (Title)</span>
            <input name="bn_title" defaultValue={post?.bn?.title} className={`${input} text-lg font-semibold`} />
          </label>
          <label className="block">
            <span className={labelText}>সারাংশ (Summary)</span>
            <textarea name="bn_excerpt" defaultValue={post?.bn?.excerpt} rows={2} className={input} />
          </label>
          <div>
            <span className={labelText}>লেখা (Article)</span>
            <RichTextEditor name="bn_html" initialHtml={post?.bn?.html ?? ""} onChange={markDirty} />
          </div>
        </div>
      </div>

      {/* Sidebar: publish + settings */}
      <aside className="space-y-5 lg:sticky lg:top-6 self-start">
        <div className="bg-white border border-hairline p-4 space-y-3">
          {state?.error && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2">{state.error}</p>
          )}
          <button
            type="submit"
            name="status"
            value="published"
            disabled={pending || coverUploading}
            className="w-full bg-urvar-green hover:bg-urvar-dark text-white font-semibold py-3 rounded-full disabled:opacity-60"
          >
            {pending ? "Saving…" : editing && post!.status === "published" ? "Update live post" : "Publish"}
          </button>
          <button
            type="submit"
            name="status"
            value="draft"
            disabled={pending || coverUploading}
            className="w-full border border-urvar-dark text-urvar-dark hover:bg-urvar-light font-semibold py-2.5 rounded-full disabled:opacity-60"
          >
            {editing && post!.status === "published" ? "Unpublish (save as draft)" : "Save draft"}
          </button>
        </div>

        <div className="bg-white border border-hairline p-4 space-y-4">
          <div>
            <span className={labelText}>Cover image *</span>
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt="" className="w-full h-36 object-cover mb-2 bg-neutral-100" />
            ) : (
              <div className="w-full h-36 mb-2 bg-neutral-100 flex items-center justify-center text-sm text-neutral-500">
                No image yet
              </div>
            )}
            <label className="inline-block cursor-pointer text-sm font-semibold text-urvar-green hover:text-urvar-dark">
              {coverUploading ? "Uploading…" : image ? "Change image" : "Upload image"}
              <input type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={onCoverPicked} />
            </label>
            <p className="text-xs text-neutral-500 mt-1">Landscape, ideally 1200×630. JPG works best for WhatsApp previews.</p>
            {coverError && <p className="text-sm text-red-700 mt-1">{coverError}</p>}
          </div>

          <label className="block">
            <span className={labelText}>Page URL</span>
            <div className="flex items-center text-sm">
              <span className="text-neutral-500 pr-1">/blog/</span>
              <input
                name="slug"
                value={slug}
                disabled={editing}
                onChange={(e) => {
                  setSlugTouched(true);
                  setSlug(e.target.value.toLowerCase());
                }}
                className={`${input} !py-1.5 text-sm disabled:bg-neutral-100 disabled:text-neutral-500`}
              />
            </div>
            <span className="text-xs text-neutral-500">
              {editing ? "Can't be changed after creation (it would break shared links)." : "Filled in from the title."}
            </span>
          </label>

          <label className="block">
            <span className={labelText}>Category</span>
            <input
              name="category"
              list="blog-categories"
              defaultValue={post?.category}
              className={input}
              placeholder="e.g. Soil Health"
            />
            <datalist id="blog-categories">
              {categories.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </label>

          <label className="block">
            <span className={labelText}>Publish date</span>
            <input type="date" name="date" defaultValue={post?.date ?? today} className={input} />
          </label>

          <label className="block">
            <span className={labelText}>Author</span>
            <input name="author" defaultValue={post?.author ?? "Urvar Agronomy Team"} className={input} />
          </label>
        </div>

        <fieldset className="bg-white border border-hairline p-4">
          <legend className="text-sm font-semibold text-neutral-700 px-1">Related products</legend>
          <p className="text-xs text-neutral-500 mb-2">Shown as cards under the article.</p>
          <div className="max-h-56 overflow-y-auto space-y-1.5">
            {products.map((p) => (
              <label key={p.slug} className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  name="related"
                  value={p.slug}
                  defaultChecked={post?.relatedProductSlugs.includes(p.slug)}
                  className="mt-0.5 accent-urvar-green"
                />
                {p.name}
              </label>
            ))}
          </div>
        </fieldset>
      </aside>
    </form>
  );
}
