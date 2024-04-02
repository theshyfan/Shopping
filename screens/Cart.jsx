import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { COLORS } from "../constants";
import styles from "./cart.style";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import fetchCart from "../hook/fetchCart";
import CartTitle from "../components/cart/CartTitle";

const Cart = ({ navigation }) => {
  const { data, loading, error, refetch } = fetchCart();
  const [selected, setSelected] = useState(null);
  const [select, setSelect] = useState(false);
  
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
        <Text style={styles.titletxt}>Cart</Text>
      </View>

      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <CartTitle item={item} onPress={() => {setSelect(!select), setSelected(item)}} select={select}/>}
        />
      )}
    </SafeAreaView>
  );
};

export default Cart;
