import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SafeAreaView} from 'react-native-safe-area-context';
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { COLORS } from "../constants";
import styles from "./cart.style";
import {Ionicons, SimpleLineIcons} from "@expo/vector-icons"

const Cart = ({navigation}) => {
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

    </SafeAreaView>
  );
}

export default Cart