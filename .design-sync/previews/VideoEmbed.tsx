import { VideoEmbed } from "@urvar/design-system";

export const Single = () => (
  <div className="p-6 bg-white max-w-xl">
    <VideoEmbed videoId="0UX4k8Q8mPs" title="Boost your crops with Urvar Natural's organic fertilizers" />
  </div>
);

export const Pair = () => (
  <div className="grid grid-cols-2 gap-6 p-6 bg-white max-w-3xl">
    <VideoEmbed videoId="0UX4k8Q8mPs" title="Boost your crops with Urvar Natural's organic fertilizers" />
    <VideoEmbed videoId="OtFHSRs_KD4" title="Urvar Natural Vermicompost – 100% organic fertilizer" />
  </div>
);
