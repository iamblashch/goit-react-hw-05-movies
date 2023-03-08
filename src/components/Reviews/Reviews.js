
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import apiClient from '../../services/apiClient';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  console.log('setReviews :>> ', setReviews);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await apiClient.getMovieReviews(movieId)
        setReviews(data);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    fetchReviews();
  }, [movieId]);

  let reviewMarkup = [];
  if (reviews.length !== 0) {
    reviewMarkup = reviews.map(({ author, content, id }) => (
      <li key={id}>
        <h4>{author}</h4>
        <p>{content}</p>
      </li>
    ));
  }

  return (
    <ul>
    {reviewMarkup}
    </ul>
  );
};

export default Reviews;