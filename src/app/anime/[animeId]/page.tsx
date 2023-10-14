/* eslint-disable @next/next/no-img-element */
import WatchContainer from "@/components/Watch";
import AnimeDetails from "@/components/details/AnimeDetails";
import React from "react";
import supabase from "../../../../utils/supabase";

const fetchAnime = async (q: string | number, title: string | undefined) => {
  const { data } = await supabase
    .from("anime")
    .select("*")
    .or(`anime_id.eq.${q},mal_id.eq.${q},title.eq.${title}`);
  // let res = await req.json();
  return data;
};

import { Metadata, ResolvingMetadata } from "next";
import { AnimeInfo, EpisodesListProps } from "../../../../types/types";

type PageProps = {
  params: {
    animeId: string | number;
    ep: number;
  };
  searchParams?: {
    title: string;
    ep: number;
  };
};

interface AnimeInfoProps {
  title: string;
  data: any;
}

export async function generateMetadata(
  { params: { animeId, ep }, searchParams: query }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const getAnime = await fetchAnime(animeId, query?.title);
  const data: AnimeInfo = getAnime?.filter(
    (anime) => !anime.title?.includes("(Dub)")
  )[0];
  const currentEpisode: EpisodesListProps | any =
    query?.ep &&
    data?.episodeslist?.length >= 1 &&
    data?.episodeslist?.filter(
      (ep: EpisodesListProps) => ep?.number == query?.ep
    )[0];

  console.log(query?.title);

  return {
    title: query?.ep ? data?.title + " Episode " + query?.ep : data?.title,
    description: query?.ep
      ? currentEpisode?.description || data?.synopsis
      : data?.synopsis,
    openGraph: {
      images: [
        query?.ep ? currentEpisode?.image : data?.coverimage || data?.image_url,
      ],
    },
  };
}

export default async function Anime({
  params: { animeId },
  searchParams: query,
}: PageProps) {
  const getAnime = await fetchAnime(animeId, query?.title);
  const data = getAnime?.filter((anime) => !anime.title?.includes("(Dub)"))[0];

  return (
    <div className="">
      <div
        className={` background-transparent w-full   lg:py-1 flex justify-center   md:mt-0  `}
      >
        <div
          className={`w-full flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-stretch z-[1] `}
        >
          <WatchContainer
            animeData={data}
            episodesList={data?.episodeslist}
            gogoId={data?.anime_id || animeId}
          />
        </div>
      </div>
    </div>
  );
}

// export async function generateStaticParams() {

//   let req = await fetch(`https://ottodb.vercel.app/api/popular/1`)
//   let res = await req.json()

//   return res.map((a:any) => ({
//     animeId: a.url.toString(),
//   }))

// }
