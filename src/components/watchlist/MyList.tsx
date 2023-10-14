"use client"
import React, { useEffect, useState } from "react";

import GridContainer from "../container/GridContainer";

export default function MyList() {
  const [refresh, setRefresh] = useState(false);
  const [myList,setMyList] = useState([])

  useEffect(() => {
     const storedAnimeList =
      typeof window !== "undefined" && localStorage.getItem("animeList");
    let ml = (storedAnimeList ? JSON.parse(storedAnimeList) : [])
    setMyList(ml.sort((a: any, b: any) => {
      const timeA = a.time;
      const timeB = b.time;

      // Compare the time values
      if (timeA < timeB) {
        return 1;
      }
      if (timeA > timeB) {
        return -1;
      }

      return 0; // If timeA and timeB are equal
    }))
  }, [refresh]);

   console.log('test')
 


  return (
    <GridContainer data={myList} heading="MyList" refresh={() => setRefresh(t => !t)}/>

  )
    

}