import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { ISeriesType } from "type/type";
import { FiBookmark } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { fetchEpisodeSeries } from "services/series";

async function FeaturedSeries({
  movie,
  isCompact = true,
}: {
  movie: ISeriesType;
  isCompact?: boolean;
}) {
  return (
    <div className={"flex flex-col gap-6 mt-12 mb-3  "}>
      <div>
        <h1
          className={
            "text-6xl uppercase -tracking-[1px] font-bold leading-[64px] max-w-[25ch]"
          }
        >
          {movie.name}
        </h1>
        <div className="flex gap-4">
          {movie.genres.map((item) => {
            return <p className={`text-md max-w-[50ch]`}>{item.name}</p>;
          })}
        </div>
      </div>

      <p className={`text-xl max-w-[50ch]`}>{movie.overview}</p>
      <div className="flex gap-10">
        {movie.created_by.map((item) => {
          return (
            <div className={"flex flex-col gap-1"}>
              <p className={`text-xl`}>{item.name}</p>
              <p className={`text-md `}>Created</p>
            </div>
          );
        })}
      </div>
      <div className={"flex gap-[12px]"}>
        <Link
          rel="preload"
          className={
            "flex items-center justify-center bg-white text-[#222] w-[300px] rounded-full text-xl font-bold"
          }
          href={`/movie/${movie.id}`}
          as={`/movie/${movie.id}`}
        >
          Play
        </Link>
        <button
          className={
            "flex items-center justify-center w-[62px]  h-[62px] rounded-full border-solid border-2 border-[#eee] text-[#fff] hover:bg-[#262626] hover:border-[#262626]"
          }
        >
          <FiBookmark size={24} />
        </button>
        <button
          className={
            "flex items-center justify-center w-[62px]  h-[62px] rounded-full border-solid border-2 border-[#eee] text-[#fff] hover:bg-[#262626] hover:border-[#262626]"
          }
        >
          <FaRegHeart size={24} />
        </button>
        <button
          className={
            "flex items-center justify-center w-[62px]  h-[62px] rounded-full border-solid border-2 border-[#eee] text-[#fff]  hover:bg-[#262626] hover:border-[#262626]"
          }
        >
          <FaListUl size={24} />
        </button>
      </div>

      <div className={""}>
        <div
          className={
            "absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black from-0%  via-black via-20%  to-transparent -z-[1]"
          }
        ></div>
        {movie.poster_path && (
          <Image
            className={"object-cover h-auto max-h-[100vh] -z-[2] bg-left-top"}
            unoptimized
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={`${movie.name}`}
            fill
          />
        )}
      </div>
    </div>
  );
}

export { FeatureMovieLoading } from "./loading";
export { FeaturedSeries };
