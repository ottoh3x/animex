import React from "react";
import WatchContainer from "@/components/Watch";

const fetchAnime = async (animeId: any) => {
  let req = await fetch(`https://ottoex.vercel.app/api/a/${animeId}`);
  let res = await req.json();
  return res;
};
type PageProps = {
  params: {
    slug: any;
  };
};
export default async function Watch({ params: { slug } }: PageProps) {
  const data = await fetchAnime(slug[0]);

  return (
    <div>
      <WatchContainer
        animeData={data[0]}
        episodesList={data[0].episodeslist}
        slug={slug}
      />
    </div>
  );
}
