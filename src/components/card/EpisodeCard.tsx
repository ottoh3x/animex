"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimeInfo } from "../../../types/types";
import { Icon } from "@iconify/react";

function EpisodeCard(anime: any) {
  return (
    <>
      <Link
        className=" w-full max-w-[200px] hover:-translate-y-1 transition-all duration-300 ease-in-out inline-grid"
        href={{

          pathname : `/anime/${anime.id}`,
          query : {
            id :anime.id,
            ep : anime.episodeNumber,
            title : anime.title
          }
        
        }}
      >
        <div className={`card  overflow-hidden `}>
          <img
            className=" object-cover  h-[180px] md:h-[270px]  rounded-sm"
            src={anime.image}
            alt={anime?.title}
          />
          <small
            style={{
              // backgroundImage:
              //   "url(https://cdn.myanimelist.net/images/image_box_shadow_bottom.png?v=1634263200)",
              backgroundSize: "100% 100%",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              textShadow: "0 1px 2px #000, 0 1px 2px #000",
              fontSize: ".75rem",
            }}
            className="text-neutral-100 p-2 z-50 whitespace-nowrap text-ellipsis overflow-hidden  text-start hover:before:scale-105"
          >
            {anime?.title}
          </small>
          <span className="absolute top-1 left-2 bg-black/70 px-2 py-0 rounded-sm">
            <span
              className="text-white font-semibold"
              style={{ textShadow: "rgb(0, 0, 0) 1px 1px 5px" }}
            >
              {anime.episodeNumber}
            </span>
          </span>
        </div>
      </Link>
    </>
  );
}

export default EpisodeCard;
