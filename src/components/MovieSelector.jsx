const movieSelector = ({ movies, onMovieSelected, people }) => {
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
  const peopleArray = people.map((person, index) => {
    return (
      <li key={index}>
        <a href='#' id={index}>
          {person.name}
        </a>
      </li>
    )
  })

  return (
    <>
      <ul>{movieArray}</ul>
    </>
  )
}

export default movieSelector
