import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';

import apiClient from '../../services/apiClient';

import css from './Home.module.css';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const trendingMovies = await apiClient.getTrendingMovies();
      setMovies(trendingMovies);
    }
    fetchMovies();
  }, []);

  return (
    
    <section className={css.container}>
      <h1 className={css.title}>Trending movies</h1>
      <MovieList movies={movies}/>
    </section>
  );
}

export default Home;
