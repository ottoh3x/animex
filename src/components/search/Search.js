"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import cheerio from "cheerio";

import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [val, setVal] = useState("");
  const [content, setContent] = useState([]);
  useEffect(() => {
    var SearchBar = document.getElementById("search");
    var SearchInput = document.getElementById("searchinput");
    document.addEventListener("click", function (event) {
      var isClickInside = SearchBar.contains(event.target);

      if (!isClickInside) {
        SearchInput.style.maxWidth = 0;
        SearchInput.style.marginLeft = 0;
        setContent([]);
        setVal("");
      }
    });
  }, []);

  //   const handleSearch = async (e:any) => {
  //     setVal(e.target.value)
  //     const {data} :any = await supabase.from("anime").select("*").gte("title",val).like("title_english",`%${val}%`).range(0,9)
  //     setContent(data);
  //     console.log(data)
  //     console.log(val)

  //   }

  const handleSearch = async (e) => {
    setVal(e.target.value);
    let d = await axios.get(
      "https://ajax.gogocdn.net/site/loadAjaxSearch?keyword=" + val
    );
    d = d.data.content.replaceAll("category/", "/anime/");
    var myList = [];
    var $ = cheerio.load(d);
    $("a").each(function (index, element) {
      let result = {};
      let title = $(this).text();
      let link = $(this).attr().href;
      let image = $(this)
        .children("div")
        .attr()
        .style.slice(15)
        .replace(/[("")]/g, "");
      result = { title, link, image };
      myList.push(result);
    });

    setContent(myList);
  };
  const handleClick = () => {
    var SearchBar = document.getElementById("search");
    var SearchInput = document.getElementById("searchinput");
    SearchInput.focus();
    SearchInput.style.maxWidth = "800px";
    SearchInput.style.marginLeft = "0.7rem";
    SearchBar.style.width = "auto";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${val}/1`);
    setContent([]);
    setVal("");
  };
  return (
    <form
      className={`btn-ghost z-50  cursor-pointer rounded-full   `}
      onSubmit={handleSubmit}
    >
      <div
        className={` text-gray-300 h-10 w-10 lg:w-full  bg-neutral-800/75 rounded-full  flex items-center  p-2.5 shadow-2xl relative right-0`}
        id="search"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          value={val}
          autoComplete={"off"}
          onChange={handleSearch}
          className={`text-gray-200 bg-transparent lg:w-[20rem] border-none outline-none max-w-0 ease-in-out transition-all duration-700`}
          placeholder="Search for anime..."
          id="searchinput"
        />
        {content?.length > 0 && (
          <div
            className={` autocomplete absolute left-0 px-1 py-0 top-11 shadow-2xl transition-all duration-200 rounded-sm  w-full bg-[#222]`}
          >
            {content?.map((Item, index) => (
              <Link href={Item.link} key={index}>
                <div
                  className={`flex shadow-2xl w-full justify-between cursor-pointer p-1 rounded-sm my-[2px] text-right bg-[#0a0909] hover:bg-[#2226] hover:text-white`}
                  onClick={() => setContent([])}
                >
                  <div className="">
                    <img
                      src={Item.image}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                  <span className="w-3/4">{Item.title}</span>
                </div>
              </Link>
            ))}
            <button
              type="submit"
              onSubmit={handleSubmit}
              className={`h-10 w-full p-1 mb-[2px] text-center rounded-sm text-gray-200 bg-[#111] flex justify-center items-center hover:bg-blue-700 cursor-pointer`}
            >
              View All Results
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default Search;
