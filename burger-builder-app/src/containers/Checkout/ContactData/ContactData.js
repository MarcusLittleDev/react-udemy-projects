import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            },
        },
        loading: false,
    }

    orderhandler = (event) => {
        event.preventDefault();

        this.setState({loading:true});

        const formData = {};
        for (let key in this.state.orderForm)
        {
            formData[key] = this.state.orderForm[key].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
            
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

    inputChandedHandler = (event, id) => {
        const orderForm = {
            ...this.state.orderForm,
            [id]: {
                ...this.state.orderForm[id],
                value: event.target.value
            }
        };
        
        this.setState({orderForm})
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm){
            formElementsArray.push(
                <Input
                    key={key} 
                    elementType={this.state.orderForm[key].elementType}
                    elementConfig={this.state.orderForm[key].elementConfig} 
                    value={this.state.orderForm[key].value}
                    changed={(event) => this.inputChandedHandler(event, key)}/>
            )
        }

        let form = (
            <form onSubmit={this.orderhandler}>
                {formElementsArray}
                <Button
                    btnType='Success'>ORDER</Button>
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