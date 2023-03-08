import { Link } from 'react-router-dom';
import css from '../MovieList/MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} className={css.item}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              width="300"
            />
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
