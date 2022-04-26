import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider defaultLocale="en" locale="en">
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp;
