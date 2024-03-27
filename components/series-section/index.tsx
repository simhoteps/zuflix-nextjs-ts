import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";
import { ISeriesType } from "type/type";

function SeriesSection({
  title,
  series,
  type,
}: {
  title?: string;
  series: ISeriesType[];
  type: string;
}) {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {series.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/${type}/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.name}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export { SeriesSectionLoading } from "./loading";
export { SeriesSection };
