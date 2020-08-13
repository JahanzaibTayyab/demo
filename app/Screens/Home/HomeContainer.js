import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HomeView from './HomeView';

class HomeContainer extends Component {
  render() {
    return <HomeView {...this.props} />;
  }
}

export default HomeContainer;
