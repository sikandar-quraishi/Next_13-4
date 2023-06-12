
import "@/styles/globals.css";
import Layout from "./components/layout";
import { AuthProvider } from './context/AuthContext';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Layout>
  );
}
