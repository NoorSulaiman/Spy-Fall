import { Dimensions, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 11;

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 20
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight
    }
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  icon: {
    width: imageWidth,
    height: imageWidth
  }
});

export default styles;
