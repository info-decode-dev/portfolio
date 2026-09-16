import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

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
          background: "#0a0b0c",
          borderRadius: 8,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 800,
            color: "#ebe6dc",
            letterSpacing: "-0.06em",
            lineHeight: 1,
            paddingBottom: 2,
          }}
        >
          A
          <div
            style={{
              width: 4,
              height: 4,
              borderRadius: 999,
              background: "#e8903a",
              marginLeft: 1,
              marginBottom: 2,
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
