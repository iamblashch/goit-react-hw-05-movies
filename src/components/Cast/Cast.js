import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import apiClient from '../../services/apiClient';

import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const data = await apiClient.getMovieCredits(movieId);
        setCast(data);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  const castMarkup = cast.map(({ profile_path, name, cast_id }) => (
    <li key={cast_id}>
      <img
        src={`https://image.tmdb.org/t/p/original${profile_path}`}
        alt=""
        width="150"
      />
      <p>{name}</p>
    </li>
  ));

  return <ul className={css.list}>{castMarkup}</ul>;
};

export default Cast;
