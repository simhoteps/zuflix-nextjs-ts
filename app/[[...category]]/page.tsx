import { HomeContainer } from "containers/home";
import React from "react";

import {
  fetchGenres,
  fetchMoviesByGenre,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "services/movie";

async function HomePage({ params }: any) {
  const pagePromises = [
    fetchPopularMovies(),
    fetchTopRatedMovies(),
    fetchGenres(),
  ];

  if (!!params.category?.length) {
    pagePromises.push(fetchMoviesByGenre(params.category[0]));
  }

  const [popularMovies, topRatedMovies, genres, selectedCategoryMovies] =
    await Promise.all(pagePromises);

  return (
    <HomeContainer
      categories={genres}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategoryMovies ?? [],
      }}
    />
  );
}

export default HomePage;
