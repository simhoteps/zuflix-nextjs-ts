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

export async function fetchSeries() {
  try {
    const res = await fetchData("/discover/tv");
    return res.results;
  } catch (error: any) {
    throw new Error("Error happened while fetching popular movies", error);
  }
}

export async function fetchTvGenres() {
  try {
    const res = await fetchData("/genre/tv/list");
    return res.genres;
  } catch (error: any) {
    throw new Error("Error happened while fetching genres", error);
  }
}

export async function fetchTopRatedTv() {
  try {
    const res = await fetchData("/tv/top_rated");
    return res.results;
  } catch (error: any) {
    throw new Error("Error happened while fetching top rated series", error);
  }
}

export async function fetchSingleSeries(seriesId: string) {
  try {
    const res = await fetchData(`/tv/${seriesId}`);
    return res;
  } catch (error: any) {
    throw new Error("Error happened while fetching top rated series", error);
  }
}

export async function fetchEpisodeSeries(seriesId: number) {
  try {
    const res = await fetchData(`/tv/${seriesId}/episode_groups`);
    return res;
  } catch (error: any) {
    throw new Error("Error happened while fetching top rated series", error);
  }
}
