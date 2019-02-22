import React, {Component} from 'react'

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            this.setState({showSideDrawer: !prevState.showSideDrawer})
        })
        
    }

    render () {
        return (
            <>
                <Toolbar clicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    closed={this.sideDrawerCloseHandler}
                    show={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;