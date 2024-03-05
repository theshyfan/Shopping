import { TouchableOpacity, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import styles from "./ProductDetails.style";
import { SIZES, COLORS } from "../constants";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: "https://qny.smzdm.com/202205/26/628f24408a77c529.jpg_a640.jpg",
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 232</Text>
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
          待到秋来九月八，我花开后百花杀。
          冲天香阵透长安，满城尽带黄金甲。
          </Text>
        </View>

        <View style={{marginBottom: SIZES.small}}>
              <View style={styles.location}>
                <View style={{flexDirection:'row', alignItems:"center"}}>
                  <Ionicons name='location-outline' size={20} />
                  <Text>Los Angeles</Text>
                </View>
                
                <View style={{flexDirection:'row', alignItems:"center"}}>
                  <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
                  <Text>Free Delivery</Text>
                </View>
              </View>
        </View>
        
        <View style={styles.cartRow}>
          <TouchableOpacity style={styles.cartBtn} onPress={() => {}}>
              <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addCart} onPress={() => {}}>
              <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>



      </View>
    </View>
  );
};

export default ProductDetails;
