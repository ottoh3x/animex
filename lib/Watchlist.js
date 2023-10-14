export default function addWatchList(epId, data, episodeNumber,image_url,title,time,vidTime,duration,mal_id,anilistid,anime_id) {
    if (typeof window !== 'undefined') {
      // Retrieve the current watch list from localStorage
      const storedWatchList = localStorage.getItem('watchList');
      const watchList = storedWatchList ? JSON.parse(storedWatchList) : [];
  
      // Find the index of the anime object in the watch list with the given epId
      const animeIndex = watchList.findIndex((anime) => anime.anime_id === anime_id);
  
      // If the anime object doesn't exist in the watch list, add it with the given data
      if (animeIndex === -1) {
        const updatedAnimeList = [...watchList, { id: epId, ...data, episode: episodeNumber,image_url : image_url,title:title,time:time,vidTime:vidTime,duration:duration,mal_id:mal_id,anilistid:anilistid,anime_id:anime_id }];
        localStorage.setItem('watchList', JSON.stringify(updatedAnimeList));
      } else {
        // If the anime object already exists in the watch list, update its epNum property with the given episodeNumber
        const updatedAnimeList = [...watchList];
        updatedAnimeList[animeIndex].episode = episodeNumber;
        updatedAnimeList[animeIndex].image_url = image_url;
        updatedAnimeList[animeIndex].title = title;
        updatedAnimeList[animeIndex].time = time;
        updatedAnimeList[animeIndex].vidTime = vidTime;

        updatedAnimeList[animeIndex].duration = duration;
        updatedAnimeList[animeIndex].mal_id = mal_id;
        updatedAnimeList[animeIndex].anilistid = anilistid;
        updatedAnimeList[animeIndex].anime_id = anime_id;



        localStorage.setItem('watchList', JSON.stringify(updatedAnimeList));
      }
    }
  
  }

  export function DeleteWatchListId(epId) {
    const storedWatchList = typeof window !== "undefined" && localStorage.getItem('watchList');
    let watchList = storedWatchList ? JSON.parse(storedWatchList) : [];

    watchList = watchList.filter(
      (anime) => anime.anime_id !== epId
    );

    const updatedAnimeList = [...watchList];


    typeof window !== "undefined" && localStorage.setItem('watchList', JSON.stringify(updatedAnimeList));
  
}


