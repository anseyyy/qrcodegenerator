export default function manifest() {
  return {
    name: "QrCodey",
    short_name: "QrCodey",
    description: "Free Custom QR Code Generator & Maker with Logo",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/android-chrome-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
