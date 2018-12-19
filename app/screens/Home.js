import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import { Font } from 'expo';

import Container from '../components/Container/Container';
import Logo from '../components/Logo/Logo';
import CreateGameForm from '../components/Forms/CreateGameForm';
import Header from '../components/Header/Header';

class Home extends Component {
  state = {};

  async componentDidMount() {
    await Font.loadAsync({
      asman: require('../../assets/fonts/ASMAN.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  handleTextChange = text => this.setState({ name: text });

  handleCreateGame = () => this.props.openConnection(this.state.name);

  hanldeJoinGame = () => this.props.openConnection(this.state.name);

  render() {
    const { fontLoaded } = this.state;
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header />
        {fontLoaded && <Logo />}
        <CreateGameForm
          onCreateGamePress={this.handleCreateGame}
          onJoinGamePress={this.hanldeJoinGame}
          onChangeText={this.handleTextChange}
        />
      </Container>
    );
  }
}
export default Home;
