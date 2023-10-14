"use client";
import { useState } from "react";
import { Tab, Transition } from "@headlessui/react";
import GridContainer from "../container/GridContainer";
// import { watchList } from '../watchlist/WatchList'
import WatchList from "../watchlist/WatchList";
import MyList from "../watchlist/MyList";
import Airing from "../schedule/Schedule";

type GenresTabProps = {
  data: any[];
};

const genres = [
  "Fantasy",
  "Action",
  "Horror",
  "Drama",
  "Romance",
  "Psychological",
  "Mystery",
  "Thriller",
  "Comedy",
];

export default function GenresTab({ data }: GenresTabProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: number, itemName: string) => {
    setActiveIndex(index);
    // Do something with the itemName, if needed
  };
  const hrStyles = {
    marginLeft: `${activeIndex * 100}%`,
    transition: "margin-left 0.3s ease-in-out",
  };
  return (
    <div className="w-full px-2  sm:px-0">
      <Tab.Group>
        <Tab.List className="flex flex-wrap lg:grid grid-cols-9 w-full lg:max-w-[85%] xl:max-w-[75%] text-[12px] md:text-[16px] mx-auto place-self-center">
          {genres.map((genre, index) => (
            <Tab
              key={index}
              onClick={() => handleItemClick(index, genre)}
              className={`
            focus:outline-none
            ${
              activeIndex === index
                ? "txt-primary bg-black hover:text-white"
                : "hover:txt-primary bg-neutral-900"
            } text-center p-2 mx-[1px] cursor-pointer font-bold`}
            >
              {genre}
            </Tab>
          ))}
          <hr
            className="hidden md:block h-0.5 w-full bg-white"
            style={hrStyles}
          />
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(data)?.map((d, idx) => (
            <Tab.Panel key={idx}>
              <Transition
                appear={true}
                as={"div"}
                show={true}
                enter="transform transition duration-[500ms]"
                enterFrom="opacity-0 scale-[0.90]"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 rotate-0 scale-100 "
                leaveTo="opacity-0 scale-95 "
              >
                <GridContainer data={d} heading={"Trending"} />

                {/* <GridContainer data={posts} heading={idx == 0 ? "Latest" : idx === 1 ? "Trending" : "List"}/> */}
              </Transition>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
