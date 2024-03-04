import "~/styles/globals.css";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { appWithTranslation } from "next-i18next";

import Header from "~/components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ThemeProvider enableSystem={true} attribute="class"> */}
      <Header />
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}

export default appWithTranslation(MyApp);
