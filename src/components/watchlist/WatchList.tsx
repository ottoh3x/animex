"use client"
import React, { useEffect, useState } from "react";
import GridContainer from "../container/GridContainer";

export default function WatchList() {
  const [refresh, setRefresh] = useState(false);
  const [watchList,setWatchList] = useState<any>([])

  useEffect(() => {
    const storedWatchList =
      typeof window !== "undefined" && localStorage.getItem("watchList");
    let watchList = (storedWatchList ? JSON.parse(storedWatchList) : [])
    setWatchList(watchList.sort((a: any, b: any) => {
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


  return (
    <GridContainer data={watchList} heading="WatchList" refresh={() => setRefresh(t => !t)}/>
  )
    

}