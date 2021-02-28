import React from 'react'

class Filters extends React.Component {
  
  // handleFindClick = event => { //don't need separate functions, can just handle in event listener
  //   this.props.onFindPesClick(event)
  // }

  // handleSelect = event => {
  //   this.props.onChangeType(event.target.value)
  // }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          {/* <select onChange={this.handleSelect} name="type" id="type"> */} 
          <select onChange={ (e) => this.props.onChangeType(e)} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          {/* <button onClick={this.handleFindClick}className="ui secondary button">Find pets</button> */}
          <button onClick={ (e) => this.props.onFindPetsClick(e)} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
