import React, {useEffect} from 'react';

import styles from './Cockpit.module.css'
//import Aux from '../../Util/Auxilary'

const cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect')
      // Http request...
      setTimeout(() => {
        alert('Saved data to cloud!')
      }, 1000);
    }, []);

    // useEffect

    const classes = [];
    let btnClass = styles.Button;

    if (props.showPersons) {
        btnClass = [styles.Button, styles.Red].join(" ");
    }

    if (props.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (props.persons.length <=1) {
      classes.push(styles.bold);
    }

    return (
        <>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </>
    )
}

export default cockpit;