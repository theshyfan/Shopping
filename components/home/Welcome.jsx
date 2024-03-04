import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { Feather } from "@expo/vector-icons";
import styles from "./welcome.style";
import { useNavigation } from "@react-navigation/native";


const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          Find the most
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() =>navigation.navigate("Search")}
            placeholder="what are you looking for"
          ></TextInput>
        </View>
        <View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite}/>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );
};

export default Welcome;
