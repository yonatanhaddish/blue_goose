import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Iron Goose Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#0D1117",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }} />

        {/* Blue glow top-left */}
        <div style={{
          position: "absolute",
          top: "-160px", left: "-160px",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 65%)",
        }} />

        {/* Orange glow bottom-right */}
        <div style={{
          position: "absolute",
          bottom: "-120px", right: "-120px",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 65%)",
        }} />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "0px" }}>

          {/* Badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            border: "1px solid rgba(249,115,22,0.35)",
            backgroundColor: "rgba(249,115,22,0.1)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#F97316" }} />
            <span style={{ fontSize: "18px", fontWeight: 600, color: "#F97316", letterSpacing: "0.5px" }}>
              Toronto-Based Digital Agency
            </span>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{
              fontSize: "88px", fontWeight: 800,
              color: "#F5F3EF",
              letterSpacing: "-4px", lineHeight: 1,
            }}>
              Built Like Iron.
            </span>
            <span style={{
              fontSize: "88px", fontWeight: 800,
              color: "#3B82F6",
              letterSpacing: "-4px", lineHeight: 1,
              marginTop: "4px",
            }}>
              Made to Fly.
            </span>
          </div>

          {/* Divider */}
          <div style={{
            width: "80px", height: "3px",
            background: "linear-gradient(90deg, transparent, #3B82F6, transparent)",
            borderRadius: "4px",
            marginTop: "28px", marginBottom: "28px",
          }} />

          {/* Subtext */}
          <span style={{
            fontSize: "22px", color: "#555",
            letterSpacing: "0.2px", fontWeight: 400,
          }}>
            irongoosedigital.com
          </span>

        </div>
      </div>
    ),
    { ...size }
  );
}
