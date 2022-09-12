const People = ({ people }) => {
  if (!people) {
    return null
  }

  return (
    <div>
      <h1>
        Person
      </h1>
      <img className='cover-image' src="" alt='' />
    </div>
  )
}

export default People
