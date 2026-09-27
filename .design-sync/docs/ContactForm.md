---
category: Forms
---
# ContactForm

The farmer and general enquiry form: **Full Name**, **Phone** (tel), **Message** (textarea), and a full-width green submit button. It shows inline success and error messages after submitting (via Formspree).

No props. Labels are localized. Place it inside a white `Card className="p-6 sm:p-8"` or a white `Section`, typically next to contact details and a WhatsApp CTA.

```jsx
<Section>
  <div className="grid lg:grid-cols-2 gap-10">
    <div>…address, phones, WhatsApp Button…</div>
    <Card className="p-6 sm:p-8"><ContactForm /></Card>
  </div>
</Section>
```
