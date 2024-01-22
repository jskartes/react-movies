import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';

const MoviesListPage = ({ movies }) => {
  return (
    <div className='MoviesListPage'>
      <h1>Movies List</h1>
      <hr />
      {movies.map(movie => (
        <Link
          key={movie.title}
          to={`/movies/${movie.title}`}
        >
          <MovieCard
            posterPath={movie.posterPath}
            title={movie.title}
            releaseDate={movie.releaseDate}
            cast={movie.cast}
          />
        </Link>
      ))}
    </div>
  );
}

export default MoviesListPage;
