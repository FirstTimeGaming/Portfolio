import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4efea",
          border: "2px solid #383838",
          color: "#383838",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily: "ui-monospace, monospace",
        }}
      >
        CW
      </div>
    ),
    { ...size },
  );
}
