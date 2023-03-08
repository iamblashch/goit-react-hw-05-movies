import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from 'components/MovieList/MovieList';
import apiClient from 'services/apiClient';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    async function fetchSearch() {
      const movieDetails = await apiClient.searchMovies(searchQuery);
      setMovies(movieDetails);
    }
    if (searchQuery) {
      fetchSearch();
    }
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({query: search})
    setSearch('');
  };

  const handleSearch = event => {
    setSearch(event.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">
        search
        </button>
        <input
          className="{css}"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSearch}
          value={search}
        />
      </form>
      <MovieList movies={movies}/>
    </div>
  );
};

export default SearchBar;
