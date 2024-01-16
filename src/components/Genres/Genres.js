import React from "react";
import styles from "./genres.module.scss";
import { getMovieByPath } from "@/utils/movieClient";
import Link from "next/link";
const Genres = async () => {
  const { genres } = await getMovieByPath("/genre/movie/list");
  return (
    <div className={styles.container}>
      <h2>Parcourir par genres</h2>

      <div className={styles.genresContainer}>
        {genres.map((genre) => {
          return (
            <Link
              href={`/movies/genres/${genre.id}`}
              key={genre.id}
              className={styles.genre}
            >
              <p>{genre.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Genres;
