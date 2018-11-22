import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import formatDate from 'date-fns/format';
import parse from 'date-fns/parse';

import Block from '../Block/Block';
import Logo from '../Logo/Logo';
import localStorage from '../../localStorageHandler';

import './AddUser.scss';
import "react-datepicker/dist/react-datepicker.css";


class AddUser extends Component {  
  state = {
    user: {
      name: '',
      email: '',
      phoneNumber: '',
      dateBirth: '',
      languages: [],
    },
    step: 0,
    error: false,
    errorMessage: '',
  }

  input = React.createRef();

  handleInputChange = (name, value) => {
    const { user } = this.state;

    if (name === 'dateBirth') {
      this.setUserValue(name, formatDate(value, 'dd.MM.yyyy'));
      return;
    }

    if (name === 'languages') {
      let newArray = [];
      if (user[name].some(item => item === value)) {
        newArray = user[name].filter(item => item !== value);
      } else {
        newArray = [...user[name], value];
      }
      this.setUserValue(name, newArray);

      return;
    }

    this.setUserValue(name, value);
  }

  setUserValue = (name, value) => {
    this.setState(prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value,
      },
      error: false,
      errorMessage: '',
    }));
  }

  setNextStep = () => {
    this.setState(prevState => {
      const name = AddUser.stepsInfo[prevState.step].name;
      const value = prevState.user[name];
      if (this.validateInput(name, value)) {
        return { 
          step: prevState.step + 1,
        };
      }
      if (name === 'name' 
      || name === 'email'
      || name ==='phoneNumber') {
        this.input.current.focus();
      } 
      return { ...prevState };
    });
  }

  createUser = () => {
    const { user, step } = this.state;
    const name = AddUser.stepsInfo[step].name;
    const value = user[name];
    const users = localStorage.get('users');

    if (this.validateInput(name, value)) {
      if (users && users.length) {
        localStorage.set('users', [...users, user]);
      } else {
        localStorage.set('users', [user]);
      }
      this.props.history.push('/');
    }
  }

  setError = (message) => {
    this.setState({
      error: true,
      errorMessage: message,
    })
    return false;
  }

  validateInput(name, value) {
    if (name === 'name') {
      if (!value) {
        return this.setError('Invalid name');
      }
      if (value.length < 3) {
        return this.setError('Name must be at least 4 characters');
      }
    }

    if (name === 'email') {
      const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!value || !pattern.test(value)) {
        return this.setError('Invalid email adress');
      }
    }

    if (name === 'languages') {
      if (value.length === 0) {
        return this.setError('Select at least 1 language');
      }
    }

    if (name === 'phoneNumber') {
      if (value.length < 9) {
        return this.setError('Phone number must be at least 9 characters');
      }
    }

    if (name === 'dateBirth') {
      if (!value) {
        return this.setError('Please select a date');
      }
    }
    
    return true;
  }

  renderInput = ({ type, options, placeholder, name }) => {
    const { user } = this.state;

    switch (type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <input
            ref={this.input}
            className={`form form_${name}`}
            type={type}
            placeholder={placeholder}
            name={name}
            value={user[name]}
            autoComplete="off"
            onChange={(e) => this.handleInputChange(name, e.target.value)}
          />
        );
      case 'checkbox':
        return (
          <div className={`form_${name}`}>
            {options.map(option => (
              <span
                className={`form_${name}__option ${user[name].some(item => item === option) && `form_${name}__option--selected`}`}
                onClick={() => this.handleInputChange(name, option)}
              >
                {option}
              </span>
            ))}
          </div>
        );
      case 'date':
        return (
          <DatePicker
            selected={user[name] ? parse(user[name], 'dd.MM.yyyy', new Date()) : null}
            onChange={(date) => this.handleInputChange(name, date)}
            dateFormat="dd.MM.yyyy"
            showYearDropdown
            isClearable={false}
            popperPlacement="right-start"
            placeholderText={placeholder}
          />
        )

      default: 
        return null;
    }
  }

  render() {
    const { step, error, errorMessage } = this.state;
    const lastStep = AddUser.stepsInfo.length - 1;
    const stepInfo = AddUser.stepsInfo[step];

    return (
      <div className="add-user">
        <div className="add-user__logo">
          <Logo type="long" />
        </div>
        <Block className="add-user__modal">
          <span className="add-user_modal__text">{stepInfo.text}</span>
          <div className={`add-user_modal__form ${error && 'add-user_modal__form--error'}`}>
            {stepInfo.name !== 'languages' &&
              <div className="add-user_modal_form__icon">
                {AddUser.icons[stepInfo.name]}
              </div>
            }
            {this.renderInput(stepInfo)}
            <div className="error-message">{errorMessage}</div>
          </div>
          <button
            className="add-user_modal__submit"
            onClick={step === lastStep ? this.createUser : this.setNextStep}
          >
            Next
          </button>
        </Block>
      </div>
    );
  }
}

AddUser.stepsInfo = [
  {
    text: 'What is your name?',
    type: 'text',
    name: 'name',
    placeholder: 'Name',
  },
  {
    text: 'Spoken Languages',
    type: 'checkbox',
    name: 'languages',
    options: ['RO', 'RU', 'EN', 'FR'],
  },
  {
    text: 'What is your email?',
    type: 'email',
    name: 'email',  
    placeholder: 'Email',
  },
  {
    text: 'What is your phone number?',
    type: 'number',
    name: 'phoneNumber',
    placeholder: 'Phone Number'
  },
  {
    text: 'What is your date of birth?',
    type: 'date',
    name: 'dateBirth',
    placeholder: 'Select a date'
  },
];

AddUser.icons = {
  name: <i class="fas fa-user"></i>,
  phoneNumber: <i class="fa fa-phone"></i>,
  dateBirth: <i class="fas fa-calendar-alt"></i>,
  email: <i class="fas fa-envelope"></i>,
}

export default withRouter(AddUser);
