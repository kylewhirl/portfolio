import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8fbff",
          backgroundImage:
            "radial-gradient(circle at top left, rgba(160, 210, 255, 0.7), transparent 50%), radial-gradient(circle at bottom right, rgba(120, 170, 255, 0.6), transparent 50%)",
          fontSize: 60,
          fontWeight: 600,
          color: "#0f172a",
          padding: "80px",
        }}
      >
        <div style={{ maxWidth: 900, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#64748b",
            }}
          >
            Kyle Worrall
          </div>
          <div style={{ marginTop: 24 }}>
            I build smart integrations and clean UI for real-world systems.
          </div>
        </div>
      </div>
    ),
    size
  );
}
