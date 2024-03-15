import { Categories } from "components/categories";
import { FeaturedMovie } from "components/featured-movie";
import { MoviesSection } from "components/movies-section";
import React from "react";
import { ICategoriesType, ImovieType } from "type/type";

function HomeContainer({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
  selectedCategory,
}: {
  popularMovies: ImovieType[];
  topRatedMovies: ImovieType[];
  categories: ICategoriesType[];
  selectedCategory: {
    id: string;
    movies: ImovieType[];
  };
}) {
  return (
    <div>
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />
      <Categories categories={categories.slice(1, 6)} />
      {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection
        title="Your favorites"
        movies={topRatedMovies.slice(1, 7)}
      />
    </div>
  );
}

export { HomeContainer };
