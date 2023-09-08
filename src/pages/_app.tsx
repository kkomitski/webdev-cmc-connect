import RootLayout from "@/components/global/root-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <RootLayout>
        <Component key={asPath} {...pageProps} />
      </RootLayout>
    </AnimatePresence>
  );
}
