import { StyleSheet } from 'react-native';
import ComponentsStyles from '../../Constant/Components.styles';

export default StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
       
    },
    headerText: {
        color: ComponentsStyles.COLORS.BLACK,
        fontSize: 35,
        alignSelf: 'center',
        marginLeft: 25,
        top:10,
        fontFamily:ComponentsStyles.FONT_FAMILY.BOLD
    },
    iconView: {
        marginRight: 30,
        marginLeft: 20,
  
    }
});