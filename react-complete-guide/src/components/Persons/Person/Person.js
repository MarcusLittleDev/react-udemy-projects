import React, {Component} from 'react';

import styles from './Person.module.css';

class Person extends Component{
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props)
      }
    
      componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()')
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside ComponentDidMount()')
      }
    render () {
        console.log('[Peerson.js] Inside render()')
       return (
        <div className={styles.Person}>
            <p onClick={this.props.click}>I'm a Person! My name is {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>    
        </div>
        ) 
    }
    
}

export default Person;