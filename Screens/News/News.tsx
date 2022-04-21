/**
 * @author Gagana Lakruwan
 */

import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import ComponentsStyles from "../../Constant/Components.styles";
import styles from "./style"
import IconI from 'react-native-vector-icons/Ionicons';
import moment from "moment";
import TwoIconText from "../../SubComponents/TwoIconText/TwoIconText";


const News = ({ route }) => {

  const navigation = useNavigation();
  const [imageError, setImageError] = useState(false);

  const receiveData = route.params.details;

  return (
    <SafeAreaView style={ComponentsStyles.CONTAINER}>
      
      <TouchableOpacity style={styles.iconView} onPress={() => navigation.goBack()}>
        <IconI name='ios-arrow-back-circle-outline' size={30} color={ComponentsStyles.COLORS.BLACK} />
      </TouchableOpacity>
      <ScrollView style={ComponentsStyles.CONTENT} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.headerText}>{receiveData.title}</Text>

          <TwoIconText
            icon={<IconI name='person-circle' size={15} color={ComponentsStyles.COLORS.ASH} />}
            name={receiveData.author} />
          <TwoIconText
            icon={<IconI name='bookmarks-sharp' size={15} color={ComponentsStyles.COLORS.ASH} />}
            name={receiveData.source.name} />

          <Text style={styles.dateText}>Posted {moment(receiveData.publishedAt).format('DD MMM YYYY , HH:mm a')}</Text>

        </View>
        <View style={styles.imageView}>

          <Image
            source={!imageError && receiveData.urlToImage ? { cache: 'only-if-cached', uri: receiveData.urlToImage } : require('../../assets/images/noImage.jpg')}
            onError={() => { setImageError(true) }}
            style={
              styles.imageContent
            }
            resizeMode={'cover'}
          />
        </View>
        <Text style={styles.noteContent}>{receiveData.description}</Text>

      </ScrollView>
    </SafeAreaView>
  );
}
export default News;
