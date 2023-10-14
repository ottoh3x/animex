import Card from "@/components/card/Card";
import GridContainer from "@/components/container/GridContainer";
import Layout from "@/components/head/Head";
import HomeSwiper from "@/components/home/HomeSwiper";
import Tabs from "@/components/tabs/Tabs";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title:
    "Animex - Watch Anime for free in HD quality with English subbed or dubbed",
  description:
    "Browse thousands of animes here for free. High quality anime 24/7 without signing up or malicious ads.",
  keywords:
    "Animex, animex, animexstream, anime, anime live, free anime, anime stream, anime hd, english sub, kissanime, gogoanime, animeultima, 9anime, 123animes, animefreak, vidstreaming, gogo-stream",
  openGraph: {
    images: ["https://i.imgur.com/yH3ftPc.png"],
  },
  twitter: {
    title:
      "Animex - Watch Anime for free in HD quality with English subbed or dubbed",
    images: ["https://i.imgur.com/yH3ftPc.png"],
    site: "Animex",
    description:
      "Browse thousands of animes here for free. High quality anime 24/7 without signing up or malicious ads.",
  },
  authors: {
    name: "Otto Programmer",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

const getTrending = async () => {
  let req = await fetch(
    `https://eu2-cheerful-tadpole-32531.upstash.io/get/trending`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REDIS_BEARER_TOKEN}`,
      },
    }
  );
  let res = await req.json();

  return JSON.parse(res.result);
};

// const fetchRedis = async () => {
//   let req = await fetch(`https://eu2-cheerful-tadpole-32531.upstash.io/get/death-note`, {
// headers: {
// Authorization: "Bearer An8TACQgM2ZmNTUwOWEtM2I5Yy00ZWE0LWE2NWItMmNiNjFiYTFjYzI1DNPhw9vdt05fBhjPq1sklWtBNW5UapmmuUwqhABRhl4="
// }
// })
// let res = await req.json();

//   return res;

// }

const fetchLatest = async () => {
  let req = await fetch(
    `https://eu2-cheerful-tadpole-32531.upstash.io/get/latest`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${process.env.REDIS_BEARER_TOKEN}`,
      },
    }
  );
  let res = await req.json();

  return JSON.parse(res.result);
};

async function Home() {
  const data = await getTrending();
  const latest = await fetchLatest();

  return (
    <>
      <HomeSwiper props={data} />
      <Tabs Trending={data} Latest={latest} MyList={[]} />
    </>
  );
}

export default Home;
