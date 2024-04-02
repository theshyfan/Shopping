import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from "./favorites.style";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { COLORS } from "../constants";
import {Ionicons, SimpleLineIcons} from "@expo/vector-icons"

const Favorites = ({ navigation }) => {
  const [favData, setFavData] = useState([]);

  useEffect(() => {
    checkFavorites();
  }, []);

  const deleteFavorites = async (productId) => {
    const id = await AsyncStorage.getItem("id");
    const favoritesId = `favorites${JSON.parse(id)}`;

    try {
      const existingItem = await AsyncStorage.getItem(favoritesId);
      let favoriteObj = existingItem ? JSON.parse(existingItem) : {};

      if (favoriteObj[productId]) {
        delete favoriteObj[productId];

        checkFavorites();
      }

      await AsyncStorage.setItem(favoritesId, JSON.stringify(favoriteObj));
    } catch (error) {
      console.log("Add to Favorites happens error", error);
    }
  };

  const checkFavorites = async () => {
    const id = await AsyncStorage.getItem("id");
    const favoritesId = `favorites${JSON.parse(id)}`;

    try {
      const favoriteObj = await AsyncStorage.getItem(favoritesId);
      if (favoriteObj !== null) {
        const favorites = JSON.parse(favoriteObj);
        const favList = Object.values(favorites);
        setFavData(favList);
        console.log("FavList length is total: ",favList.length);
      }
    } catch (error) {
      console.log("checkFavorites Error", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <Text style={styles.titletxt}>Favorites</Text>
      </View>

      <FlatList
        data={favData}
        renderItem={({ item }) => (
          <View style={styles.favContainer}>
            <View style={styles.imageContainer}>
              <Image source={{uri:item.imageUrl}} style={styles.image}/>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.fav}>{item.title}</Text>
              <Text style={styles.supplier}>{item.supplier}</Text>
              <Text style={styles.supplier}>{item.price}</Text>
            </View>
          

            <SimpleLineIcons onPress={()=>deleteFavorites(item.id)} name="trash"  size={24} color={COLORS.red}/>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Favorites;
