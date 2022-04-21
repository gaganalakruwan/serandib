import { StyleSheet } from 'react-native';
import ComponentsStyles from '../../Constant/Components.styles';

export default StyleSheet.create({
    imageContent: {
        width: '100%',
        height: 300,
        resizeMode: 'stretch',
    },
    noteContent: {
        alignSelf: 'center',
        fontWeight: '300',
        fontSize: 14,
        color: ComponentsStyles.COLORS.BLACK,
        textAlign: 'justify',
        marginTop: 10,
    },
    imageView: {
        width: '100%',
        height: 300,
        alignItems: 'center'
    },
    headerText: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 20,
        color: ComponentsStyles.COLORS.BLACK,
        textAlign: 'center'
    },
    dateText: {
        color: ComponentsStyles.COLORS.ASH,
        alignSelf: 'center'
    },
    authorText: {
        color: ComponentsStyles.COLORS.ASH,
        marginLeft: 10,
    },
    sourceText:{
        color:ComponentsStyles.COLORS.ASH,
        marginRight: 20,
        marginLeft: 10,
    },
    authorBody:{
        flexDirection: 'row',
        alignSelf:'center'
    }

});
