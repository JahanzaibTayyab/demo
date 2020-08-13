import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class HomeView extends Component {
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
      </View>
    );
  }
}

export default HomeView;
