import React, {Component} from 'react';
import {connect} from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import instance from '../../axios-orders';
import * as actionTypes from '../../store/actions'

class BurgerBuilder extends Component {
    state = {
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false,
    }

    componentDidMount () {
        // axios.get('/ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients: response.data})
        //         if (Object.keys(response.data).some(i => response.data[i] > 0))
        //         {
        //             this.setState({purchasable: true})
        //         }
        //         return response;
        //     })
        //     .catch(error => {
        //         this.setState({error:true})
        //     });
    }

    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients)
            .map(ingredient => {
                return ingredients[ingredient];
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);

        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render () {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = <Spinner />;

        let burger = (
            this.state.error ? <p>Ingredients cannot be loaded!</p> : <Spinner />
        );

        if(this.props.ingredients){
            burger = (
                <>
                    <Burger ingredients={this.props.ingredients}/>
                    <BuildControls
                        addIngredient={this.props.onIngredientAdded}
                        removeIngredient={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.totalPrice}
                        purchasable={this.updatePurchaseState(this.props.ingredients)}
                        order={this.purchaseHandler}/>
                </>
            );

            orderSummary = <OrderSummary 
                ingredients={this.props.ingredients}
                continue={this.purchaseContinueHandler}
                cancel={this.purchaseCancelHandler}
                price={this.props.totalPrice}/>
        }

        if (this.state.loading)
        {
            orderSummary = <Spinner />;
        }

        return (
            <>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
                
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredient) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredient}),
        onIngredientRemoved: (ingredient) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredient})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, instance));