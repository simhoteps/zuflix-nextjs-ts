import { CategoriesLoading } from "components/categories";
import { FeatureMovieLoading } from "components/featured-movie";
import { MoviesSectionLoading } from "components/movies-section";

function HomeLoading() {
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default HomeLoading;
