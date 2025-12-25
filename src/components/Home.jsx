import styles from '../styles/Home.module.css'
import MovieCard from './MovieCard';
import {getMovies} from '../services/movies.js'
import { useEffect, useState } from 'react';


export default function Home({ searchKey, favorites, toggleFavorite }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const data = await getMovies();
      setMovies(data);
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  const filteredMovies = !searchKey
    ? movies
    : movies.filter(movie =>
        movie.title.toLowerCase().startsWith(searchKey.toLowerCase())
      );

  return (
    <div className={styles.container}>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : filteredMovies.length > 0 ? (
        filteredMovies.map(movie => (
          <MovieCard
            key={movie.id}
            movies={movie}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))
      ) : (
        <h3>No movies found!</h3>
      )}
    </div>
  );
}