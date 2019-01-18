import React, { Component } from 'react';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import styles from './App.module.css';

class App extends Component {
  state = {
    persons: [
      {id: 'df', name: 'Max', age:28},
      {id: 'eewf', name: 'Manu', age: 29},
      {id: 'fgdsf', name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState(
      {persons: [
      {name: newName, age:28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ]})
  }

  nameChangedHandler = (event, id) => {
    console.log('wh')
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons})
  }

  render() {
    // inline styles
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler} />
        </div>
      )
    }

    return (
      <div className={styles.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
