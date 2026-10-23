# Blog admin

Write and publish blog posts from the browser. You don't need git, a code
editor or a rebuild.

## One-time setup (on the hosting PC)

1. Add two lines to `D:\urvar_website\.env.local` (create the file if it
   doesn't exist):

   ```
   ADMIN_PASSWORD=<a long passphrase only the blog team knows>
   ADMIN_SESSION_SECRET=<random string, at least 32 characters>
   ```

   To generate a secret, run:
   `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

2. Deploy as usual: `.\scripts\deploy-local.ps1`.

3. Back up `D:\urvar_website\storage\` regularly (for example a nightly
   copy to OneDrive or Google Drive). All posts and uploaded images live
   there, not in git.

Changing `ADMIN_SESSION_SECRET` signs everyone out. Changing
`ADMIN_PASSWORD` takes effect after `pm2 restart urvar-website`.

## Writing a post

1. Go to **https://urvarindia.com/admin** and sign in.
2. Click **+ New post**.
3. Fill in the **English** tab: title, a 1–2 sentence summary (shown on the
   blog card and in Google), and the article. Use the toolbar for
   headings, bold, lists, links and images.
4. Optionally fill in the **বাংলা** tab. If you leave it empty, the
   Bengali site shows the English article.
5. In the sidebar, upload a **cover image** (landscape, ideally 1200×630;
   JPG gives the best WhatsApp and Facebook previews), and pick a category,
   date and any related products.
6. Click **Publish**. The post is live immediately at
   `/blog/<page-url>` and `/bn/blog/<page-url>`, and it's added to the
   sitemap. **Save draft** keeps it private in the admin.

To edit, click **Edit** next to a post. To take a post down without
deleting it, use **Unpublish (save as draft)**. **Delete** asks for
confirmation and can't be undone.

## Notes

- The page URL comes from the English title and is fixed once the post
  is created, so links people have shared never break.
- Images must be JPG, PNG, WebP or GIF and under 5 MB.
- Posts are listed newest first by publish date.
