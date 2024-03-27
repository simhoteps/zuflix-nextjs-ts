import { FeaturedSeries } from "components/featured-series";
import { notFound } from "next/navigation";
import {
  fetchEpisodeSeries,
  fetchSeries,
  fetchSingleSeries,
  fetchTopRatedTv,
} from "services/series";
import Image from "next/image";
import { ISeasonsType, ISeriesType } from "type/type";

type Params = {
  id: string;
};

async function SeriesPage({ params, searchParams }: any) {
  const seriesDetail = await fetchSingleSeries(params.id);
  console.log("params.id", params.id);
  if (seriesDetail.success === false) {
    notFound();
  }

  /*  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
  } */
  return (
    <div>
      <div>
        <FeaturedSeries movie={seriesDetail} />
        <div className="flex flex-col gap-4 bg-">
          {/*   {seriesDetail &&
            seriesDetail.seasons.map((season: ISeasonsType, i: number) => {
              return (
                <div
                  key={`seriesDetail_${i}`}
                  onClick={() => {
                    fetchEpisodeSeries(season.id);
                  }}
                  className="flex items-center gap-3 "
                >
                  {season.poster_path && (
                    <img
                      className={"object-cover"}
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "16px",
                      }}
                      src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                      alt={season.name}
                    />
                  )}

                  <span className="text-xl font-bold"> {season.name}</span>
                </div>
              );
            })} */}
        </div>
      </div>
    </div>
  );
}

export default SeriesPage;

export async function generateStaticParams() {
  const pagePromises = [fetchSeries(), fetchTopRatedTv()];

  const [movies, move] = await Promise.all(pagePromises);
  const push = [...movies, ...move];
  console.log("push", push.length);
  return push.map((post: Params) => ({
    id: post.id.toString(),
  }));
}
