import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import Check from '../Check';

// onPress = () => this.props.navigation.navigate('ViewCard');

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  onCardPress = () => {
    this.props.navigation.navigate('Check');
  };
  render() {
    // const {email} = this.props.route.params;
    const {name, lastName} = this.props;
    return (
      <View>
        <Button
          onPress={() => {
            this.props.navigation.goBack();
          }}
          title="Go Back"
        />
        <Text>{`${name} ${lastName}`}</Text>
        <View>
          <Text>-------------Button-------------</Text>
          <TouchableOpacity
            onPress={() => {
              this.onCardPress();
            }}
            style={{
              width: '100%',
              backgroundColor: 'blue',
              height: 40,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              Go To Card!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeView;
