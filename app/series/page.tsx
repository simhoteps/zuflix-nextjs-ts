import { Categories } from "components/categories";
import { FeaturedMovie } from "components/featured-movie";
import { MoviesSection } from "components/movies-section";
import { fetchSeries, fetchTopRatedTv, fetchTvGenres } from "services/series";

async function Series() {
  const pagePromises = [fetchSeries(), fetchTvGenres(), fetchTopRatedTv()];
  const [series, genres, topRatedSeries] = await Promise.all(pagePromises);

  return (
    <div>
      <FeaturedMovie
        movie={series[Math.floor(Math.random() * series.length)]}
      />
      <Categories categories={genres} />
      <MoviesSection
        title="Popular Films"
        movies={series.slice(1, 13)}
        type={"series"}
      />
      <MoviesSection
        title="Your favorites"
        movies={topRatedSeries.slice(7, 14)}
        type={"series"}
      />
    </div>
  );
}

export default Series;
