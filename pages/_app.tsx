import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { GeistSans } from "geist/font/sans";
import { Bebas_Neue } from "next/font/google";
import MintItemDrawerProvider from "@/hooks/useMintItemDrawer";
import { WalletProvider } from "@/contexts/wallet";

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={GeistSans.style} className="font-wrapper">
      <WalletProvider>
        <MintItemDrawerProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MintItemDrawerProvider>
      </WalletProvider>
    </div>
  );
}
