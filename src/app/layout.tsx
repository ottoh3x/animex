/* eslint-disable @next/next/next-script-for-ga */
"use client";
import "./globals.css";
import type { Metadata } from "next";
import Theme from "@/components/theme/Theme";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "@/components/search/Search";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import { useState } from "react";
import Layout from "@/components/head/Head";
import Contact from "@/components/contact/Contact";
import { useContact } from "../../store/store";
import { Analytics } from "@vercel/analytics/react";

// export const metadata: Metadata = {
//   title: "Animex",
//   description:
//     "Animex - Watch Anime for free in HD quality with English subbed or dubbed. You can watch anime online free in HD. Best place for free find and one-click anime. English Subbed and Dubbed anime online. WATCH NOW!",
//   keywords:
//     "Animex, animex , animexstream, anime, anime live, free anime, anime stream, anime hd, english sub, kissanime, gogoanime, animeultima, 9anime, 123animes, animefreak, vidstreaming, gogo-stream",
//   icons: "/logo",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDropDown, setIsDropDown] = useState(false);
  const { enableIsContact } = useContact();

  return (
    <html data-theme={"black"} lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${process.env.GOOGLE_TAGS});
  `,
          }}
        />
      </head>

      {/* <head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/kan.jpg"></link>
      <meta name="theme-color" content="#fff" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:site_name" content="Animex" />
      <meta property="og:type" content="website" />
      <meta name="author" content={"ottoprogrammer"} />
      <meta
        name="keywords"
        content="Animex, animex, animexstream, anime, anime live, free anime, anime stream, anime hd, english sub, kissanime, gogoanime, animeultima, 9anime, 123animes, animefreak, vidstreaming, gogo-stream"
      />
      <meta
        property="og:title"
        content="Animex - Watch Anime for free in HD quality with English subbed or dubbed"
      />
      <meta
        property="og:description"
        content="Animex - Watch Anime for free in HD quality with English subbed or dubbed. You can watch anime online free in HD. Best place for free find and one-click anime. English Subbed and Dubbed anime online. WATCH NOW!"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Animex" />
      <meta property="og:url" content="https://animex.live/" />
      <meta itemProp="image" content="https://i.imgur.com/yH3ftPc.png" />
      <meta property="og:image" content="https://i.imgur.com/yH3ftPc.png" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        property="og:image:secure_url"
        content="https://i.imgur.com/yH3ftPc.png"
      />
      <meta property="og:image:width" content="650" />
      <meta property="og:image:height" content="350" />
      <meta property="twitter:title" content="Animex - Anywhere Anytime" />
      <meta
        property="twitter:description"
        content="Browse thousands of animes here for free. High quality anime 24/7 without signing up or malicious ads."
      />
      <meta property="twitter:url" content="https://animex.live" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="apple-mobile-web-app-status-bar" content="#c40808" />
      <link rel="apple-touch-icon" href="logo250.png" />
      <meta name="theme-color" content="#000000" />
      </head> */}

      <body className="min-h-screen">
        <div className="navbar bg-neutral-900 mb-8">
          <div className="navbar-start">
            <div
              onClick={() => setIsDropDown((t) => !t)}
              className="dropdown  "
            >
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle swap swap-rotate"
              >
                {/* this hidden checkbox controls the state */}

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              </label>

              {/* <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label> */}

              {isDropDown && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content relative mt-3 z-50 p-2 shadow bg-neutral-900 rounded-lg w-52"
                >
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href={`/genres`}>Genres</Link>
                  </li>
                  <li>
                    <Link href={`/popular`}>Popular</Link>
                  </li>
                  <li>
                    <span onClick={enableIsContact}>Contact</span>
                  </li>
                  <li>
                    <a href="https://ko-fi.com/ottoprogrammer" target="_blank">
                      <span>Support</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/uEAKwRrFpn" target="_blank">
                      <span>Discord</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="navbar-center">
            <Link
              href="/"
              className="btn btn-ghost normal-case text-xl rounded-full"
            >
              ANIMEX
            </Link>
          </div>
          <div className="navbar-end">
            <Search />
            {/* <Theme /> */}

            {/* <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button> */}
          </div>
        </div>
        <NextTopLoader color="#e11d48" />
        {children}
        <Analytics />

        <ToastContainer
          position={"top-left"}
          // onClick={() =>
          //   router.push(`/watching/${resumeId.anime_id}/${resumeId.episode}`)
          // }

          autoClose={5000}
          transition={Flip}
          draggablePercent={30}
          theme="colored"
        />
        <Contact />
        <Footer />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAGS}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  `,
          }}
        />
      </body>
    </html>
  );
}
