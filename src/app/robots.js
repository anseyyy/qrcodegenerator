export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/_next/",
    },
    sitemap: "https://www.qrcodey.in/sitemap.xml",
  };
}
