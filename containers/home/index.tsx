import { Categories } from "components/categories";
import { FeaturedMovie } from "components/featured-movie";
import { MoviesSection } from "components/movies-section";
import React from "react";
import { ICategoriesType, ImovieType } from "type/type";

function HomeContainer({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
}: {
  popularMovies: ImovieType[];
  topRatedMovies: ImovieType[];
  categories: ICategoriesType[];
}) {
  return (
    <div>
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />
      <Categories categories={categories} />
      <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection
        title="Your favorites"
        movies={topRatedMovies.slice(1, 7)}
      />
    </div>
  );
}

export { HomeContainer };
