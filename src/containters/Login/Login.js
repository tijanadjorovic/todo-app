import React from 'react';
import { Redirect, withRouter } from "react-router-dom";

import Input from '../../components/input/index';
import Button from '../../components/button/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isValid: false,
      invalidMessage: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, value) {
    const newState = {};
    newState[key] = value;

    this.setState(newState);
  }

  login() {
    const handleLogin = this.props.handleLogin;
    const {email, password} = this.state;

    if(email === '' || password === '') {
      this.setState({isValid: false, invalidMessage: 'All required fields must be filled out.'});
      return;
    }

    if(!this.handleValidateEmail(email) || !this.handleValidatePassword(password))
      return;
    
      handleLogin();
  }

  handleValidateEmail(value) {
    const re = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(value);
  }

  handleValidatePassword(value) {
    const re = /^.{4,8}$/;
    return re.test(value)
  }

  render() {
    const redirectToReferrer = this.props.redirectToReferrer;
    const {isValid, invalidMessage} = this.state;

    if (redirectToReferrer) {
      return <Redirect to={'/'} />;
    }

    return (
      <div>
        <header>
          <p>Enter your email and password:</p>
        </header>
        <Input
            type="text"
            name="email"
            placeholder="Email"
            handleChange={this.handleChange}
            handleValidate={this.handleValidateEmail}
            invalidMessage="Please enter a valid email."
        />
        <Input
            type="password"
            name="password"
            placeholder="Password"
            handleChange={this.handleChange}
            handleValidate={this.handleValidatePassword}
            invalidMessage="Please enter a valid password."
        />
        {!isValid && <div style={{color: 'red'}}>{invalidMessage}</div>}
        <Button
            text={"Login"}
            onClick={() => {this.login()}}
        />
      </div>
    );
  }
}

export default withRouter(Login);
