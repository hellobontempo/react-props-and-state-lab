import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  

  findPets = () => {
    let filter = this.state.filters.type
    if (filter === 'all'){
    fetch('/api/pets')
      .then(resp => resp.json())
        .then(json => this.setState({pets: json}))
    } else {
      fetch(`/api/pets?type=${filter}`)
      .then(resp => resp.json())
        .then(json => this.setState({pets: json}))
    }
  }


  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })

  }

  onAdoptPet = (id) => {
    let updatedPets = this.state.pets.map(pet => {
      if (pet.id === id){
        pet.isAdopted = true
      }
      return pet
    })
    this.setState({pets: updatedPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


// App.defaultProps = {
//   pets: allPets
// }