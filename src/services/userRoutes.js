import { Route, Routes } from 'react-router-dom';
import { lazy,Suspense } from 'react';


const Home = lazy(() => import('pages/Home/Home'));
const Movie = lazy(() => import('pages/Movie/Movie'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const MovieDetails = lazy(() => import('../pages/MoviesDetails/MoviesDetails'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const UserRotes = () => {
  return (
    <Suspense fallback={<p>Loading .........</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRotes;
