"use client";
import { useState } from "react";
import { Tab, Transition } from "@headlessui/react";
import Characters from "../details/Characters";
import Similar from "../details/Similar";
import OpEd from "../details/OpEd";
import Relations from "../details/Relations";
import Trailer from "../trailer/Trailer";

type DetailsTabsProps = {
  Overview: any;
  Characters: any;
  Similar: any;
  Relations: any;
  OP: any;
  ED: any;
  Trailer: string;
};

const TP = ({ data }: React.JSX.Element | any) => {
  return (
    <Tab.Panel>
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
        {data}
      </Transition>
    </Tab.Panel>
  );
};

export default function DetailsTabs(props: DetailsTabsProps) {
  let [categories] = useState({
    Overview: "",
    Characters: "",
    Similar: "",
    Relations: "",
    OPED: "",
    Trailer: "",
  });

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
        <Tab.List className="grid grid-cols-4 text-sm md:text-lg md:grid-cols-6 w-full lg:max-w-full 2xl:max-w-[75%] mx-auto place-self-center">
          {Object.keys(categories).map((category, index) => (
            <Tab
              key={index}
              onClick={() => handleItemClick(index, category)}
              className={`
            focus:outline-none
            ${
              activeIndex === index
                ? "txt-primary bg-black hover:text-white"
                : "hover:txt-primary bg-neutral-900/90"
            } text-center p-1.5 mx-[1px] cursor-pointer  text-base`}
            >
              {category}
            </Tab>
          ))}
          <hr
            className="hidden md:block h-0.5 w-full bg-white"
            style={hrStyles}
          />
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
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
              {props.Overview}
            </Transition>
          </Tab.Panel>

          <TP data={<Characters data={props.Characters} />} />

          <TP data={<Similar Data={props.Similar} />} />
          <TP data={<Relations data={props.Relations} />} />

          <TP
            data={<OpEd opening_themes={props.OP} ending_themes={props.ED} />}
          />
          <TP
            data={<Trailer trailer={props.Trailer}/>}
          />
          
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
