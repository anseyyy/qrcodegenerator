import { ImageResponse } from "next/og";

export const alt = "QrCodey | Free Custom QR Code Generator";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "linear-gradient(to right, #09090b, #18181b)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative"
        }}
      >
        {/* Decorative squares */}
        <div
          style={{
            position: "absolute",
            top: 50,
            left: 50,
            width: 100,
            height: 100,
            borderRadius: 20,
            border: "8px solid #A6E22E",
            display: "flex"
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 50,
            right: 50,
            width: 60,
            height: 60,
            borderRadius: 12,
            border: "4px dashed #A6E22E",
            display: "flex"
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 20
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: "bold",
              background: "#A6E22E",
              color: "black",
              padding: "10px 30px",
              borderRadius: 20,
              display: "flex"
            }}
          >
            Q
          </div>
          <span style={{ fontWeight: "bold" }}>QrCodey</span>
        </div>
        
        <div style={{ fontSize: 28, color: "#a1a1aa", fontWeight: 500 }}>
          Free Custom QR Code Generator & Maker with Logo
        </div>
        <div style={{ fontSize: 18, color: "#A6E22E", marginTop: 30, textTransform: "uppercase", letterSpacing: 4 }}>
          www.qrcodey.in
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
