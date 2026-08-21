import { ImageResponse } from "next/og";

export const alt = "Chase Wasalaski — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4efea",
          border: "12px solid #383838",
          padding: 64,
          fontFamily: "ui-monospace, monospace",
          color: "#383838",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#a1a1a1",
          }}
        >
          cwaz.dev
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              textTransform: "uppercase",
            }}
          >
            Chase Wasalaski
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 500,
              color: "#383838",
            }}
          >
            Software Engineer · Jupiter, FL
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              background: "#6fc2ff",
              border: "2px solid #383838",
            }}
          />
          TypeScript · Pipelines · AI products
        </div>
      </div>
    ),
    { ...size },
  );
}
