import React from 'react'

class Pet extends React.Component {

  displayGender(){
      let pet = this.props.pet
      if (pet.gender === 'female'){
        return '♀'
      } else{
      return '♂'
    }
  }
  displayAdoptButton(){
    let pet = this.props.pet
    if (pet.isAdopted === false){
    return <button onClick={() => this.props.onAdoptPet(pet.id)} className="ui primary button">Adopt pet</button>
    } else if (pet.isAdopted === true) {
    return <button className="ui disabled button">Already adopted</button>
    }
  }

  
  render() {
    let pet = this.props.pet
    console.log(this.props)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.displayGender()}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
         {this.displayAdoptButton()}
        </div>
      </div>
    )
  }
}

export default Pet
