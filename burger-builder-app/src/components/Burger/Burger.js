import React from "react";

import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredient => {
            return [...Array(props.ingredients[ingredient])].map((_, index) => {
                return <Ingredient key={ingredient + index} type={ingredient} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        },[]);
    
    if(transformedIngredients.length <= 0)
    {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {transformedIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    )
}

export default burger;