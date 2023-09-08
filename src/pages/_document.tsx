import { Html, Head, Main, NextScript } from 'next/document'
import neueHaasGrotDisp from "../styles/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`${neueHaasGrotDisp.variable} font-neue-haas-grot font-bold`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
