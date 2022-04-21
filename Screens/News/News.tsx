/**
 * @author Gagana Lakruwan
 */

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import ComponentsStyles from "../../Constant/Components.styles";
import Header from "../../Components/Header/Header";
import styles from "./style"
import IconI from 'react-native-vector-icons/Ionicons';
import moment from "moment";


const News = ({ route }) => {

  const navigation = useNavigation();
  const [imageError, setImageError] = useState(false);

  const receiveData = route.params.details;

  return (
    <SafeAreaView style={ComponentsStyles.CONTAINER}>

      <Header title={"News More Info"} onPress={() => navigation.goBack()} />

      <ScrollView style={ComponentsStyles.CONTENT}>

        <View style={styles.imageView}>

          <Image
            source={!imageError && receiveData.urlToImage ? { uri: receiveData.urlToImage } : require('../../assets/images/noImage.jpg')}
            onError={() => { setImageError(true) }}
            style={
              styles.imageContent
            }
          />
        </View>
        <Text style={styles.headerText}>{receiveData.title}</Text>
        <View style={styles.authorBody}>
          <IconI name='bookmarks-sharp' size={15} color={ComponentsStyles.COLORS.ASH} />
          <Text style={styles.sourceText}>{receiveData.source.name}</Text>

          <IconI name='person-circle' size={15} color={ComponentsStyles.COLORS.ASH} />
          <Text style={styles.authorText}>{receiveData.author ? receiveData.author : "No Author"}</Text>
        </View>
        <Text style={styles.dateText}>{moment(receiveData.publishedAt).format('DD MMM YYYY : HH:mm a')}</Text>
        <Text style={styles.noteContent}>{receiveData.description}</Text>

      </ScrollView>
    </SafeAreaView>
  );
}
export default News;
