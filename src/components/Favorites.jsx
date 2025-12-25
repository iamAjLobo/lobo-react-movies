import styles from '../styles/Favorites.module.css';
import MovieCard from './MovieCard';

export default function Favorites({ favorites, toggleFavorite }) {
  return (
    <div className={styles.container}>
      {favorites.length === 0 ? (
        <h2>Your favorites will display here!</h2>
      ) : (
        favorites.map(movie => (
          <MovieCard
            key={movie.id}
            movies={movie}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))
      )}
    </div>
  );
}