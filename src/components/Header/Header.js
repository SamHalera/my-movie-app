import React from "react";
import Link from "next/link";

import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MovieSearch from "../MovieSearch/MovieSearch";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.log}>
        <p>
          <Link href="/">MyMovieApp</Link>
        </p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href="/series">Séries</Link>
            </li>
            <li>
              <Link href="/movies">Films</Link>
            </li>
          </ul>
        </nav>
      </div>
      <MovieSearch />
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
};

export default Header;
