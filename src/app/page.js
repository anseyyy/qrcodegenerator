"use client";

import CategoryLayout from "@/components/home/CategoryLayout";

export default function Home() {
  return (
    <CategoryLayout
      qrType="url"
      seoTitle="Create Premium Custom QR Codes with Logos"
      seoSubheading="Stop using boring black-and-white QR codes. Style your digital connections to match your brand identity. QrCodey provides dynamic styling tools to create stunning, scannable assets for your business, menu, or socials in seconds."
      seoCopyTitle="Why QrCodey is the Easiest Custom QR Code Maker"
      seoCopyText="In today's scan-and-go era, a generic black-and-white square is easily ignored. Whether you want to share a restaurant menu, grow your Instagram following, share business details, collect payments, or direct users to your portfolio, QrCodey helps you style and brand your scannable tags. You can select predesigned layouts, upload custom brand icons, set colors, and generate downloadable high-quality print files in seconds."
      seoCopyBulletTitle="Key Platform Benefits"
      seoCopyBullets={[
        "100% Free & No Expirations: Unlike dynamic makers that charge subscriptions or restrict scans, QrCodey compiles static tags that scan forever for free.",
        "Preset & Custom Logos: Upload custom PNG/JPG brand icons or select presets (Instagram, Facebook, LinkedIn, GitHub) to display at the center of the QR canvas.",
        "predesigned backgrounds & frames: Embed your QR code inside customizable flyers and banners like Polaroid borders, Charcoal Slates, and neon grids.",
        "100% Client-Side Security: Generating QRs locally means target links, contacts, or branding assets are never uploaded or saved on any database server."
      ]}
    />
  );
}
