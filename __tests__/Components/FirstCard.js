//This is an example of Card View//
import React from 'react';
//import react in our code.
import {Text, View, StyleSheet} from 'react-native';
//import all the components we are going to use.
import {Card} from 'react-native-elements';
//import Card

export default class FirstC extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card title="Local Modules at Top">
          {/*react-native-elements Card*/}
          <Text style={styles.paragraph}>
            This is frist card from the react-native-elements
          </Text>
        </Card>
        {/* <Card title="Local Modules at second"> */}
        {/*react-native-elements Card*/}
        {/* <Text style={styles.paragraph}> */}
        {/* This is second card from the react-native-elements */}
        {/* </Text> */}
        {/* </Card> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    padding: 20,
    margin: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
