import React, {Component} from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log("[Order Summary] will update")
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .filter((ingredient) => this.props.ingredients[ingredient] > 0)
            .map(ingredient => {
                return( 
                    <li key={ingredient}>
                        <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {this.props.ingredients[ingredient]}
                    </li>);
            })
        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button
                    clicked={this.props.cancel}
                    btnType="Danger">Cancel</Button>
                <Button
                    clicked={this.props.continue}
                    btnType="Success">Continue</Button>
            </>
        )
    }
}

export default OrderSummary;