import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';

export default class register extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'deepskyblue',
            width: '100%',
            height: 240,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 100, height: 100, marginTop: 30}}
            source={{
              uri:
                'https://avatars3.githubusercontent.com/u/26845027?s=280&v=4',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,

            marginHorizontal: '5%',
            width: '90%',
            height: 440,
            backgroundColor: 'white',
            position: 'absolute',
            top: 140,
            borderRadius: 9,
            marginBottom: 5,
            marginTop: 20,
            elevation: 3,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text style={{fontSize: 30}}>Sign up</Text>
          </View>
          <View
            style={{width: '90%', marginBottom: 10, marginHorizontal: '5%'}}>
            <Text>Username</Text>
            <TextInput
              style={{borderBottomWidth: 1, borderColor: 'gray'}}
              placeholder=""
            />
          </View>
          <View
            style={{width: '90%', marginBottom: 10, marginHorizontal: '5%'}}>
            <Text>Email</Text>
            <TextInput
              style={{borderBottomWidth: 1, borderColor: 'gray'}}
              placeholder=""
            />
          </View>
          <View
            style={{width: '90%', marginBottom: 10, marginHorizontal: '5%'}}>
            <Text>Password</Text>
            <TextInput
              style={{borderBottomWidth: 0.5, borderColor: 'gray'}}
              placeholder=""
              secureTextEntry={true}
            />
          </View>
          <View
            style={{width: '90%', marginBottom: 20, marginHorizontal: '5%'}}>
            <Text>Password Confirmation</Text>
            <TextInput
              style={{borderBottomWidth: 0.5, borderColor: 'gray'}}
              placeholder=""
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'deepskyblue',
              borderRadius: 20,
              marginHorizontal: '5%',
              marginBottom: 15,
            }}>
            <Text style={{fontSize: 30, color: 'white'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
