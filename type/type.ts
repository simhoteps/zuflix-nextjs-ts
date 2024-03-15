

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


  export interface ICategoriesType {
    id: number,
    name:string
  }