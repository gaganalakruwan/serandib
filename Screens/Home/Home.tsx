/**
 * @author Gagana Lakruwan
 */

import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator
} from "react-native";
import NewsDetails from "../../Components/NewsDetails/NewsDetails";
import ComponentsStyles from "../../Constant/Components.styles";
import { getTopHeadline } from "../../Services/Api/NewsService";
import { useNavigation } from "@react-navigation/native";

import Header from "../../Components/Header/Header";

const Home = () => {

  const navigation = useNavigation();
  const [loadNews, setLoadNews] = useState([]);
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllNews();

  }, [page])

  const getAllNews = () => {
    setVisible(true);
    getTopHeadline(page).then(
      response => {
        // bind set all data that com from api
        let finalData = [...loadNews, ...response.data.articles];
        //sort data acording to date time
        finalData = finalData.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

        setLoadNews(finalData);
        setVisible(false);
      }
    ).catch(error => {
      console.log(error);
      setVisible(false);
    })
  }

  const LoadMoreRandomData = () => {
    setPage(page + 1);
  }

  const renderLoader = () => {
    return (
      visible ?
        <View>
          <ActivityIndicator size="large" color={ComponentsStyles.COLORS.BLACK} />
        </View>
        : <></>
    )
  }

  return (
    <SafeAreaView style={ComponentsStyles.CONTAINER}>
      <Header title={"Hot News"} />
      <View style={ComponentsStyles.CONTENT}>

        <FlatList
          keyExtractor={item => item.title}
          data={loadNews}
          onEndReached={LoadMoreRandomData}
          ListFooterComponent={renderLoader}
          renderItem={({ item }) => {
            return (
              <NewsDetails
                title={item.title}
                author={item.author}
                // author="Test"
                imageUrl={item.urlToImage}
                date={item.publishedAt}
                note={item.description ? item.description : "No Details Available"}
                onPress={() => navigation.navigate('News', { 'details': item })}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
export default Home;

