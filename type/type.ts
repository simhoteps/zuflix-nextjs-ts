

export interface  IFeaturedMovie {
    "page"?: number
    "results":ImovieType[]
    "total_pages"?: number
    "total_results"?: number
}

export interface ImovieType {
    "adult": boolean
    "backdrop_path": string |null
    "genre_ids": number[]
    "id": number
    "original_language":string
    "original_title":string
    "overview": string
    "popularity": number
    "poster_path":any
    "release_date":string
    "title": string
    "video": boolean
    "vote_average":number
    "vote_count": number
  }


  export interface IMovieDetail {
    adult: boolean,
    backdrop_path: "",
    belongs_to_collection: "",
    budget:string,
    genres: number[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string
       popularity: number,
    poster_path: string,
    production_companies: IProductionCompanies[],
    production_countries: IProductionCountries[],
    release_date: string,
    revenue:number,
    runtime: number,
    spoken_languages:ISpokenLanguages [ ],
    status: string,
    tagline:string,
    title: string,
    video: boolean,
    vote_average:number,
    vote_count: number
  }
  
  export interface  IProductionCompanies {
    id: number,
    logo_path: string,
    name:string,
    origin_country:string

  }


  export interface IProductionCountries {
    iso_3166_1: string, 
    name: string
  }

  export interface ISpokenLanguages {
    english_name:string, 
    iso_639_1:string, 
    name: string
  }

  export interface ICategoriesType {
    id: number,
    name:string
  }


  export interface IcreatedBy{
    id: number,
    credit_id: string,
    name: string,
    gender: number,
    profile_path: string
  }


  export interface IGenres{
    id: number,
    name: string,
  }


  export interface INetworks{
    id: number,
    name: string,
    logo_path: string,
    origin_country:string
  }

  export interface ISeasonsType{
    air_date: string,
    episode_count: number,
    id: number,
    name: string,
    overview: string,
    poster_path?:string,
    season_number: number,
    vote_average:number
  }

  export interface ISeriesType  {
   adult: boolean,
   backdrop_path:string,
   created_by: IcreatedBy[],
   episode_run_time: any[],
   first_air_date:string,
   genres: IGenres[],
   homepage:string,
   id: number,
   in_production: boolean,
   languages: string[ ],
   last_air_date:string,
   last_episode_to_air: {
     id:number,
     name: number,
     overview:string,
     vote_average: number,
     vote_count: number,
     air_date: string,
     episode_number: number,
     episode_type: string,
     production_code:string,
     runtime: number,
     season_number: number,
     show_id: number,
     still_path:string
   },
   name: string,
   next_episode_to_air?: any,
   networks: INetworks[],
   number_of_episodes: number,
   number_of_seasons: number,
   origin_country:string [ ],
   original_language: string,
   original_name: string,
   overview: string,
   popularity: number,
   poster_path: string,
   production_companies: IProductionCompanies[],
   production_countries: IProductionCountries[],
   seasons: ISeasonsType[],
   spoken_languages:ISpokenLanguages[ ],
   status:string,
   tagline: string,
   type: string,
   vote_average: number,
   vote_count: number
 }
  