import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SignInView from './SignInView';

class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <SignInView {...this.props} />;
  }
}

export default SignInContainer;
