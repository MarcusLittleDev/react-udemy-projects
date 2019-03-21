import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
    state = {
        name: 'marcus',
        email: 'test@test.com',
        address: {
            street: 'test street',
            zipCode: 'test street'
        },
        loading: false,
    }

    orderhandler = (event) => {
        event.preventDefault();

        this.setState({loading:true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.name,
                address:this.state.address,
                email: this.state.email
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading:false});
            this.props.history.push('/')
            
        })
        .catch(error => {
            this.setState({loading:false});
            console.log(error)
        })
    }

    render () {
        let form = (
            <form>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="text" name="email" placeholder="Your email" />
                    <input type="text" name="street" placeholder="Your street" />
                    <input type="text" name="zip" placeholder="Your zip code" />
                    <Button
                        btnType='Success'
                        clicked={this.orderhandler}>ORDER</Button>
                </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;