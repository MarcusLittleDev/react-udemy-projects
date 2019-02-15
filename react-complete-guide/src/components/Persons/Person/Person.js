import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Person.module.css';
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'

class Person extends Component{
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props)
        this.inputElementRef = React.createRef();
      }

      static contextType = AuthContext;
    
      // componentWillMount() {
      //   console.log('[Person.js] Inside componentWillMount()')
      // }
    
      componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
      }
    render () {
        console.log('[Person.js] Inside render()')
       return (
           <>
           {this.context.authenticated ? <p>Authenticated!</p>: <p>Please log in</p>}
            <p onClick={this.props.click}>
                I'm a Person! My name is {this.props.name} and I am {this.props.age} years old
            </p>
            <p>{this.props.children}</p>
            <input
             type="text"
            //  ref={(inputEl) => {this.inputElement = inputEl}} 
            ref={this.inputElementRef}
             onChange={this.props.changed} 
             value={this.props.name}/>    
        </>
        ) 
    }
    
}

Person.propTypes= {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, styles.Person);