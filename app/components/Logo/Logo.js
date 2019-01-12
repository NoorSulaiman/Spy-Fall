import React, { Component } from 'react';
import {
  View, Text, Animated, Keyboard
} from 'react-native';
import styles from './styles';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
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
    Animated.timing(this.imageWidth, {
      toValue: styles.$smallImageSize,
      duration: 250
    }).start();
  };

  keyboardHide = () => {
    Animated.timing(this.imageWidth, {
      toValue: styles.$largeImageSize,
      duration: 250
    }).start();
  };

  render() {
    const imageStyles = [styles.logoImage, { width: this.imageWidth, height: this.imageWidth }];
    const { marginBottom } = this.props;
    return (
      <View style={styles.container}>
        <Animated.Image style={imageStyles} source={require('../../images/logo.png')} />
        <Text style={[styles.text, { marginBottom }]}>SPY FALL</Text>
      </View>
    );
  }
}
export default Logo;
