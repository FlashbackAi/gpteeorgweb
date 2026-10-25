import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import { fontVariables } from "../fonts";
import "./docs.css";

// Root layout for teepin.com/docs. A separate root from the marketing site
// (app/(site)), so the docs' styles and dark theme never reach those pages:
// moving between the two is a full page load.
export const metadata: Metadata = {
  metadataBase: new URL("https://teepin.com"),
  title: {
    default: "Teepin Docs",
    template: "%s | Teepin Docs",
  },
  description:
    "Developer docs for Teepin Inference and Teepin Storage: API keys, OpenAI-compatible chat, buckets, the S3 endpoint and the Python, Node and Go SDKs.",
  icons: {
    icon: [{ url: "/teepin-mark.svg", type: "image/svg+xml" }],
  },
};

export default function DocsRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider theme={{ defaultTheme: "dark", enableSystem: true }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
