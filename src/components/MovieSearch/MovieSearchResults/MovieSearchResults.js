import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./movieSearchResults.module.scss";

const MovieSearchResults = ({ movieResults }) => {
  return (
    <div className={styles.searchResults}>
      {movieResults.map((movie) => {
        return (
          <div key={movie.id}>
            <Link href={`/movies/${movie.id}`} className={styles.result}>
              <Image
                width={90}
                height={50}
                src={`${process.env.NEXT_PUBLIC_TMDB_API_IMAGE_BASE_PATH}${movie.backdrop_path}`}
              />
              <p>{movie.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MovieSearchResults;
