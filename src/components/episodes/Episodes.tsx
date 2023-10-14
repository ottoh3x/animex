/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { type AnimeEpisodesProps, EpisodesProps } from "../../../types/types";
import EpisodesPagination from "./EpisodesPagination";
import { useEpisodesImage, useSort } from "../../../store/store";

export default function Episodes({
  episodesList,
  animeImg,
  handleEpisodeRoute,
  episodeNumber,
}: EpisodesProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { isEpImgEnabled, enableEpImg, disableEpImg } = useEpisodesImage();
  const { isSort } = useSort();

  function handlePageChange(pageNumber: any) {
    setCurrentPage(pageNumber);
  }

  const episodesPerPage = 20;
  const startIndex = (currentPage - 1) * episodesPerPage;
  const endIndex = startIndex + episodesPerPage;
  const episodesToRender =
    Array.isArray(episodesList) && !isSort
      ? episodesList
          .sort((a, b): any => a.number - b.number)
          .slice(startIndex, endIndex) || []
      : Array.isArray(episodesList) && isSort
      ? episodesList
          .sort((a, b): any => b.number - a.number)
          .slice(startIndex, endIndex) || []
      : [];

  useEffect(() => {
    setTotalPages(Math.ceil(episodesList?.length / 20));
    setCurrentPage(getPageNumber());
  }, [episodesList]);

  function getPageNumber() {
    const episodesPerPage = 20; // Assuming 10 episodes per page
    const pageNumber = Math.ceil(episodeNumber / episodesPerPage);
    if (
      pageNumber <= 0 ||
      pageNumber > Math.ceil(episodesList?.length / episodesPerPage)
    ) {
      return -1; // Invalid episode number
    }
    return pageNumber;
  }

  return (
    <div>
      <div className="flex gap-2 items-center justify-between">
        <h1>Episodes:</h1>
        {episodesList?.length > 19 && (
          <div>
            <EpisodesPagination
              totalPages={totalPages}
              currentPage={currentPage}
              episodesList={episodesList}
              episodesPerPage={episodesPerPage}
              handlePageChange={handlePageChange}
            />
          </div>
        )}
      </div>
      <div
        className={`grid p-1 ${isEpImgEnabled == "true" ? "grid-cols-2 gap-2" : "grid "}`}
      >
        {episodesToRender?.map((ep: AnimeEpisodesProps, i: number) => (
          <div
            onClick={() => handleEpisodeRoute(ep.id, ep.number)}
            key={i}
            className="flex flex-col max-w-full cursor-pointer relative my-1"
          >
            {isEpImgEnabled == "true" ? (
              <div className="">
                <img
                  className="flex-shrink-0 w-full h-[100px] rounded-sm object-cover"
                  src={ep.image || animeImg}
                  alt={ep.title}
                />
                <small className="bg-neutral-900/80 font-black py-0.5 px-1.5 absolute top-0 left-0 rounded-br-lg">
                  {ep.number}
                </small>
                <small className=" font-lighter p-0.5 ">{ep.title}</small>
              </div>
            ) : (
              <div className="flex bg-neutral-900/80 hover:scale-105 hover:bg-neutral-800 py-2 transition-all duration-300 ">
                <small className="  py-0.5 px-1.5 rounded-br-lg flex-shrink-0 self-center">
                  Episode <span className="txt-primary"> {ep.number}</span>{" "}
                </small>

                <small className=" font-lighter p-0.5 text-zinc-400">
                  {ep.title}
                </small>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
