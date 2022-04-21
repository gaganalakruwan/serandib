import React from "react";
import {
    View,
    Text
} from "react-native";

import styles from "./style"
type ParamTypes = {
    name: String;
    icon: any;
};


const TwoIconText = ({ icon, name }: ParamTypes) => {
    return (
        <View style={styles.authorBody}>
            <View style={{ flexDirection: 'row', }}>
                {icon}
                <Text style={styles.authorText}>{name ? name : "--"}</Text>
            </View>
        </View>
    );
}
export default TwoIconText;
