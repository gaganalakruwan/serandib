import { StyleSheet } from 'react-native';
import ComponentsStyles from '../../Constant/Components.styles';

export default StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: ComponentsStyles.COLORS.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    headerText: {
        color: ComponentsStyles.COLORS.BLACK,
        fontWeight: '600',
        fontSize: 20,
        alignSelf: 'center',
        marginLeft: 20,
    },
    iconView: {
        marginRight: 30,
        marginLeft: 20,
  
    }
});