import { TouchableOpacity, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import styles from "./ProductDetails.style";
import { SIZES, COLORS } from "../constants";
import { useRoute } from "@react-navigation/native";
import addToCart from "../hook/AddToCart";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const {item} = route.params;
  const [count, setCount] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(()=> {
    checkUser();
  }, [isLoggedIn])

  const checkUser = async () => {
    try {
      const id = await AsyncStorage.getItem('id')
      console.log("4id", id)
      if(id !== null){
        setIsLoggedIn(true)
        console.log("5login",isLoggedIn)
      }else{
        console.log('user not logged in')
      }
    }catch(error){
      console.log("Check user happens error" , error)
    }
  }

  const handlePress = () => {
    if(!isLoggedIn){
      navigation.navigate('LoginPage')
    }
  }
  const handleBuy = () => {
    if(!isLoggedIn){
      navigation.navigate('LoginPage')
    }
  }
  const handleCart = () => {
    if(!isLoggedIn){
      navigation.navigate('LoginPage')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress()}
          >
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}> {count} </Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
          {item.description}
          </Text>
        </View>

        <View style={{marginBottom: SIZES.small}}>
              <View style={styles.location}>
                <View style={{flexDirection:'row', alignItems:"center"}}>
                  <Ionicons name='location-outline' size={20} />
                  <Text>{item.product_location}</Text>
                </View>
                
                <View style={{flexDirection:'row', alignItems:"center"}}>
                  <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
                  <Text>Free Delivery</Text>
                </View>
              </View>
        </View>
        
        <View style={styles.cartRow}>
          <TouchableOpacity style={styles.cartBtn} onPress={() => handleBuy()}>
              <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <View style={{  alignItems:"flex-end" ,marginRight: 30}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>10</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} onPress={() => handleCart()}/>
            </TouchableOpacity>
          </View>
        </View>



      </View>
    </View>
  );
};

export default ProductDetails;
