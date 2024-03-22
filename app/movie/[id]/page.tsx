import { MovieContainer } from "containers/movie";
import { notFound } from "next/navigation";
import {
  fetchAllMovies,
  fetchPopularMovies,
  fetchSingleMovie,
  fetchTopRatedMovies,
} from "services/movie";

type Params = {
  id: string;
};

async function MoviePage({ params, searchParams }: any) {
  const movieDetail = await fetchSingleMovie(params.id);

  if (movieDetail.success === false) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;

export async function generateStaticParams() {
  const pagePromises = [fetchPopularMovies(), fetchTopRatedMovies()];

  const [movies, move] = await Promise.all(pagePromises);
  const push = [...movies, ...move];
  console.log(push.length);
  return push.map((post: Params) => ({
    id: post.id.toString(),
  }));
}
