import { css, cx } from "@/styled-system/css";
import "./global.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

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
      <body
        className={cx(
          notoSansJP.className,
          css({ display: "flex", minH: "100vh" }),
        )}
      >
        {children}
      </body>
    </html>
  );
}
