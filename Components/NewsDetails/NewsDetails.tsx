/**
 * @author Gagana Lakruwan
 */

import React, { useCallback, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import IconI from 'react-native-vector-icons/Ionicons';
import moment from "moment";
import styles from './style'
import ComponentsStyles from "../../Constant/Components.styles";
import TwoIconText from "../../SubComponents/TwoIconText/TwoIconText";

type ParamTypes = {
    title: String;
    author: String;
    note: String;
    source: String;
    date: any;
    imageUrl: any;
    onPress: Function;
};

const NewsDetails = ({ title, author, date, note, imageUrl, source, onPress }: ParamTypes) => {

    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const [imageError, setImageError] = useState(false);

    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.imageTextContent}>
                <View style={{ flex: 1.8 }}>
                    <TwoIconText
                        icon={<IconI name='person-circle' size={15} color={ComponentsStyles.COLORS.ASH} />}
                        name={author ? author : "- No Author -"} />
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.headerText}>{title}</Text>
                    </TouchableOpacity>
                    
                    <TwoIconText
                        icon={<IconI name='ios-calendar-outline' size={15} color={ComponentsStyles.COLORS.ASH} />}
                        name={moment(date).format('DD MMM YYYY : HH:mm a')} />

                    <TwoIconText
                        icon={<IconI name='ios-bookmarks' size={15} color={ComponentsStyles.COLORS.ASH} />}
                        name={source} />

                    <Text
                        onTextLayout={onTextLayout}
                        numberOfLines={textShown ? undefined : 2}
                        style={styles.noteText}
                    >
                        {note}
                    </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={!imageError && imageUrl ? { cache: 'only-if-cached', uri: imageUrl } : require('../../assets/images/noImage.jpg')}
                        onError={() => { setImageError(true) }}
                        style={
                            styles.imageContent
                        }
                        resizeMode={'cover'}
                    />

                </View>
            </View>
        </View>
    );
}
export default NewsDetails;