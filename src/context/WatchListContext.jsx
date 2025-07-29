import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [genreList, setGenrelist] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=977766a0bd8097daa5d77de82cec978f`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setGenrelist(data.genres || []));
  }, []);

  const toggleWatchlist = (movie) => {
    const index = watchlist.findIndex((m) => m.id === movie.id);

    if (index === -1) {
      setWatchlist([...watchlist, movie]);
    } else {
      setWatchlist([
        ...watchlist.slice(0, index),
        ...watchlist.slice(index + 1),
      ]);
    }
  };

  console.log("watchlist:", watchlist);

  return (
    <WatchListContext.Provider
      value={{ watchlist, toggleWatchlist, genreList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
