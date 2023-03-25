import { store } from "@/config/store";
import { Provider } from "react-redux";

import '@/i18n';


import "@/styles/globals.css";

import { ThemeProvider } from "@/client/material-tailwind";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
