---
category: Forms
---
# DealerEnquiryForm

The dealer and distributor application form. Fields: **Name**, **Business name**, **Phone**, **Business type** (select: Dealer / Distributor / FPO / Other), **State**, **District**, **Current product portfolio**, and **Message**, followed by a full-width green submit button. It includes a hidden spam honeypot and shows inline success and error states.

No props. Labels are localized. It's used on `/dealers/become-a-distributor`, next to the benefits list (trade margins, marketing and field support, protected territories).

```jsx
<Section bg="mint">
  <Card className="p-6 sm:p-8 max-w-2xl mx-auto"><DealerEnquiryForm /></Card>
</Section>
```
