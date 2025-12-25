import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import NavBar from "./NavBar.jsx";
import { getFavorites, saveFavorites } from "../services/favorites.js";

export default function App() {
  const [searchKey, setSearchKey] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const toggleFavorite = (movie) => {
    const exists = favorites.some(f => f.id === movie.id);

    const updatedFavorites = exists
      ? favorites.filter(f => f.id !== movie.id)
      : [...favorites, movie];

    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);
  };

  return (
    <>
      <NavBar setSearchKey={setSearchKey} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchKey={searchKey}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </>
  );
}
