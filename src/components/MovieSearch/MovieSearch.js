"use client";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";

const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [hideResults, setHideResults] = useState(false);

  const updateMovieSearch = async (query) => {
    //fetch
    //we use a middleware because fetch could be used only in server components
    const response = await fetch(`/api/movies/search?query=${query}`);

    const { results } = await response.json();

    console.log(results);

    setMovieResults(results.filter((movie) => movie.backdrop_path));
  };
  return (
    <div>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        onChange={(e) => {
          updateMovieSearch(e.target.value);
        }}
        onFocus={() => {
          setHideResults(false);
        }}
        onBlur={() => {
          setHideResults(true);
        }}
        placeholder="Rechercher un titre ..."
      />
      {movieResults.length > 0 && !hideResults && (
        <MovieSearchResults movieResults={movieResults} />
      )}
    </div>
  );
};
export default MovieSearch;
