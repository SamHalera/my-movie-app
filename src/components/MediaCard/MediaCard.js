import React from "react";
import styles from "./mediaCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import { getMovieByPath } from "@/utils/movieClient";

const MediaCard = async ({ media }) => {
  console.log(media.genre_ids);

  const { genres } = await getMovieByPath("/genre/movie/list");

  return (
    <div className={styles.card}>
      <Link href={`/movies/${media.id}`}>
        <div className={styles.image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_API_IMAGE_BASE_PATH}${media.poster_path}`}
            alt="media title"
            fill
          />
          ;
        </div>
        <div className={styles.content}>
          <p className={styles.vote}>{media.vote_average.toFixed(2)}</p>
          <h2>{media.title}</h2>
          <p>{new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
          <div className={styles.genresGroup}>
            {genres.map((genre) => {
              if (media.genre_ids.includes(genre.id)) {
                return <p>{genre.name}</p>;
              }
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default MediaCard;
