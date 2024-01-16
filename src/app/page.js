import MediaCard from "@/components/MediaCard/MediaCard";
import styles from "./page.module.css";
import Popular from "@/components/Popular/Popular";
import Genres from "@/components/Genres/Genres";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* <MediaCard mediaId={10} /> */}
      <Popular />

      <Genres />
    </div>
  );
}
