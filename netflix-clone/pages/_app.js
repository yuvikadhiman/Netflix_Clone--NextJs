import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout/layout";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from "../redux_features/Store";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      <ToastContainer position='top-center' />

      </Provider>
    </SessionProvider>
  );
}
