import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Block from '../Block/Block';
import localStorage from '../../localStorageHandler';

import './AddUser.scss';


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
    stepsInfo: [
      {
        text: 'What is your name?',
        type: 'text',
        name: 'name',
        placeholder: 'Name',
      },
      {
        text: 'Spoken Languages',
        type: 'radio',
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
        type: 'text',
        name: 'phoneNumber',
        placeholder: 'Phone Number'
      },
      {
        text: 'What is your date of birth?',
        type: 'date',
        name: 'name',
        placeholder: 'Select a date'
      },
    ]
  }

  handleInputChage = (e) => {
    const { name, value } = e.target;

    console.log('=> ', name, value);
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
    this.props.history.go('/home');
  }

  renderInput = ({ type, options, placeholder, name }) => {
    const { user } = this.state;
    console.log('=> ', user[name]);
    const inputs = {
      text() {
        return <input type="text" value={user[name]} onChange={this.handleInputChage} />
      },
      date() {
        return <input type="date" value={user[name]} />
      },
      radio() {
        return (
          null
        );
      },
    }

    return inputs[type] ? inputs[type]() : null;
  }
  

  render() {
    const { stepsInfo, step } = this.state;
    const lastStep = stepsInfo.length - 1;
    const stepInfo = stepsInfo[step];

    return (
      <div className="add-user">
        <div>HATO</div>
        <Block className="add-user__modal">
          <p>{stepInfo.text}</p>
          {this.renderInput(stepInfo)}
          <button 
            onClick={step === lastStep ? this.createUser : this.setNextStep}
          >NEXT</button>
        </Block>
      </div>
    );
  }
}

export default withRouter(AddUser);
