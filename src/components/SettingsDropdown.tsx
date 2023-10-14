"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Switch } from "@headlessui/react";
import {
  useAutoNext,
  useAutoPlay,
  useAutoSkip,
  useEpisodesImage,
} from "../../store/store";

export default function SettingsDropdown() {
  const isEpisodesImg =
    typeof window !== "undefined" && localStorage.getItem("showEpisodesImg");
  const autoNext =
    typeof window !== "undefined" && localStorage.getItem("autoNext");
  const autoPlay =
    typeof window !== "undefined" && localStorage.getItem("autoPlay");

  const autoSkip =
    typeof window !== "undefined" && localStorage.getItem("autoSkip");
  console.log(typeof isEpisodesImg);

  const { isEpImgEnabled, enableEpImg, disableEpImg } = useEpisodesImage();
  const { isAutoNext, enableAutoNext, disableAutoNext } = useAutoNext();
  const { isAutoPlay, enableAutoPlay, disableAutoPlay } = useAutoPlay();
  const { isAutoSkip, enableAutoSkip, disableAutoSkip } = useAutoSkip();
  const isN = useRef(null);
  return (
    <Menu as="div" className="relative inline-flex text-left z-50">
      <Menu.Button
        title="Settings"
        aria-label="Settings"
        className=" inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 text-sm font-medium text-white hover:txt-primary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <Icon icon="uil:setting" width={25} />

        {/* <Icon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
              icon="gridicons:dropdown"
            /> */}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-8 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item as="div">
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-neutral-800 text-white" : "text-gray-200"
                  } group flex gap-3 w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Switch
                    ref={isN}
                    checked={autoNext == "true" ? true : false}
                    onChange={
                      autoNext == "true" ? disableAutoNext : enableAutoNext
                    }
                    className={`${
                      autoNext == "true" ? "bg-red-600" : "bg-neutral-700"
                    }
          relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    {/* <span className="sr-only">Use setting</span> */}
                    <span
                      aria-hidden="true"
                      className={`${
                        autoNext == "true" ? "translate-x-5" : "translate-x-0"
                      }
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                  AutoNext
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-neutral-800 text-white" : "text-gray-200"
                  } group flex gap-3 w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Switch
                    checked={autoSkip == "true" ? true : false}
                    onChange={isAutoSkip ? disableAutoSkip : enableAutoSkip}
                    className={`${
                      autoSkip == "true" ? "bg-red-600" : "bg-neutral-700"
                    }
          relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${
                        autoSkip == "true" ? "translate-x-5" : "translate-x-0"
                      }
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                  AutoSkip
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-neutral-800 text-white" : "text-gray-200"
                  } group flex gap-3 w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Switch
                    checked={autoPlay == "true" ? true : false}
                    onChange={
                      autoPlay == "true" ? disableAutoPlay : enableAutoPlay
                    }
                    className={`${
                      autoPlay == "true" ? "bg-red-600" : "bg-neutral-700"
                    }
          relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${
                        autoPlay == "true" ? "translate-x-5" : "translate-x-0"
                      }
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                  AutoPlay
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-neutral-800 text-white" : "text-gray-200"
                  } group flex gap-3 w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Switch
                    checked={isEpisodesImg == "true" ? true : false}
                    onChange={
                      isEpisodesImg == "true" ? disableEpImg : enableEpImg
                    }
                    className={`${
                      isEpisodesImg == "true" ? "bg-red-600" : "bg-neutral-700"
                    }
          relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${
                        isEpisodesImg == "true"
                          ? "translate-x-5"
                          : "translate-x-0"
                      }
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                  Show Episodes Images
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
