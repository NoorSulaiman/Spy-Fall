import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image style={styles.logoImage} source={require('../../images/logo.png')} />
    <Text style={styles.text}>SPY FALL</Text>
  </View>
);
export default Logo;
