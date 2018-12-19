import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TextInput, TouchableOpacity
} from 'react-native';
import styles from './styles';

const CreateGameForm = (props) => {
  const { onChangeText, onCreateGamePress, onJoinGamePress } = props;
  return (
    <View style={styles.container}>
      <TextInput onChangeText={onChangeText} style={styles.input} placeholder="Pick a cool name!" />

      <TouchableOpacity style={styles.button} onPress={onCreateGamePress}>
        <Text style={styles.buttonText}>Create Game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onJoinGamePress}>
        <Text style={styles.buttonText}>Join a Game!</Text>
      </TouchableOpacity>
    </View>
  );
};

CreateGameForm.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onCreateGamePress: PropTypes.func.isRequired,
  onJoinGamePress: PropTypes.func.isRequired
};

export default CreateGameForm;
