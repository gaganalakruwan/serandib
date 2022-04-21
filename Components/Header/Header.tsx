import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import IconFA from 'react-native-vector-icons/FontAwesome5';
import ComponentsStyles from "../../Constant/Components.styles";
import styles from './style';

type ParamTypes = {
    title: String;
    onPress: Function;
};

const Header = ({ title, onPress }: ParamTypes) => {
    return (
        <View style={styles.container}>
            {onPress ?
                <TouchableOpacity style={styles.iconView} onPress={onPress}>
                    <IconFA name='chevron-left' size={30} color={ComponentsStyles.COLORS.BLUE} />
                </TouchableOpacity>
                : <></>
            }
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}
export default Header;