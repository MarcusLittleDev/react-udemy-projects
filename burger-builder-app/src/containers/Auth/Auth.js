import React, { Component } from "react";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.css";

class Auth extends Component {
  state = {
    orderForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    isFormValid: false
  };

  inputChandedHandler = (event, id) => {
    const orderForm = {
      ...this.state.orderForm,
      [id]: {
        ...this.state.orderForm[id],
        value: event.target.value
      }
    };

    if (orderForm[id].valid !== null && orderForm[id].valid !== undefined) {
      orderForm[id].valid = this.validateForm(
        event.target.value,
        this.state.orderForm[id].validation
      );
      orderForm[id].touched = true;
    }

    let isFormValid = true;

    for (let key in this.state.orderForm) {
      if (
        this.state.orderForm[key].valid !== null &&
        this.state.orderForm[key].valid !== undefined
      ) {
        isFormValid = orderForm[key].valid && isFormValid;
      }
    }

    this.setState({ orderForm, isFormValid });
  };

  validateForm(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  render() {
    const form = [];
    for (let key in this.state.orderForm) {
      const formElement = this.state.orderForm[key];
      form.push(
        <Input
          key={key}
          elementType={formElement.elementType}
          elementConfig={formElement.elementConfig}
          value={formElement.value}
          changed={event => this.inputChandedHandler(event, key)}
          invalid={!formElement.valid}
          shouldValidate={formElement.validation}
          touched={formElement.touched}
        />
      );
    }

    return (
      <div className={classes.Auth}>
        <form>
          {form}
          <Button btnType="Success">SUBMIT</Button>
        </form>
      </div>
    );
  }
}

export default Auth;
