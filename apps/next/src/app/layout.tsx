import { css, cx } from "@/styled-system/css";
import "./global.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";

const notoSansJP = Noto_Sans_JP({
  preload: false,
});

export const metadata: Metadata = {
  title: "COBACO.CH",
  description: "cobaco page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="Google Tag Manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MW9HZSQD');`}
        </Script>
      </head>
      <body
        className={cx(
          notoSansJP.className,
          css({ display: "flex", minH: "100vh" }),
        )}
      >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MW9HZSQD" height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="GTM" />
        </noscript>
        {children}
      </body>
    </html>
  );
}
