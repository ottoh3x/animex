import React from "react";
import { AnimeInfo } from "../../../types/types";
import Link from "next/link";

interface AnimeInfoProps {
  title: string;
  data: any;
}
const AnimeInformation = (props: AnimeInfoProps) => {
  return (
    <div className=" flex py-1 items-center ">
      <span
        className={`font-bold text-md ${
          props.title === "Genres" && "flex self-start"
        }`}
      >
        {props.title}:
      </span>
      <span className={` text-gray-300 capitalize px-1`}>{props.data}</span>
    </div>
  );
};

export default function AnimeDetails(animeData: AnimeInfo) {
  return (
    <div className="p-2 max-w-[400px]">
      <AnimeInformation title={"Score"} data={animeData.score || "?"} />
      <AnimeInformation title={"Rank"} data={"#" + animeData.rank} />
      <AnimeInformation title={"Episodes"} data={animeData.episodes} />
      <AnimeInformation
        title={"Genres"}
        data={
          <span className={`text-gray-400 flex flex-row flex-wrap w-full `}>
            {animeData.genres?.map((Item: any, index: number) => (
              <Link href={`/genre/${Item}/1`} key={index}>
                <span
                  key={index}
                  className={`  mr-0.5 text-blue-400   cursor-pointer flex justify-center whitespace-nowrap items-center transform hover:text-blue-200  transition-transform duration-400`}
                >
                  {Item}
                  {index !== animeData.genres.length - 1 && ", "}
                </span>
              </Link>
            ))}
          </span>
        }
      />

      <AnimeInformation title={"Released"} data={animeData.year} />
      <AnimeInformation title={"Rating"} data={animeData.rating || "?"} />
      <AnimeInformation title={"Duration"} data={animeData.duration || "N/A"} />
      <AnimeInformation
        title={"Status"}
        data={animeData.status || "props.gogoData?.status"}
      />
      <AnimeInformation title={"Broadcast"} data={animeData.broadcast || "?"} />
      <AnimeInformation title={"Source"} data={animeData.source || "N/A"} />
      <AnimeInformation
        title={"Studios"}
        data={animeData.studios?.[0]?.name || "N/A"}
      />
    </div>
  );
}
