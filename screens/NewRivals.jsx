import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import styles from "./NewRivals.style";
import { COLORS } from '../constants';

const NewRivals = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightWhite}/>
        </TouchableOpacity>
        <Text style={styles.heading}>Products</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NewRivals