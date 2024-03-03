import Head from "next/head";
import { NextStudio } from "next-sanity/studio";
import { metadata } from "next-sanity/studio/metadata";

import config from "@/lib/sanity/sanity.config";

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>Statues CMS</title>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      {/*@ts-expect-error*/}
      <NextStudio config={config} />
    </>
  );
}
