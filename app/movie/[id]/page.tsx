import { MovieContainer } from "containers/movie";
import { notFound } from "next/navigation";
import { fetchSingleMovie } from "services/movie";

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
