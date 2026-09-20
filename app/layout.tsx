import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikunj Kaslikar — Software & AI/ML Engineer",
  description:
    "Portfolio of Nikunj Kaslikar. Full-stack development and AI-integrated applications. CSE student (AI/ML) at SRM IST, Chennai.",
  keywords: [
    "Nikunj Kaslikar",
    "AI/ML",
    "Full-stack Engineer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Nikunj Kaslikar" }],
  openGraph: {
    title: "Nikunj Kaslikar — Software & AI/ML Engineer",
    description:
      "Full-stack development and AI-integrated applications. Explore projects, live voice assistant demo, and availability.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-black">
      <body className="bg-black text-[#FFF3DE] antialiased selection:bg-[#FF9838] selection:text-black">
        {children}
      </body>
    </html>
  );
}
