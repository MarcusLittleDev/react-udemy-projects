import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .filter((ingredient) => props.ingredients[ingredient] > 0)
        .map(ingredient => {
            return( 
                <li key={ingredient}>
                    <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}
                </li>);
        })
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                clicked={props.cancel}
                btnType="Danger">Cancel</Button>
            <Button
                clicked={props.continue}
                btnType="Success">Continue</Button>
        </>
    )
};

export default orderSummary;