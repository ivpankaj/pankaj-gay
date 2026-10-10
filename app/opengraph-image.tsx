import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = {
  width: 1200,
  height: 630,
};
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 50% 20%, #18181b 0%, #000000 70%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* Subtle decorative border */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "1px solid #27272a",
            borderRadius: "32px",
            display: "flex",
          }}
        />

        {/* Top Handle pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 20px",
            borderRadius: "999px",
            backgroundColor: "#18181b",
            border: "1px solid #3f3f46",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#22c55e",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              letterSpacing: "0.2em",
              color: "#a1a1aa",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {siteConfig.alternateName}
          </span>
        </div>

        {/* Main Name */}
        <div
          style={{
            fontSize: "84px",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            textAlign: "center",
            lineHeight: 1,
            color: "#ffffff",
            marginBottom: "18px",
          }}
        >
          {siteConfig.name}
        </div>

        {/* Description / Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: "760px",
            lineHeight: 1.4,
            marginBottom: "36px",
          }}
        >
          Official Personal Website & Central Social Media Directory
        </div>

        {/* Bottom domain tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "20px",
            color: "#71717a",
            fontWeight: 500,
          }}
        >
          pankaj.gay
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
