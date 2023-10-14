

export function handleAddAnime(
    animeData :any) {
    const storedAnimeList =
      typeof window !== "undefined" && localStorage.getItem("animeList");
    let updatedAnimeList = storedAnimeList ? JSON.parse(storedAnimeList) : [];

    const animeIndex = updatedAnimeList.findIndex(
      (anime: any) => anime.anime_id === animeData?.anime_id 
    );

    if (animeIndex === -1) {
         updatedAnimeList = [...updatedAnimeList, { ...animeData, time: Date.now() }];
         typeof window !== "undefined" &&
        localStorage.setItem("animeList", JSON.stringify(updatedAnimeList));
        
    } else {
      console.log(`Anime '${animeData?.title}' already exists in the list`);
    }

    return updatedAnimeList
  }



  export function handleDeleteAnime(animeData :any) {
    const storedAnimeList =
      typeof window !== "undefined" && localStorage.getItem("animeList");
    let updatedAnimeList = storedAnimeList ? JSON.parse(storedAnimeList) : [];

    updatedAnimeList = updatedAnimeList.filter(
      (anime: any) => anime.anime_id !== animeData?.anime_id
    );

    typeof window !== "undefined" &&
      localStorage.setItem("animeList", JSON.stringify(updatedAnimeList));

      updatedAnimeList
  }