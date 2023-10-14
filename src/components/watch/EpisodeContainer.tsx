import React from "react";
import { Icon } from "@iconify/react";

import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

import {HiSwitchHorizontal} from "react-icons/hi"

type EpisodeContainerProps = {
  title: string;
  lastEpisode: number;
  handleNextEpisode: () => void;
  handlePrevEpisode: () => void;
  handleOpen: React.MouseEventHandler<HTMLElement> | undefined;
  download: string;
  totalEpisodes: number;
};

export default function EpisodeContainer({
  title,
  lastEpisode,
  handleNextEpisode,
  handlePrevEpisode,
  handleOpen,
  download,
  totalEpisodes,
}: EpisodeContainerProps) {
  const cls =
    "text-zinc-400 hover:txt-primary cursor-pointer flex items-center gap-1";
  return (
    <div className="p-2">
      <div className="flex justify-between">
        <span className="">{title}</span>

        <div className="flex gap-1  ">
          {lastEpisode != 1 && (
            <div
              onClick={handlePrevEpisode}
              aria-label="Prev Ep"
              className="flex tool relative items-center max-h-[30px] rounded-md gap-1 py-0.5 md:py-1 px-2.5 bg-neutral-800/80 cursor-pointer hover:bg-[#e11d48] transition-all duration-300 ease-out"
            >
              <TbPlayerTrackPrevFilled
                className="text-white  "
                // icon="bx:skip-next-circle"
                size={20}
              />
            </div>
          )}

          {totalEpisodes != lastEpisode && (
            <div
              aria-label="Next Ep"
              onClick={handleNextEpisode}
              className="flex items-center relative tool max-h-[30px] rounded-md gap-1 py-0.5 md:py-1 px-2.5 bg-neutral-800/80 cursor-pointer hover:bg-[#e11d48] transition-all duration-300 ease-out"
            >
              <TbPlayerTrackNextFilled
                className="text-white  "
                // icon="bx:skip-next-circle"
                size={20}
              />
            </div>
          )}
        </div>
        
      </div>

      <small className="text-zinc-400 cursor-pointer">
        Episode {lastEpisode}
      </small>

      

      <div className="flex text-[13px] md:text-lg  gap-4 justify-end mt-2">
        <span className={cls}>
          <Icon icon="mdi:thumb-up" color="white" width="24" />
        </span>
        <span className={cls}>
          <Icon icon="mdi:thumb-down" color="white" width="24" />
        </span>

       
        <a href={download} target="_blank" className={cls}>
          <Icon icon="bxs:cloud-download" color="white" width={24} />
          <span>DOWNLOAD</span>
        </a>
        <span onClick={handleOpen} className={cls}>
          <Icon icon="ic:baseline-flag" color="white" width="24" />
          <span>REPORT</span>
        </span>
      </div>
    </div>
  );
}
