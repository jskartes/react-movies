const MovieCard = ({ posterPath, title, releaseDate }) => {
  const releaseDateParts = releaseDate.split('-');
  const releaseMonth = releaseDateParts[1];
  const releaseDay = releaseDateParts[2];
  const releaseYear = releaseDateParts[0];
  const formattedReleaseDate = `${releaseMonth}/${releaseDay}/${releaseYear}`;
  
  return (
    <div className='MovieCard'>
      <img src={posterPath} />
      <p><strong>{title}</strong></p>
      <p>Released {formattedReleaseDate}</p>
    </div>
  );
}

export default MovieCard;
