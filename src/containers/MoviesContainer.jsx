import React, { useState, useEffect} from 'react'
import MovieSelector from '../components/MovieSelector'

const MoviesContainer = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovieById, setSelectedMovieById] = useState('')


  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(movieData => setMovies(movieData))
  }
const handleMovieSelected = (movieId) => {
 setSelectedMovieById(movieId)
}

const selectedMovie = movies.find(movie => movie.id === selectedMovieById )

  return <>
    <MovieSelector movies={movies} onMovieSelected={handleMovieSelected} />

    </>
}

export default MoviesContainer
