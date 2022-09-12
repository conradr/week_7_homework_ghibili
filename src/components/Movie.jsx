const Movie = ({ movie, people }) => {
  if (!movie) {
    return null
  }

  const peopleInMovie = () => {
    console.log(movie.people)
  }

  return (
    <div>
      <h1>
        {movie.title} - {movie.original_title}
      </h1>
      <img className='cover-image' src={movie.image} alt='{movie.title}' />
      <ul>
        <li>{movie.people}</li>
      </ul>
    </div>
  )
}

export default Movie
