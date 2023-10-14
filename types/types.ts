export type AnimeInfo = {
    anime_id: string;
    title: string;
    title_english: string;
    title_japanese: string;
    image_url: string;
    mal_id: string;
    external_ids: Record<string, any>;
    enime_id: string;
    slug: string;
    anilistid: string;
    year: string;
    countryoforigin: string;
    coverimage: string;
    bannerimage: string;
    thetvdb: string;
    anidb: string;
    kitsu: string;
    notifymoe: any; 
    anisearch: string;
    animeplanet: any; 
    season: string;
    genres: string[];
    status: string;
    type: string;
    trailer_url: string;
    airing: boolean;
    duration: string;
    aired: {
      from: string;
      to: string;
      prop: {
        from: {
          day: number;
          month: number;
          year: number;
        };
        to: {
          day: number;
          month: number;
          year: number;
        };
      };
      string: string;
    };
    rating: string;
    rank: number;
    popularity: string;
    members: string;
    favorites: string;
    score: string;
    synopsis: string;
    premiered: string;
    source:string;
    broadcast: string;
    studios: {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }[];
    opening_themes: string[];
    ending_themes: string[];
    episodes: string;
    episodeslist: EpisodesListProps[]; 
    characters: any; 
    recommendations: any; 
    updated_at: string;
    poster_path: string;
    backdrop_path: string;
    tmdb_id: string;
    subType: any; 
    zoroepisodes:ZoroEpisode[];
  };

  export type GogoEpisodesListProps = {
    id: string;
    number: number;
    url :string;
   

  }

  export type EpisodesListProps = {
    id: string;
    image: string;
    title: string;
    number: number;
    air_date: string;
    description: string;

  }
  export type ZoroEpisode = {
    id: string;
    img: null | string;
    title: string;
    hasDub: boolean;
    number: number;
    rating: null | number;
    isFiller: boolean;
    updatedAt: number;
    description: null | string;
  };

  export type WatchProps = {
    slug?: string[];
    episodesList: string[];
    animeData: AnimeInfo;
    gogoId:string;
  };
  
  export type ADProps = {
    title: string;
    data:any;
  };


  export type EpisodesProps = {
    episodesList: AnimeEpisodesProps[];
    handleEpisodeRoute: (epId:any,epNumber: number) => void;
    animeImg:string;
    episodeNumber:number;
  };
  
  export type AnimeEpisodesProps = {
    id: string;
    image: string;
    title: string;
    number: number;
    air_date: string;
    description: string;
  };
  

  type Paginated<D> = {
    data: D,
    meta: {
        total: number;
        lastPage: number;
        currentPage: number;
        perPage: number;
        prev: number | null;
        next: number | null;
    }
}

export type RecentRelease = Paginated<Episode[]>

export type SearchResult = Paginated<Anime[]>

export type Anime = {
    id: string,
    slug: string,
    description: string | undefined,
    title: {
        english: string,
        native: string,
        romaji: string,
        userPreferred: string
    },
    status: "RELEASING" | "FINISHED" | "NOT_YET_AIRED" | "HIATUS",
    coverImage: string,
    bannerImage: string,
    currentEpisode: number,
    episodes: Episode[],
    mappings: {
        mal?: number,
        anidb?: number,
        kitsu?: number,
        anilist?: number
    }
}

export type Episode = {
    id: string,
    number: number,
    anime: Anime,
    title: string | undefined,
    createdAt: string,
    airedAt: Date,
    description: string | undefined,
    image: string | undefined,
    sources: Source[],
    episodes: Episode[]
}

export type Source = {
    id: string,
    website: string,
    subtitle?: string,
    url: string,
    priority: number
}

export type AniSkip = {
    statusCode: number,
    results?: AniSkipResult[]
}

export type AniSkipResult = {
    interval: {
        startTime: number,
        endTime: number
    },
    type: string
}


export type GogoAnimeData = {
  id: string;
  title: string;
  url: string;
  genres: string[];
  totalEpisodes: number;
  image: string;
  releaseDate: string;
  description: string;
  subOrDub: string;
  type: string;
  status: string;
  otherName: string;
  episodes: GogoEpisodesListProps[]; 
};


export type GridContainerProps = {
  data:any[];
  heading:string;
  swiperId?:number;
  refresh?:() => void
}



interface Characters {
  id: number;
  role: string;
  name: {
    first: string;
    last: string;
    full: string;
    native: string;
    userPreferred: string;
  };
  image: string;
  voiceActors: VoiceActor[];
}

interface VoiceActor {
  id: number;
  language: string;
  name: {
    first: string;
    last: string;
    full: string;
    native: string;
    userPreferred: string;
  };
  image: string;
}



export interface AnimeRelation {
  id: number;
  relationType: string;
  malId: number;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };
  status: string;
  episodes: number;
  image: string;
  color: string;
  type: string;
  cover: string;
  rating: number;
}


export interface AnilistInfo {
  id: string;
  title: Record<string,string>;
  malId: number;
  synonyms: string[];
  isLicensed: boolean;
  isAdult: boolean;
  countryOfOrigin: string;
  image: string;
  popularity: number;
  color: string;
  cover: string;
  description: string;
  status: string;
  releaseDate: number;
  startDate: { [key: string]: string }; 
  endDate: { [key: string]: string };
  nextAiringEpisode: {
    airingTime: any,
    timeUntilAiring: number,
    episode: number
    },
  totalEpisodes: number;
  currentEpisode: number;
  rating: number;
  duration: number;
  genres: string[];
  season: string;
  studios: string[];
  subOrDub: string;
  type: string;
  recommendations: string[]; //
  characters: Characters[]; //
  relations: AnimeRelation[]; //*
  episodes: AnimeEpisodesProps[];
}