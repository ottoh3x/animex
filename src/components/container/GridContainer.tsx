"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Icon } from "@iconify/react";

// @ts-ignore
import SwiperCore from "swiper";

import { Navigation, Pagination, Grid } from "swiper/modules";
import Card from "../card/Card";
import EpisodeCard from "../card/EpisodeCard";
import { GridBreakPoints } from "../../../utils/Vars";
import { GridContainerProps } from "../../../types/types";
import WatchCard from "../card/WatchCard";
import NotFound from "../notfound/NotFound";
import ListCard from "../card/ListCard";

SwiperCore.use([Navigation]);

export default function GridContainer({
  data,
  heading,
  swiperId,
  refresh,
}: GridContainerProps) {
  const swiper = useSwiper();
  const currentSwiper = useRef(null);

  return (
    <div className="home_container m-3 md:max-w-[90%] mx-auto">
      {data?.length >= 1 ? (
        <>
          <div className=" w-full flex justify-between items-center mt-5">
            <span className={` px-2 flex  $ font-semibold items-end  text-2xl`}>
              {/* {heading} */}
            </span>

            <div className="flex items-center gap-[2px] mx-1 p-2.5">
              <button className="   " id={`swiper-back-${swiperId}`}>
                <Icon icon="mingcute:left-fill" width={24} />
              </button>
              <button className="     " id={`swiper-forward-${swiperId}`}>
                <Icon icon="mingcute:right-fill" width={24} />
              </button>
            </div>
          </div>
          <Swiper
            ref={currentSwiper}
            speed={600}
            breakpoints={GridBreakPoints(heading)}
            slidesPerView={2}
            slidesPerGroupSkip={1}
            grid={{
              rows: 2,
              fill: "row",
            }}
            navigation={{
              nextEl: `#swiper-forward-${swiperId}`,
              prevEl: `#swiper-back-${swiperId}`,
            }}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Navigation]}
            className="mySwiper w-full "
          >
            {data?.map((item: any, index: any) => (
              <SwiperSlide key={index}>
                {heading === "Trending" ? (
                  <Card
                    {...item}
                    //   selected={handleSelected}
                    heading={heading}
                  />
                ) : heading === "Latest" ? (
                  <EpisodeCard
                    {...item}
                    //   selected={handleSelected}
                    heading={heading}
                  />
                ) : heading === "MyList" ? (
                  <ListCard
                    {...item}
                    //   selected={handleSelected}
                    refresh={refresh}
                    heading={heading}
                  />
                ) : (
                  <WatchCard
                    {...item}
                    //   selected={handleSelected}
                    refresh={refresh}
                    heading={heading}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
