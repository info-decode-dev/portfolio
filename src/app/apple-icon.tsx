import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0b0c",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            fontSize: 110,
            fontWeight: 800,
            color: "#ebe6dc",
            letterSpacing: "-0.06em",
            lineHeight: 1,
            paddingBottom: 8,
          }}
        >
          A
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: "#2dd4bf",
              marginLeft: 4,
              marginBottom: 12,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
