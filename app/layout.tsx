import type { Metadata } from "next";
import InitAnimations from "@/components/layout/InitAnimations";
import "@/public/styles/style.scss";

export const metadata: Metadata = {
  title: "INNSIS | Innovation. Insight. Impact",
  description: "INNSIS - Innovation. Insight. Impact",
  keywords: [
    "Software",
    "IT",
    "Agency",
    "Javascript",
    "Typescript",
    "React",
    "nextjs",
  ],
  authors: [
    {
      name: "INNSIS",
      url: "#",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <InitAnimations />
      </body>
    </html>
  );
}
