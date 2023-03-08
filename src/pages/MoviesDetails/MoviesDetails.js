import React, { useEffect, useState } from 'react';
import { useParams, NavLink, useNavigate, Outlet } from 'react-router-dom';
import apiClient from '../../services/apiClient';

import css from './MoviesDetails.module.css'

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      const movieDetails = await apiClient.getMovieDetails(movieId);
      setMovie(movieDetails);
    }

    fetchMovie();
  }, [movieId]);

  const goBack = () => navigate(-1);

  return (
    <section className="container">
      <button onClick={goBack} className="button">
        back
      </button>
      <ul>
        <li>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
            width="300"
          />
        </li>
        <li>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
        </li>
      </ul>
      <NavLink className={css.cast} to="cast">Cast</NavLink>
      <NavLink className={css.reviews} to="reviews">Reviews</NavLink>
      <Outlet />
    </section>
  );
}

export default MovieDetails;
