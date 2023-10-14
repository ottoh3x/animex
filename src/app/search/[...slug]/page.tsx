"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

import GridContainer from "@/components/container/GridContainer";

type SAnimeData = {
  id: string;
  title: string;
  url: string;
  image: string;
  releaseDate: string;
  subOrDub: "sub" | "dub";
};

const Search = () => {
  // const { data } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<SAnimeData[]>([]);
  const [searchPage, setSearchPage] = useState<number>(1);

  const { slug } = useParams();

  //api.consumet.org/anime/gogoanime/demon?page=2

  https: useEffect(() => {
    setLoading(true);

    fetchSearchData();
  }, [slug, searchPage]);

  const fetchSearchData = async () => {
    try {
      const req = await axios.get(
        `https://api.consumet.org/anime/gogoanime/${slug?.[0]}?page=${searchPage}`
      );
      const data = req.data;
      setData(data?.results);
      // Process the fetched data
    } catch (error) {
      // Handle the error
    }

    setLoading(false);
  };

  return (
    <div className="w-full mt-20">
      <GridContainer
        data={data}
        heading={"Trending"}
        // page={searchPage}
        // totalPages={data?.hasNextPage && searchPage + 1}
        // handlePageChange={(page:any) => setSearchPage(page)}
      />
    </div>
  );
};

export default Search;
