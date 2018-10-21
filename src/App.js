import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Sanjay', age: 24},
      {name: 'Mohit', age: 23},
      {name: 'Mudit', age: 21}
    ]
  }

  nameChangeHandler = (newName) => {
    this.setState({
      persons: [ 
                 {name: newName, age: 35},
                 {name: 'Lala', age: 30},
                 {name: 'Mala', age: 29}
               ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    }
    return (
      <div className="App">
      <h1> Hi I am Sanjay</h1>
      <p>Hi I am doing preety wells</p>
      <button style={style} onClick={() => this.nameChangeHandler('Gopla')}>Switch Name</button>
      <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
      />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.nameChangeHandler.bind(this, "Ohh ye tho under gaya")}
        changed={this.nameChangedHandler}
      >
      Hello Where are you going!
      </Person>
      <Person
      name={this.state.persons[2].name}
      age={this.state.persons[2].age}
      />
      </div>
    );
  }
}

export default App;
