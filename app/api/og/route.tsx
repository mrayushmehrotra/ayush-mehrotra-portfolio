import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title =
      searchParams.get("title") || "Ayush Mehrotra - Full Stack Developer";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
            backgroundImage:
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            <h1
              style={{
                fontSize: "64px",
                fontWeight: "bold",
                color: "white",
                margin: "0",
                lineHeight: "1.2",
                marginBottom: "20px",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "28px",
                color: "rgba(255, 255, 255, 0.9)",
                margin: "0",
              }}
            >
              Expert Full Stack Developer
            </p>
            <p
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.7)",
                margin: "10px 0 0 0",
              }}
            >
              Next.js • React • Node.js • TypeScript
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate image", {
      status: 500,
    });
  }
}
