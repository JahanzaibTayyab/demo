import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
const ScrollAble = () => {
  return (
    <View>
      <Text> This is the homepage for the app, will appear after signup!</Text>
      <View>
        <TextInput
          style={{
            width: 250,
            color: 'blue',
          }}
          placeholder="Enter Whatever You love!!"
          value={this.state.Anything}
        />
        <Button>Click Me!</Button>
      </View>
      <View>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default ScrollAble;
