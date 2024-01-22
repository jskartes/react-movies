import { useParams } from 'react-router-dom';

const MovieDetailPage = ({ movies }) => {
  const { movieName } = useParams();

  const movie = movies.filter(m => {
    return m.title === movieName;
  })[0];

  return (
    <div className='MovieDetailPage'>
      <h1>{movie.title}</h1>
      <hr />
      <p>Released {movie.releaseDate}</p>
      <img src={movie.posterPath} />
      <p>Cast: {movie.cast.join(', ')}</p>
    </div>
  );
}

export default MovieDetailPage;
