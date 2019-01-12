import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Font } from 'expo';

import Container from '../components/Container/Container';
import Logo from '../components/Logo/Logo';
import CreateGameForm from '../components/Forms/CreateGameForm';
import Header from '../components/Header/Header';

class Home extends Component {
  state = {
    viewDireciton: 'column',
    butWidth: '100%',
    name: '',
    mgBottom: 45
  };

  async componentDidMount() {
    await Font.loadAsync({
      asman: require('../../assets/fonts/ASMAN.ttf')
    });
    this.keyBoardShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardShow);
    this.keyBoardHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardHide);
    this.setState({ fontLoaded: true });
  }

  handleTextChange = text => this.setState({ name: text });

  handleCreateGame = () => console.log('onCreateGame');

  hanldeJoinGame = () => console.log('on Join Game');

  handleOptionPress = () => console.log('on option press');

  keyboardShow = () => {
    this.setState({ butWidth: '45%', viewDireciton: 'row', mgBottom: 0 });
  };

  keyboardHide = () => {
    this.setState({ butWidth: '100%', viewDireciton: 'column', mgBottom: 45 });
  };

  render() {
    const {
      fontLoaded, butWidth, viewDireciton, mgBottom
    } = this.state;
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView style={{ width: '90%' }} behavior="padding">
          {fontLoaded && <Logo marginBottom={mgBottom} />}
          <CreateGameForm
            onCreateGamePress={this.handleCreateGame}
            onJoinGamePress={this.hanldeJoinGame}
            onChangeText={this.handleTextChange}
            width={butWidth}
            direction={viewDireciton}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
export default Home;
