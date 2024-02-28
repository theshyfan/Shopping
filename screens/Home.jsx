import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  textStyle: {
    fontFamily: 'bold'
  }
})