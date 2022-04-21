/**
 * @author Gagana Lakruwan
 */

import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  RefreshControl
} from "react-native";
import NewsDetails from "../../Components/NewsDetails/NewsDetails";
import ComponentsStyles from "../../Constant/Components.styles";
import { getTopHeadline } from "../../Services/Api/NewsService";
import { useNavigation } from "@react-navigation/native";
import _ from 'lodash';
import Header from "../../Components/Header/Header";

const Home = () => {

  const navigation = useNavigation();
  const [loadNews, setLoadNews] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isPullRefreshing, setIsPullRefreshing] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllNews();

  }, [page])

  const onPullToRefresh = () => {
    setIsPullRefreshing(true);
    setLoadNews([]);
    getAllNews();
    setIsPullRefreshing(false);

  };


  const getAllNews = () => {
    setVisible(true);
    getTopHeadline(page).then(
      response => {
        // bind set all data that com from api
        let finalData = [...loadNews, ...response.data.articles];
        //sort data acording to date time
        finalData = finalData.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
        //unique and set the items in the array
        setLoadNews(_.uniqBy(finalData, 'title'));
      }
    ).catch(error => {
      console.log(error);
      setVisible(false);
    }).finally(() => {
      setVisible(false);
      setIsPullRefreshing(false);
    });
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
      <Header title={"Exclusive News"} />
      <View style={ComponentsStyles.CONTENT}>

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={loadNews}
          onEndReached={LoadMoreRandomData}
          ListFooterComponent={renderLoader}
          refreshControl={
            <RefreshControl
              refreshing={isPullRefreshing}
              onRefresh={onPullToRefresh}
            />
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <NewsDetails
                title={item.title}
                author={item.author}
                imageUrl={item.urlToImage}
                date={item.publishedAt}
                source={item.source.name}
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

