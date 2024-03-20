import { HomeContainer } from "containers/home";
import React from "react";

import {
  fetchGenres,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "services/movie";

async function Home() {
  const pagePromises = [
    fetchPopularMovies(),
    fetchTopRatedMovies(),
    fetchGenres(),
  ];

  const [popularMovies, topRatedMovies, genres] = await Promise.all(
    pagePromises
  );

  return (
    <HomeContainer
      categories={genres}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
    />
  );
}

export default Home;
