---
category: Content
---
# VideoEmbed

A click-to-load YouTube player. It first shows the video thumbnail with a white play button (16:9, `rounded-xl`, black background). The privacy-friendly youtube-nocookie iframe loads only after a click, so there is no page-weight cost until then.

## Props
- `videoId`: YouTube ID (required). Urvar's published videos: `"0UX4k8Q8mPs"` (organic fertilizers overview) and `"OtFHSRs_KD4"` (Vermicompost).
- `title`: accessible title (required).
- `thumbnail`: optional custom image URL (defaults to YouTube's `hqdefault`).

## Usage
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <VideoEmbed videoId="0UX4k8Q8mPs" title="Boost your crops with Urvar Natural's organic fertilizers" />
  <VideoEmbed videoId="OtFHSRs_KD4" title="Urvar Natural Vermicompost – 100% organic fertilizer" />
</div>
```

Always use this instead of a raw `<iframe>`.
