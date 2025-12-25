import styles from '../styles/MovieCard.module.css';

export default function MovieCard({ movies, favorites, toggleFavorite }) {
  const isFav = favorites.some(f => f.id === movies.id);

  return (
    <div className={[styles.box, styles.scroller].join(" ")}>
      <div className={styles.imgBox}>
        <h3
          className={isFav ? styles.starYellow : styles.starGrey}
          onClick={() => toggleFavorite(movies)}
        >
          ★
        </h3>
        <img
          className={styles.poster}
          src={movies.thumbnail}
          alt={movies.title}
        />
      </div>
      <div>
        <h3>{movies.title}</h3>
        <p>{movies.year}</p>
      </div>
    </div>
  );
}