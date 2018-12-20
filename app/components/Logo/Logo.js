import React, { Component } from 'react';
import {
  View, Text, Image, Keyboard
} from 'react-native';
import styles from './styles';

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.keyBoardShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardShow);
    this.keyBoardHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyBoardShowListener.remove();
    this.keyBoardHideListener.remove();
  }

  keyboardShow = () => {
    console.log('keboard did show');
  };

  keyboardHide = () => {
    console.log('keyboard did hide');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logoImage} source={require('../../images/logo.png')} />
        <Text style={styles.text}>SPY FALL</Text>
      </View>
    );
  }
}
export default Logo;
