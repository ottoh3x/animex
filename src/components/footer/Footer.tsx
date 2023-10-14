"use client";
import { useRouter } from "next/navigation";
import React from "react";
// import { BiMessage } from "react-icons/bi";
// import { FaDiscord, FaGithub } from "react-icons/fa";
// import {SiBuymeacoffee} from "react-icons/si"
import { Icon } from "@iconify/react";
import { useContact } from "../../../store/store";
import { isMobile } from "@oplayer/core";


const FooterStyle = !isMobile ? {
  overflow: 'visible',
  opacity: 1,
  background: 'transparent url(https://i.imgur.com/Ax4ZUl9.png) bottom left/330px auto no-repeat',
  zIndex: 0,
  left: '-40px',
  bottom: 0,
  height: '244px', // 'px' should be lowercase
  backgroundPosition: 'left'
} : {};

function Footer() {
  const router = useRouter();
  const { enableIsContact } = useContact();

  return (
    <footer className="p-3   md:px-6 md:mt-20  relative bg-neutral-900/60">
      <div  style={FooterStyle} >
        <div className="flex flex-col  items-center justify-center relative z-[1]">
          <img
            src={`/logo/favicon-1.png`}
            className="h-[4rem] w-[4rem] rounded-full object-cover"
          />
          <h1
            id="title"
            onClick={() => router.push("/")}
            className={`flex cursor-pointer  items-end text-[30px] spacing-[1px] text-white font-black `}
          >
            <span className="text-blue-800  font-black">A</span>
            NIMΞX
          </h1>

          <div className="flex gap-1">
            <a
              href="https://ko-fi.com/ottoprogrammer"
              target="_blank"
              aria-label="Support Me"
              className="tool rounded-full border-[2px] cursor-pointer border-white p-2 hover:bg-blue-700 transition-all ease-in-out duration-500 hover:-translate-y-1 text-[#ffffff]"
            >
              <Icon icon="cib:buy-me-a-coffee" />
            </a>
            <a
              href="https://discord.gg/uEAKwRrFpn"
              target="_blank"
              aria-label="Discord"
              className="tool rounded-full border-[2px] cursor-pointer border-white p-2 hover:bg-blue-700 transition-all ease-in-out duration-500 hover:-translate-y-1 text-[#ffffff]"
            >
              <Icon icon="ic:baseline-discord" />
            </a>
            <span
              aria-label="Github"
              className="tool rounded-full border-[2px] cursor-pointer border-white p-2 hover:bg-blue-700 transition-all ease-in-out duration-500 hover:-translate-y-1 text-[#ffffff]"
            >
              <Icon icon="ant-design:github-outlined" />
            </span>
            <span
              onClick={enableIsContact}
              aria-label="Contact Me"
              className="tool rounded-full border-[2px] cursor-pointer border-white p-2 hover:bg-blue-700 transition-all ease-in-out duration-500 hover:-translate-y-1 text-[#ffffff]"
            >
              <Icon icon="mdi:contact" />
            </span>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-400 lg:my-6 z-[1] relative" />
        <div className="flex flex-col gap-2">
          <span className="block  text-gray-200 text-center z-[1]  relative">
            Animex does not store any files on our server, we only linked to the
            media which is hosted on 3rd party services.
          </span>

          <span className="block text-sm text-gray-400 text-center z-[1] relative">
            © 2023{" "}
            <a href="#" className="hover:underline">
              AnimexStream™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
