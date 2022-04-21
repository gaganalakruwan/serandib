/**
 * @author Gagana Lakruwan
 */

import React, { useCallback, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from "moment";
import styles from './style'
import ComponentsStyles from "../../Constant/Components.styles";

type ParamTypes = {
    title: String;
    author: String;
    note: String;
    date: any;
    imageUrl: any;
    onPress: Function;
};

const NewsDetails = ({ title, author, date, note, imageUrl, onPress }: ParamTypes) => {

    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const [imageError, setImageError] = useState(false);

    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text numberOfLines={textShown ? undefined : 2} style={styles.headerText}>{title}</Text>
            </TouchableOpacity>
            <Text style={styles.authorText}>{author ? "By " + author : "- No Author -"}</Text>
            <Text style={styles.dateText}> {moment(date).format('DD MMM YYYY : HH:mm a')}  <IconMC name='calendar-text-outline' size={20} color={ComponentsStyles.COLORS.ASH}/> </Text>
            <View style={styles.imageTextContent}>
                <View style={{ flex: 1, alignSelf: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <Image
                        // source={{ uri:require('../../assets/images/noImage.jpg') }}
                        source={!imageError && imageUrl ? { uri: imageUrl } : require('../../assets/images/noImage.jpg')}
                        onError={() => { setImageError(true) }}
                        style={
                            styles.imageContent
                        }
                    />

                </View>
                <View style={{ flex: 1.5, marginLeft: 5, }}>
                    <Text
                        onTextLayout={onTextLayout}
                        numberOfLines={textShown ? undefined : 5}
                        style={styles.noteText}
                    >
                        {note}
                    </Text>
                </View>
            </View>
        </View>
    );
}
export default NewsDetails;