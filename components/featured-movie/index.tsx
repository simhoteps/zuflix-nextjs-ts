import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";
import { ImovieType } from "type/type";

function FeaturedMovie({
  movie,
  isCompact = true,
}: {
  movie: ImovieType;
  isCompact?: boolean;
}) {
  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{movie.title}</h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {movie.overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        {movie.poster_path && (
          <Image
            unoptimized
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            fill
          />
        )}
      </div>
    </div>
  );
}

export { FeatureMovieLoading } from "./loading";
export { FeaturedMovie };
