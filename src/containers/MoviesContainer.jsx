import React, { useState, useEffect } from 'react'
import MovieSelector from '../components/MovieSelector'
import Movie from '../components/Movie'

const MoviesContainer = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovieById, setSelectedMovieById] = useState('')

  const [people, setPeople] = useState([])


  useEffect(() => {
    getMovies()
    getPeople()
  }, [])

  const getMovies = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((res) => res.json())
      .then((movieData) => setMovies(movieData))
  }

  const getPeople = () => {
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then((res) => res.json())
      .then((peopleData) => setPeople(peopleData))
  }

  const selectedMovie = movies.find((movie) => movie.id === selectedMovieById)
 
  const handleMovieSelected = (movieId) => {
    setSelectedMovieById(movieId)
  }

  return (
    <>
      <section>
        <MovieSelector movies={movies} people={people} onMovieSelected={handleMovieSelected} />
      </section>
      <section>
        <Movie movie={selectedMovie} />
      </section>
    </>
  )
}

export default MoviesContainer
