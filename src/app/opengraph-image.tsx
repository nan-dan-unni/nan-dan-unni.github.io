import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.titleDefault;
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
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(91,79,232,0.2), transparent 45%), radial-gradient(circle at 85% 85%, rgba(155,92,246,0.16), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#8c91ff",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Software Engineer
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: -1.5,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              color: "#a1a1aa",
              maxWidth: 980,
              lineHeight: 1.4,
            }}
          >
            Building AI-powered, security-conscious products, and solo-architecting a
            multi-language platform on the side.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
          }}
        >
          <div style={{ width: 60, height: 6, backgroundColor: "#8c91ff", borderRadius: 3 }} />
          <div style={{ width: 60, height: 6, backgroundColor: "#7bb6f5", borderRadius: 3 }} />
          <div style={{ width: 60, height: 6, backgroundColor: "#c69cff", borderRadius: 3 }} />
          <div style={{ width: 60, height: 6, backgroundColor: "#9382db", borderRadius: 3 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
