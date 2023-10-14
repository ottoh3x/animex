"use client";
import React from "react";
import Link from "next/link";

function Similar({ Data }: any) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 p-4">
      {Data?.length > 1
        ? Data?.map((anime: any) => (
            <div
              key={anime?.entry?.mal_id}
              className="flex gap-2 bg-[#3332] p-1"
            >
              <img className="w-[60px] h-[80px] " src={anime?.image} />
              <div className="flex flex-col justify-between">
                <Link href={`/anime/${anime?.malId}`}>
                  <small className=" p-1 text-start font-semibold cursor-pointer hover:text-blue-500">
                    {anime?.title?.romaji}
                  </small>
                </Link>
                <small className="text-gray-400 text-start p-1">
                  <span className="text-neutral-400">Episodes: </span>
                  {anime?.episodes}
                </small>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}

export default Similar;
