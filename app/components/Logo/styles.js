import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 1.6;

const styles = EStyleSheet.create({
  $largeImageSize: imageWidth,
  $smallImageSize: imageWidth / 2,
  container: {
    alignItems: 'center'
  },
  logoImage: {
    width: imageWidth,
    height: imageWidth,
    backgroundColor: '$white',
    borderRadius: 80,
    marginTop: 40
  },
  text: {
    fontWeight: '600',
    fontSize: 50,
    marginTop: 15,
    color: '$white',
    fontFamily: 'asman'
  }
});

export default styles;
