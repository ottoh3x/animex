"use client";
import React, { useEffect, useRef, useState } from "react";

import dayjs from "../../../lib/dayjs";
import { Tab, Transition } from "@headlessui/react";
import supabase from "../../../utils/supabase";
import GridContainer from "../container/GridContainer";
import { days } from "../../../utils/Vars";

function Airing() {
  const [data, setData] = useState([]);
  const slider = useRef();
  const [activeDay, setActiveDay] = useState<any>();

  useEffect(() => {
    setActiveDay(days.filter((t) => t.i == todayIndex)[0]?.name);
    // fetchAiring()
    fetchSchedule();
  }, []);

  const today = dayjs();
  const todayIndex = today.day();

  const [selectedTab, setSelectedTab] = useState(todayIndex);
  const [scheduleData, setScheduleData] = useState<any>({});
  console.log("activeday", activeDay);
  console.log("todayindex", todayIndex);
  const renderSchedule = () => {
    switch (activeDay) {
      case "Monday":
        return scheduleData?.mondaySchedule;
      case "Tuesday":
        return scheduleData?.tuesdaySchedule;
      case "Wednesday":
        return scheduleData?.wednesdaySchedule;
      case "Thursday":
        return scheduleData?.thursdaySchedule;
      case "Friday":
        return scheduleData?.fridaySchedule;
      case "Saturday":
        return scheduleData?.saturdaySchedule;
      case "Sunday":
        return scheduleData?.sundaySchedule;
      default:
        return null; // Handle the case when activeDay is not one of the specified days
    }
  };

  const handleTabSelect = (index: any) => {
    setSelectedTab(index);
  };

  const fetchSchedule = async () => {
    // let url = `https://ottoscraper.vercel.app/`
    const { data }: any = await supabase.from("schedule").select("*");
    setScheduleData(data[0].data);
  };

  return (
    <div className="text-white py-3 home_container">
      <div className="w-full px-2  sm:px-0">
        <Tab.Group>
          <Tab.List className="grid grid-cols-3 lg:grid-cols-7 gap-2 w-full lg:max-w-[85%] xl:max-w-[75%] mx-auto place-self-center">
            {days.map((day, index) => {
              const isToday = day.i === (index as any);

              return (
                <Tab
                  key={index}
                  onClick={() => setActiveDay(day.name)}
                  className={`
                px-4 py-2 rounded-full cursor-pointer hover:bg-white border-[2px] border-neutral-800 hover:text-black transition duration-300
                ${todayIndex == day.i && "txt-primary border-white "}
              `}
                >
                  {day.name}
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {days.map((day, index) => {
              return (
                <Tab.Panel key={index}>
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
                    <GridContainer
                      data={renderSchedule()}
                      heading={`Trending`}
                    />
                  </Transition>
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Airing;
