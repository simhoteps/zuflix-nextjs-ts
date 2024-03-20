const BASE_URL = "https://api.themoviedb.org/3";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData(path: string, { query = "" } = {}) {
  await delay(1000);

  try {
    const res = await fetch(
      `${BASE_URL}${path}?api_key=${process.env.THE_MOVIE_DB_API_KEY}&${query}`
    );
    return res.json();
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function fetchGenres() {
  try {
    const res = await fetchData("/genre/movie/list");
    return res.genres;
  } catch (error: any) {
    throw new Error("Error happened while fetching genres", error);
  }
}

export async function fetchAllMovies() {
  try {
    const res = await fetchData("/movie/changes");
    return res.results;
  } catch (error: any) {
    throw new Error("Error happened while fetching movies", error);
  }
}

export async function fetchPopularMovies() {
  try {
    const res = await fetchData("/movie/popular");
    return res.results;
  } catch (error: any) {
    throw new Error("Error happened while fetching popular movies", error);
  }
}

export async function fetchTopRatedMovies() {
  try {
    const res = await fetchData("/movie/top_rated");
    return res.results;
  } catch (error: any) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchSingleMovie(movieId: string) {
  try {
    const res = await fetchData(`/movie/${movieId}`);
    return res;
  } catch (error: any) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchMoviesByGenre(genreId: string) {
  try {
    const res = await fetchData(`/discover/movie`, {
      query: `with_genres=${genreId}`,
    });
    return res.results;
  } catch (error: any) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}
