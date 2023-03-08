const API_KEY = '6a9219fefaee6bb385bea99babc897a6';

const apiClient = {
  async getTrendingMovies() {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  },
  async searchMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  },
  async getMovieDetails(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
  async getMovieCredits(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.cast;
  },
  async getMovieReviews(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('data.results :>> ', data.results);
    return data.results;
  },
};

export default apiClient;