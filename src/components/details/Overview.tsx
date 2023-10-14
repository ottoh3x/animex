import React from "react";
import { ADProps, AnimeInfo, GogoAnimeData } from "../../../types/types";
import { Icon } from "@iconify/react";

const AD = ({ title, data }: ADProps) => {
  return (
    <div className="flex flex-col py-1">
      <span className=" font-bold txt-primary">{title}</span>
      <span className={` capitalize `}>
        <span className=""></span>

        {title == "Rank" ? "#" + data : data}
      </span>
    </div>
  );
};

interface OverViewProps {
  gogoData: GogoAnimeData;
  animeData: AnimeInfo;
  click: boolean;
  handleClick: () => void;
}

export default function Overview({
  animeData,
  gogoData,
  click,
  handleClick,
}: OverViewProps) {
  return (
    <div
      style={
        {
          "--bg-image": `url(${`https://image.tmdb.org/t/p/original${animeData?.backdrop_path}`})`,
        } as any
      }
      className="syno pb-6"
    >
      <div
        className={`a_d rounded-md flex flex-col lg:flex-row gap-1 w-full p-2 `}
      >
        <div className="w-full z-50  max-w-[200px] mx-auto ">
          {/* <button className="p-2 w-full mx-auto  my-1 rounded-full">Watch</button> */}
          <img
            src={
              (animeData?.poster_path &&
                `https://image.tmdb.org/t/p/original${animeData?.poster_path}`) ||
              animeData?.coverimage ||
              gogoData?.image
            }
            className="w-[140px] h-[200px] mx-auto text-center lg:w-full lg:h-[300px] rounded-md object-cover"
          />
        </div>
        <div className="p-1 lg:px-3 w-full  text-left relative">
          <span className="absolute top-0 right-0 ">
            {/* this hidden checkbox controls the state */}

            {/* sun icon */}

            <label className="swap z-50 swap-rotate tool relative" >
              <input type="checkbox" />

              <Icon
                onClick={handleClick}
                className={`${
                  !click ? "swap-on" : "swap-off"
                }swap-on fill-current w-7 h-7 text-white`}
                icon={`${
                  !click ? "zondicons:add-outline" : "dashicons:remove"
                }`}
                hFlip={true}
                vFlip={true}
              />
            </label>
          </span>

          <div className="grid  md:grid-cols-2">
            <AD title={"Rank"} data={animeData?.rank || "?"} />

            <AD title={"Score"} data={animeData?.score || "N/A"} />
            <AD title={"Duration"} data={animeData?.duration || "N/A"} />

            <AD title={"Status"} data={animeData?.status || gogoData?.status} />
            <AD
              title={"Title Japanese"}
              data={animeData?.title_japanese || gogoData?.otherName}
            />

            <AD
              title={"Release Date"}
              data={animeData?.year || gogoData?.releaseDate}
            />
            <AD title={"Rating"} data={animeData?.rating || "N/A"} />
            <AD title={"Source"} data={animeData?.source || "N/A"} />
            <AD title={"Premiered"} data={animeData?.premiered || "N/A"} />
            <AD
              title={"Studios"}
              data={animeData?.studios?.map((s: any, i: number) => (
                <span key={i}>{s.name}</span>
              ))}
            />

            {/* {mal?.airing === "true" && (
          <div className="flex flex-col py-1  ">
            <span className="font-bold text-blue-600 ">Broadcast:</span>
            <span
              className={` capitalize px-1`}
            >
              {animeData?.broadcast || mal?.broadcast || "?"}
            </span>
          </div>
        )} */}
          </div>
        </div>
      </div>
      <div className="  p-2 lg:p-8 my-2 bg-neutral-900/75  w-full lg:w-[87%] mx-auto rounded-xl">
        <div className="flex flex-col gap-3">
          <p className={` font-light`}>
            {animeData?.synopsis || gogoData?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
