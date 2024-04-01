import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons, Fontisto} from "@expo/vector-icons";
import styles from "./home.style";
import { Welcome} from "../components";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/Headings";
import ProductRow from "../components/products/ProductRow";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  }, [])

  const checkExistingUser = async()=>{
    const id = await AsyncStorage.getItem('id')
    const userId = `user${JSON.parse(id)}`

    try{
      const currentUserData =await AsyncStorage.getItem(userId);

      if(currentUserData !== null){
        const parseData = JSON.parse(currentUserData)
        setUserData(parseData)
        setUserLogin(true)
      }
    }catch(error){
      console.log("Error retieving the data:", error)
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />

          <Text style={styles.location}>{userData ? userData.location : 'Default'}</Text>

          <View style={{  alignItems:"flex-end"}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
