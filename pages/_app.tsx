import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import { Provider } from "react-redux";
import getStore from "redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const store = getStore(pageProps.initialState);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
