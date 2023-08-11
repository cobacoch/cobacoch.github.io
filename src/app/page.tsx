import { css, cx } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";

import { Open_Sans } from "next/font/google";
import Image from "next/image";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={flex({ align: "center", justify: "center", flex: 1, flexDir: "column", gap: 1 })}>
      <Image src="/images/116435654.png" width={128} height={128} alt="cobaco" className={css({ borderRadius: "100%", boxShadow: "0 0 4px rgba(0, 0, 0, 0.16)" })} priority />
      <div className={cx(css({ fontSize: "2xl", fontWeight: 'bold' }), openSans.className)}>@cobacoch</div>
    </main>
  );
}
