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
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
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
                value: event.target.value,
                valid:this.validateForm(event.target.value, this.state.orderForm[id].validation),
                touched:true,
            }
        };

        
        this.setState({orderForm})
    }

    validateForm(value, rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength)
        {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm){
            const formElement = this.state.orderForm[key];
            formElementsArray.push(
                <Input
                    key={key} 
                    elementType={formElement.elementType}
                    elementConfig={formElement.elementConfig} 
                    value={formElement.value}
                    changed={(event) => this.inputChandedHandler(event, key)}
                    invalid={!formElement.valid}
                    shouldValidate={formElement.validation}
                    touched={formElement.touched}/>
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