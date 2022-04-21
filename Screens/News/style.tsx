import { StyleSheet } from 'react-native';
import ComponentsStyles from '../../Constant/Components.styles';

export default StyleSheet.create({
    imageContent: {
        width: '100%',
        height: 300,
        borderRadius:8,
    },
    noteContent: {
        fontFamily:ComponentsStyles.FONT_FAMILY.REGULAR,
        fontSize: 15,
        color: ComponentsStyles.COLORS.BLACK,
        textAlign: 'justify',
        marginTop: 10,
    },
    imageView: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        marginTop: 10,
        
    },
    headerText: {
        alignSelf: 'flex-start',
        fontFamily:ComponentsStyles.FONT_FAMILY.BOLD,
        fontSize: 20,
        color: ComponentsStyles.COLORS.BLACK,
        textAlign: 'left',
    },
    dateText: {
        color: ComponentsStyles.COLORS.ASH,
        alignSelf: 'flex-start',
        fontSize:12,
        fontFamily:ComponentsStyles.FONT_FAMILY.SEMI_BOLD,
    },
    authorText: {
        color: ComponentsStyles.COLORS.ASH,
        marginLeft: 5,
        fontFamily:ComponentsStyles.FONT_FAMILY.SEMI_BOLD,
        flex:1,
    },
    sourceText:{
        color:ComponentsStyles.COLORS.ASH,
        marginLeft: 5,
        fontFamily:ComponentsStyles.FONT_FAMILY.SEMI_BOLD,
        flex:1
    },
    authorBody:{
        // flexDirection: 'row',
        // alignSelf:'flex-start',
        alignItems:'center',
        justifyContent:'space-between',
        flex:1,
    },
    iconView: {
        // marginRight: 10,
        marginLeft: 15,
        top:10,
    }

});
