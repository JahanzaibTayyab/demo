import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import styles from './styles';
import Home from '../Home';
class SignInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hidden: true,
    };
  }
  handleChang = (field, value) => {
    this.setState({[field]: value});
  };

  onLogin = () => {
    this.props.navigation.navigate('Home', {email: this.state.email});
  };

  showPassword = () => {
    this.setState({hidden: !this.state.hidden});
  };

  render() {
    console.log(this.state);
    return (
      // <Home name={'Sohaib'} lastName={'Asgharrr'} />
      <View style={styles.container}>
        <View style={styles.fields}>
          <TextInput
            placeholder="Email"
            onChangeText={(value) => {
              this.handleChang('email', value);
            }}
          />
        </View>
        <View
          style={[
            styles.fields,
            {flexDirection: 'row', justifyContent: 'space-between'},
          ]}>
          <TextInput
            secureTextEntry={this.state.hidden}
            placeholder="Password"
            onChangeText={(value) => {
              this.handleChang('password', value);
            }}
          />
          <View
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              paddingRight: 20,
            }}>
            <Text
              onPress={() => {
                this.showPassword();
              }}>
              {this.state.hidden === true ? 'Show' : 'Hide'}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.onLogin();
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
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default SignInView;
