import { Categories } from "@/components/categories";
import { FeaturedMovie } from "@/components/featured-movie";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import { MoviesSection } from "@/components/movies-section";

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies} />;
      <Categories categories={Genres.genres.slice(0, 5)} />
      <MoviesSection
        title={"Popular Film"}
        movies={Movies.results.slice(1, 7)}
      />
      <MoviesSection
        title="Your favorites"
        movies={Movies.results.slice(7, 13)}
      />
    </div>
  );
};

export default HomeContainer;
