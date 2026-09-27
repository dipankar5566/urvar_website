---
category: Site chrome
---
# WhatsAppButton

A floating WhatsApp action button: a 56px green (`#25D366`) circle with a soft pulse ring, fixed at the bottom-right (`bottom-6 right-6`, z-50). It opens a chat with Urvar (wa.me/919035708943).

No props. It appears on every page. Render it once at page level, never inside content.

For an inline WhatsApp CTA inside a section, use `Button` instead, with a pre-filled message for context:
```jsx
<Button
  href={"https://wa.me/919035708943?text=" + encodeURIComponent("Hello Urvar Natural, I need a nutrition plan for my potato crop.")}
  variant="secondary"
  target="_blank"
  rel="noopener noreferrer"
>
  Chat on WhatsApp
</Button>
```
