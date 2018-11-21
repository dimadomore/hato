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
  }

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
      }
    }));
  }

  setNextStep = () => {
    this.setState(prevState => ({ step: prevState.step + 1 }));
  }

  createUser = () => {
    const { user } = this.state;
    const users = localStorage.get('users');
    if (users && users.length) {
      localStorage.set('users', [...users, user]);
    } else {
      localStorage.set('users', [user]);
    }
    this.props.history.push('/');
  }

  renderInput = ({ type, options, placeholder, name }) => {
    const { user } = this.state;

    switch (type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <input
            className={`form form_${name}`}
            type={type}
            placeholder={placeholder}
            name={name}
            value={user[name]}
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
            selected={user[name] ? parse(user[name], 'dd.MM.yyyy', new Date()) : new Date()}
            onChange={(date) => this.handleInputChange(name, date)}
            dateFormat="dd.MM.yyyy"
          />
        )

      default: 
        return null;
    }
  }

  render() {
    const { step } = this.state;
    const lastStep = AddUser.stepsInfo.length - 1;
    const stepInfo = AddUser.stepsInfo[step];

    return (
      <div className="add-user">
        <div className="add-user__logo">
          <Logo type="long" />
        </div>
        <Block className="add-user__modal">
          <span className="add-user_modal__text">{stepInfo.text}</span>
          <div className="add-user_modal__form">
            {this.renderInput(stepInfo)}
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

export default withRouter(AddUser);
