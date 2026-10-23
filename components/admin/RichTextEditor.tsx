"use client";

import { useRef, useState } from "react";
import { EditorContent, useEditor, useEditorState, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { uploadImage } from "./uploadImage";

type Props = {
  /** Form field the current HTML is submitted under. */
  name: string;
  initialHtml: string;
  onChange?: () => void;
};

export default function RichTextEditor({ name, initialHtml, onChange }: Props) {
  const [html, setHtml] = useState(initialHtml);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        code: false,
        codeBlock: false,
        link: { openOnClick: false, autolink: true, defaultProtocol: "https" },
      }),
      Image,
    ],
    content: initialHtml,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "blog-prose min-h-[320px] px-4 py-3 focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      setHtml(editor.getHTML());
      onChange?.();
    },
  });

  return (
    <div className="border border-hairline bg-white focus-within:border-urvar-green">
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
      <input type="hidden" name={name} value={html} />
    </div>
  );
}

function Toolbar({ editor }: { editor: Editor }) {
  const state = useEditorState({
    editor,
    selector: ({ editor: e }) => ({
      bold: e.isActive("bold"),
      italic: e.isActive("italic"),
      underline: e.isActive("underline"),
      h2: e.isActive("heading", { level: 2 }),
      h3: e.isActive("heading", { level: 3 }),
      bullet: e.isActive("bulletList"),
      ordered: e.isActive("orderedList"),
      quote: e.isActive("blockquote"),
      link: e.isActive("link"),
      canUndo: e.can().undo(),
      canRedo: e.can().redo(),
    }),
  });
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const run = (fn: (c: ReturnType<Editor["chain"]>) => ReturnType<Editor["chain"]>) => fn(editor.chain().focus()).run();

  function openLink() {
    setLinkUrl((editor.getAttributes("link").href as string | undefined) ?? "");
    setLinkOpen(true);
  }

  function applyLink() {
    const url = linkUrl.trim();
    if (url) run((c) => c.extendMarkRange("link").setLink({ href: url }));
    else run((c) => c.extendMarkRange("link").unsetLink());
    setLinkOpen(false);
  }

  async function onImagePicked(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setUploading(true);
    setUploadError("");
    try {
      const src = await uploadImage(file);
      const alt = file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
      run((c) => c.setImage({ src, alt }));
    } catch (err) {
      setUploadError((err as Error).message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="sticky top-0 z-10 bg-neutral-50 border-b border-hairline">
      <div className="flex flex-wrap items-center gap-1 p-1.5">
        <Btn label="Bold" active={state.bold} onClick={() => run((c) => c.toggleBold())}>
          <b>B</b>
        </Btn>
        <Btn label="Italic" active={state.italic} onClick={() => run((c) => c.toggleItalic())}>
          <i>I</i>
        </Btn>
        <Btn label="Underline" active={state.underline} onClick={() => run((c) => c.toggleUnderline())}>
          <u>U</u>
        </Btn>
        <Sep />
        <Btn label="Heading" active={state.h2} onClick={() => run((c) => c.toggleHeading({ level: 2 }))}>
          H2
        </Btn>
        <Btn label="Sub-heading" active={state.h3} onClick={() => run((c) => c.toggleHeading({ level: 3 }))}>
          H3
        </Btn>
        <Sep />
        <Btn label="Bullet list" active={state.bullet} onClick={() => run((c) => c.toggleBulletList())}>
          • List
        </Btn>
        <Btn label="Numbered list" active={state.ordered} onClick={() => run((c) => c.toggleOrderedList())}>
          1. List
        </Btn>
        <Btn label="Quote" active={state.quote} onClick={() => run((c) => c.toggleBlockquote())}>
          “ ”
        </Btn>
        <Sep />
        <Btn label="Link" active={state.link} onClick={openLink}>
          Link
        </Btn>
        <Btn label="Insert image" onClick={() => fileRef.current?.click()} disabled={uploading}>
          {uploading ? "Uploading…" : "Image"}
        </Btn>
        <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" hidden onChange={onImagePicked} />
        <Sep />
        <Btn label="Undo" onClick={() => run((c) => c.undo())} disabled={!state.canUndo}>
          ↶
        </Btn>
        <Btn label="Redo" onClick={() => run((c) => c.redo())} disabled={!state.canRedo}>
          ↷
        </Btn>
      </div>

      {linkOpen && (
        <div className="flex flex-wrap items-center gap-2 px-2 pb-2">
          <input
            type="url"
            autoFocus
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                applyLink();
              }
              if (e.key === "Escape") setLinkOpen(false);
            }}
            placeholder="https://… or /products/prom"
            className="flex-1 min-w-[200px] border border-hairline px-2 py-1 text-sm"
          />
          <button type="button" onClick={applyLink} className="text-sm font-semibold text-urvar-green px-2">
            Apply
          </button>
          {state.link && (
            <button
              type="button"
              onClick={() => {
                run((c) => c.extendMarkRange("link").unsetLink());
                setLinkOpen(false);
              }}
              className="text-sm text-red-700 px-2"
            >
              Remove link
            </button>
          )}
          <button type="button" onClick={() => setLinkOpen(false)} className="text-sm text-neutral-500 px-2">
            Cancel
          </button>
        </div>
      )}
      {uploadError && <p className="px-3 pb-2 text-sm text-red-700">{uploadError}</p>}
    </div>
  );
}

function Btn({
  label,
  active,
  disabled,
  onClick,
  children,
}: {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
      className={`min-w-[36px] h-9 px-2 text-sm rounded transition-colors disabled:opacity-40 ${
        active ? "bg-urvar-dark text-white" : "text-neutral-700 hover:bg-neutral-200"
      }`}
    >
      {children}
    </button>
  );
}

function Sep() {
  return <span className="w-px h-6 bg-hairline mx-1" aria-hidden />;
}
