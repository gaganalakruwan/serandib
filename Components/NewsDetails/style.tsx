import { StyleSheet } from 'react-native';
import ComponentsStyles from '../../Constant/Components.styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding: 10,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
        borderRadius: 8,
        backgroundColor: ComponentsStyles.COLORS.WHITE
    },
    headerText: {
        color: ComponentsStyles.COLORS.BLACK,
        fontFamily: ComponentsStyles.FONT_FAMILY.BOLD,
        fontSize: 14,
    },
    authorText: {
        color: ComponentsStyles.COLORS.BLACK,
        fontFamily: ComponentsStyles.FONT_FAMILY.MEDIUM,
        fontSize: 12,
    },
    dateText: {
        color: ComponentsStyles.COLORS.ASH,
        fontFamily: ComponentsStyles.FONT_FAMILY.BOLD,
        fontSize: 12,
        top: 2,
    },
    imageTextContent: {
        flexDirection: 'row',
    },
    noteText: {
        color: ComponentsStyles.COLORS.BLACK,
        fontFamily: ComponentsStyles.FONT_FAMILY.REGULAR,
        fontSize: 12,
        marginTop: 5,
    },
    imageContent: {
        width: '95%',
        height: '95%',
        borderRadius: 8,
    },
    sourceText:{
        color:ComponentsStyles.COLORS.BLACK,
        fontFamily:ComponentsStyles.FONT_FAMILY.REGULAR,
        flex:1,
        fontSize:12,
        top:2,
    },
});