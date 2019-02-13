import React, { PureComponent, Component } from 'react';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import styles from './App.module.css';
import withClass from '../hoc/withClass'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props) 
  }

  state = {
    persons: [
      {id: 'df', name: 'Max', age:28},
      {id: 'eewf', name: 'Manu', age: 29},
      {id: 'fgdsf', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] Inside componentWillMount()')
  // }

  componentDidMount() {
    console.log('[App.js] Inside ComponentDidMount()')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons
      ||nextState.showCockpit !== this.state.showCockpit;
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
  // }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate')
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

    console.log('[App.js] Inside render()')

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler} />
      )
    }

    return (
      <React.Fragment>
        <button onClick={() => {
          this.setState({ showCockpit: false});
        }}
        >Remove Cockpit</button>
        {this.state.showCockpit ?( <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}/>
         ) :null}
        {persons}
      </React.Fragment>
    );
  }
}

export default withClass(App, styles.App);
