import React from 'react';

import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer]
    if(props.show) {
        attachedClasses.push(classes.Open)
    }
    else {
        attachedClasses.push(classes.Close)
    }

    return (
        <>
        <Backdrop 
            show={props.show}
            clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
}

export default sideDrawer