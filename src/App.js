import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Sanjay', age: 24},
      {id: '2', name: 'Mohit', age: 23},
      {id: '3', name: 'Mudit', age: 21}
    ],
    showPersons: false
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {
      persons: persons
    } )
  }
  toggleNameHandler =  () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    console.log(this.state.showPersons);
  }
  deleteNameHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons });

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (this.state.persons.map((person, personIndex) => {
        return  <Person click={() => this.deleteNameHandler(personIndex)}
        name={person.name}
        age={person.age}
        key={person.id} 
        changed={(event) => this.nameChangedHandler(event, person.id)}
        />
      })
      );
    }
    return (
      <div className="App">
      <h1> Hi I am Sanjay</h1>
      <p>Hi I am doing preety wells</p>
      <button style={style} onClick={this.toggleNameHandler}>Toggle Name</button>
      {persons}
      </div>
    );
  }
}

export default App;
