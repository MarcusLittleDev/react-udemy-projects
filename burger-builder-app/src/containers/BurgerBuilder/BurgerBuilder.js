import React, {Component} from 'react';

interface State {}

interface Props {}

class BurgerBuilder extends Component<Props, State> {
    render () {
        return (
            <>
                <div>Burger</div>
                <div>Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder