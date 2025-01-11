import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";

const ComicNew = Comic_Neue({
  weight: "700",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Image to Base64",
  description: "Made with love with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ComicNew.className} ${ComicNew} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
