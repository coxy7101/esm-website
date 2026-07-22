import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Essential Safety Management — Health & Safety Consultancy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#12294D",
          padding: "80px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", gap: "12px", marginBottom: "40px" }}>
          <div style={{ width: "16px", height: "90px", background: "linear-gradient(to top, #D62839, #f0424f)", borderRadius: "3px" }} />
          <div style={{ width: "16px", height: "140px", background: "linear-gradient(to top, #F4A020, #f7c065)", borderRadius: "3px" }} />
          <div style={{ width: "16px", height: "190px", background: "linear-gradient(to top, #5FA82E, #8fcc5e)", borderRadius: "3px" }} />
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "white", lineHeight: 1.1, maxWidth: "900px" }}>
          Essential Safety Management
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#F4A020", marginTop: "20px", fontWeight: 600 }}>
          Protecting People. Ensuring Compliance.
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "rgba(255,255,255,0.7)", marginTop: "12px" }}>
          UK-Wide Health &amp; Safety Consultancy
        </div>
      </div>
    ),
    { ...size }
  );
}
