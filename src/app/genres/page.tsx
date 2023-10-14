import GridContainer from "@/components/container/GridContainer";
import GenresTab from "@/components/tabs/GenresTab";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Anime Genres",
  description: "Get Anime Genres",
};

const headers = {
  authorization:
    `Bearer ${process.env.SUPABASE2NDKEY}`,
  apikey:
    `${process.env.SUPABASE2NDKEY}`,
};

const getGenres = async () => {
  let req = await fetch(
    "https://rqpfbkysrcmfrtmcvmop.supabase.co/rest/v1/genres?select=*",
    {
      method: "GET",
      headers: headers,
    }
  );

  let res = await req.json();

  return res;
};

export default async function Genres() {
  const data = await getGenres();

  return (
    <div>
      <GenresTab data={data?.[0]?.data} />
    </div>
  );
}
