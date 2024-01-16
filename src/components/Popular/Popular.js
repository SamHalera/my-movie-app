import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../MediaCard/MediaCard";
import styles from "./popular.module.scss";

const Popular = async () => {
  const { results } = await getMovieByPath("/movie/popular");

  const popularMovies = results.slice(0, 8);

  return (
    <div>
      <h2>Les plus populaires</h2>
      <div className={styles.container}>
        {popularMovies.map((movie) => {
          return <MediaCard key={movie.id} media={movie} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
