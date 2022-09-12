import React, { useState, useEffect } from 'react'
//import MovieSelector from '../components/MovieSelector'
import PeopleSelector from '../components/PeopleSelector'
import Movie from '../components/Movie'
import People from '../components/People'

const PeopleContainer = () => {
  // const [movies, setMovies] = useState([])
  // const [selectedMovieById, setSelectedMovieById] = useState('')

  const [people, setPeople] = useState([])
  const [selectedPersonById, setSelectedPersonById] = useState('')

  useEffect(() => {
    getPeople()
  }, [])

  const getPeople = () => {
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then((res) => res.json())
      .then((peopleData) => setPeople(peopleData))
  }

  return (
    <>
      <section>
        <PeopleSelector people={people} />
      </section>
    </>
  )
}

export default PeopleContainer
