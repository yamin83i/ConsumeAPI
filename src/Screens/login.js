import React, {Component} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,
} from 'react-native';
import AsynStorage from '@react-native-async-storage/async-storage';

export default class login extends Component {
  login = () => {
    const url = 'http://restful-api-laravel-7.herokuapp.com/api/login';

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify({
        email: 'rais@gmail.com',
        password: '12345678',
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        if (resJson.token) {
          AsynStorage.setItem('token', resJson.token).catch((err) =>
            console.log(err),
          );
          this.props.navigation.replace('Home');
        } else {
          alert('error');
        }
      })
      .catch((er) => {
        console.log(er);
      });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="login" color="blue" onPress={() => this.login()} />
      </View>
    );
  }
}
