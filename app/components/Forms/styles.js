import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const styles = EStyleSheet.create({
  container: {
    marginTop: 10
  },
  input: {
    backgroundColor: '$white',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 8,
    fontSize: 18,
    color: '$inputText',
    marginBottom: 15
  },
  button: {
    marginTop: 10,
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderRadius: BORDER_RADIUS
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue'
  }
});

export default styles;
