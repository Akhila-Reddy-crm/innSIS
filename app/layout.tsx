import type { Metadata } from "next";
import Script from "next/script";
import InitAnimations from "@/components/layout/InitAnimations";
import { I18nWrapper } from "@/components/i18n/I18nWrapper";
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
  icons: {
    icon: "/INNSIS_icon_navy_bg.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3RCLZ240MM"
          strategy="afterInteractive"
          async
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3RCLZ240MM');
          `}
        </Script>
      </head>
      <body>
        <I18nWrapper>
          {children}
          <InitAnimations />
        </I18nWrapper>
      </body>
    </html>
  );
}
