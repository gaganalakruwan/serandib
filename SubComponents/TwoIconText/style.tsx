import { StyleSheet } from 'react-native';
import ComponentsStyles from '../../Constant/Components.styles';

export default StyleSheet.create({
    authorBody: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    authorText: {
        color: ComponentsStyles.COLORS.ASH,
        marginLeft: 5,
        fontFamily: ComponentsStyles.FONT_FAMILY.SEMI_BOLD,
        flex: 1,
        bottom: 2
    },

});
