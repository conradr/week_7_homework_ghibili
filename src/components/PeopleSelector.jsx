const PeopleSelector = ({ onPersonSelected, people }) => {
  const handlePersonClick = (event) => {
    onPersonSelected(event.target.id)
  }

  const peopleArray = people.map((person, index) => {
    return (
      <li className='people-item' key={index}>
        <h2 className='title'>{person.name}</h2>
        <div className='image-container'>
          <img className='image' src={person.image} />
        </div>
        <div className='attributes'>
          <div className='attribute-group'>
            <div className='attribute-name'>Species</div>
            <div className='attribute-value'>{person.species}</div>
          </div>
          <div className='attribute-group'>
            <div className='attribute-name'>Gender</div>
            <div className='attribute-value'>{person.gender}</div>
          </div>
          <div className='attribute-group'>
            <div className='attribute-name'>Year of Birth</div>
            <div className='attribute-value'>{person.yearOfBirth}</div>
          </div>
          <div className='attribute-group'>
            <div className='attribute-name'>Ancestry</div>
            <div className='attribute-value'>{person.ancestry}</div>
          </div>
          <div className='attribute-group'>
            <div className='attribute-name'>Eye Colour</div>
            <div className='attribute-value'>{person.eyeColour}</div>
          </div>
          <div className='attribute-group'>
            <div className='attribute-name'>Hair Colour</div>
            <div className='attribute-value'>{person.hairColour}</div>
          </div>
          <div className='attribute-group'>
            <div className='attribute-name'>Wand</div>
            <div className='attribute-value'>
              {person.wand['wood']}
              <br />
              {person.wand['core']}
              <br />
              Length: {person.wand['length']} 
            </div>
          </div>
          <div className='attribute-group'>
            <div className='attribute-name'>Patronus</div>
            <div className='attribute-value'>{person.patronus}</div>
          </div>
          <div className='attribute-group'>
            <div className='attribute-name'>Howarts Student</div>
            <div className='attribute-value'>{person.hogwartsStudent}</div>
          </div>
          <div className='attribute-group'>
            <div className='attribute-name'>Howarts Staff</div>
            <div className='attribute-value'>{person.hogwartsStaff}</div>
          </div>
          <div className='attribute-group'>
            <div className='attribute-name'>Actor</div>
            <div className='attribute-value'>{person.actor}</div>
          </div>
          <div className='attribute-group'>
            <div className='attribute-name'>Alive</div>
            <div className='attribute-value'>{person.alive}</div>
          </div>
        </div>
      </li>
    )
  })

  return (
    <>
      <ul class='people-list'>{peopleArray}</ul>
    </>
  )
}

export default PeopleSelector
