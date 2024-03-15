import { FeaturedMovie } from "components/featured-movie";
import { ImovieType } from "type/type";

function MovieContainer({ movie }: { movie: ImovieType }) {
  return <FeaturedMovie movie={movie} isCompact={false} />;
}

export { MovieContainer };
