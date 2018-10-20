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

  nameChangeHandler = () => {
    this.setState({
      persons: [ {name: 'Gopal', age: 35},
                 {name: 'Lala', age: 30},
                  {name: 'Mala', age: 29}
               ]
    });
    console.log('This Button is Clicked');
  }
  render() {
    return (
      <div className="App">
      <h1> Hi I am Sanjay</h1>
      <p>Hi I am doing preety wells</p>
      <button onClick={this.nameChangeHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >Hello Where are you going!</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
