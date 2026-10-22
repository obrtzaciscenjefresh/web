import { ImageResponse } from "next/og";

export const alt = "Fresh - pranje tepiha u Zagrebu uz besplatnu dostavu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "linear-gradient(135deg, #2c549d 0%, #1c3767 60%, #459cb2 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: 4 }}>FRESH</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            Pranje tepiha Zagreb
          </div>
          <div style={{ fontSize: 38, opacity: 0.9 }}>
            Besplatno preuzimanje i dostava
          </div>
        </div>
        <div style={{ fontSize: 30, opacity: 0.8 }}>fresh-ciscenje.hr</div>
      </div>
    ),
    size
  );
}
