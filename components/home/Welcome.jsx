import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { Feather } from "@expo/vector-icons";
import styles from "./welcome.style";

const Welcome = () => {
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
            onPressIn={() => {}}
            placeholder="what are you looking for"
          ></TextInput>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
