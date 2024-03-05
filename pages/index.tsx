import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import HeroSection from "@/components/Home/HeroSection";
import UtilitySection from "@/components/Home/UtilitySection";
import WorkSection from "@/components/Home/WorkSection";
import RoadmapSection from "@/components/Home/Roadmap";
import MintSection from "@/components/Home/MintSection";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity/sanityClient";
import Marquee from "@/components/Marquee";

const inter = Inter({ subsets: ["latin"] });

const statuesQuery = groq`*[_type == 'statue'] | order(orderRank)`;

export default function Home({ statues }: { statues: any[] }) {
  return (
    <>
      <Head>
        <title>NFT Statues</title>
        <meta
          name="description"
          content="Just some statues, but on the blockchain."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="NFT Statues" />
        <meta property="og:title" content="NFT Statues" />
        {/* <meta property="og:url" content="https://sohub.digital" /> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Just some statues, but on the blockchain."
        />
        <meta
          property="og:image"
          content="https://nft-statues.vercel.app/shareThumb.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="nft statues" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#ff3600" />
        <meta name="robots" content="noindex,nofollow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <main className="bg-black">
        <HeroSection />
        <Marquee identifier="utilities-marq" />
        <UtilitySection />
        <WorkSection />
        <Marquee identifier="roadmap-marq" className="rotate-[-2.5deg] py-32" />
        <RoadmapSection />
        <MintSection statues={statues} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const statues = await sanityClient.fetch(statuesQuery);

  return {
    props: {
      statues,
    },
    revalidate: 1,
  };
}
