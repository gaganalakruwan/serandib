import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

const CurrentDate = year + '-' + month + '-' + date;

export default {
  WIDTH: width,
  HEIGHT: height,

  FONT_FAMILY: {
    BOLD: 'Montserrat-Bold',
    BLACK: 'Montserrat-Black',
    BOLD_EXTRA: 'Montserrat-ExtraBold',
    SEMI_BOLD: 'Montserrat-SemiBold',
    REGULAR: 'Montserrat-Regular',
    MEDIUM: 'Montserrat-Medium',
  },

  COLORS: {
    WHITE: '#ffffff',
    PINK: '#d52471',
    BLACK: '#000000',
    BLUE: '#0091D5',
    ASH: '#727272',
  },

  CONTAINER: {
    backgroundColor: 'white',
    flex: 1,
  },
  CONTENT: {
    margin: 20,
    flex: 1,
  },
};
