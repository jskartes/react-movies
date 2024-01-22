import ActorCard from '../../components/ActorCard/ActorCard';

const ActorListPage = ({ movies }) => {
  const actors = [];
  for (const movie of movies) {
    for (const actor of movie.cast) {
      actors.push(actor);
    }
  }
  const uniqueActors = Array.from(new Set(actors));

  return (
    <div className='ActorListPage'>
      <h1>Actor List Page</h1>
      <hr />
      {uniqueActors.map(actor => <ActorCard actor={actor} />)}
    </div>
  );
}

export default ActorListPage;
