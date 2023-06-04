import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Jost&family=Teko:wght@700&display=swap"
          }
          rel={"preload"}
          as={"font"}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
