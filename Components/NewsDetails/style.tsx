import { StyleSheet } from 'react-native';
import ComponentsStyles from '../../Constant/Components.styles';

export default StyleSheet.create({
    container: {
        height: 230,
        padding: 10,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 1,
        borderRadius:5,
        // backgroundColor:'red'
    },
    headerText: {
        color: ComponentsStyles.COLORS.BLACK,
        fontWeight: "600",
        fontSize: 16,
    },
    authorText: {
        color: ComponentsStyles.COLORS.BLACK,
        fontWeight: "300",
        fontSize: 14,
    },
    dateText: {
        color: ComponentsStyles.COLORS.BLACK,
        fontWeight: "300",
        fontSize: 10,
    },
    imageTextContent: {
        flexDirection: 'row',
        flex: 1,
        padding: 5
    },
    noteText: {
        color: ComponentsStyles.COLORS.BLACK,
        fontWeight: '300',
        fontSize: 16
    },
    imageContent: {
        width: '80%',
        height: '100%',
        alignSelf: "flex-start",
        resizeMode: 'stretch',
    }
});