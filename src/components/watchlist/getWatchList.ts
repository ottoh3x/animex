"use client"

export function getWatchList() {

  let animeL ;

    const storedAnimeList =
      typeof window !== "undefined" && localStorage.getItem("watchList");
    let wl = (storedAnimeList ? JSON.parse(storedAnimeList) : [])
    animeL = wl.sort((a: any, b: any) => {
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
    })
 


  return animeL
    

}