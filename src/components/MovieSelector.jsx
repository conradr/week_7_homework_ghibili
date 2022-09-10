const movieSelector = ({ movies, onMovieSelected }) => {
  const handleMovieClick = (event) => {
    onMovieSelected(event.target.id)
  }

  const movieArray = movies.map((movie, index) => {
    return (
      <li key={movie.id}>
        <a href='#' id={movie.id} onClick={handleMovieClick}>
          {movie.title}
        </a>
      </li>
    )
  })

  return <ul>{movieArray}</ul>
}

export default movieSelector
