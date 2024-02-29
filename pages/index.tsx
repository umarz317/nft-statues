import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SOHub · Next Starter</title>
        <meta
          name="description"
          content="SOHub next starter is a template for nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="SOHub Next Starter" />
        <meta property="og:title" content="SOHub · Next Starter" />
        <meta property="og:url" content="https://sohub.digital" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="SOHub is an innovative agency that builds creative digital experiences &amp; identities for companies and brands."
        />
        <meta
          property="og:image"
          content="https://sohub.digital/ShareThumb.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="sohub" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sohubdigital" />
        <meta name="twitter:domain" content="sohub.digital" />
        <meta name="theme-color" content="#000" />
        <meta name="robots" content="noindex,nofollow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <main className="w-screen h-screen bg-black">
        <div className="absolute left-1/2 -translate-x-1/2 top-[20%] flex flex-col items-center">
          <h1 className="text-white text-3xl">SOHub Next Starter</h1>
          <span className="block text-white/40">
            A great start for making any project in NextJS.
          </span>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          <Image
            className="relative"
            src="/sohub.svg"
            alt="SOHub Logo"
            width={220}
            height={220}
            priority
          />
        </div>
      </main>
    </>
  );
}
