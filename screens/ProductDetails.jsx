import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import {Ionicons} from '@expo/vector-icons';
import styles from "./ProductDetails.style";
import {COLORS} from '../constants';

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>{}}>
          <Ionicons name="heart" size={30} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
