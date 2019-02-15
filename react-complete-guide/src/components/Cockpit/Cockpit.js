import React, {useEffect, useRef, useContext} from 'react';

import styles from './Cockpit.module.css'
import withClass from '../../hoc/withClass'
import AuthContext from '../../context/auth-context'
//import Aux from '../../Util/Auxilary'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
      console.log('[Cockpit.js] useEffect')
      // Http request...
      // setTimeout(() => {
      //   alert('Saved data to cloud!')
      // }, 1000);
      toggleBtnRef.current.click();
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect')
      }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect')
      }
    })

    // useEffect()

    const classes = [];
    let btnClass = styles.Button;

    if (props.showPersons) {
        btnClass = [styles.Button, styles.Red].join(" ");
    }

    if (props.personsLength <= 2) {
      classes.push(styles.red);
    }
    if (props.personsLength <=1) {
      classes.push(styles.bold);
    }

    return (
        <>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
            ref={toggleBtnRef} 
                className={btnClass}
                onClick={props.clicked}>
              Toggle Persons
            </button>
            <button 
              onClick={authContext.login}
              className={styles.Button}>
              Log in
            </button>
        </>
    )
}

export default React.memo(cockpit);