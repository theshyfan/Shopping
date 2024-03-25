import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/index";
import { Feather, Ionicons } from "@expo/vector-icons";
import styles from "./search.style";
import axios from 'axios';
import { FlatList } from "react-native-gesture-handler";
import SearchTitle from "../components/products/SearchTitle";

const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //http://localhost:3001/api/products/search/${searchKey}
  //localhost: 192.168.1.2
  const handleSearch = async() => {
    try {
      const response = await axios.get(`http://192.168.1.2:3001/api/products/search/${searchKey}`)
      setSearchResults(response.data)
    }catch(error){
      console.log("Failed to get products", error)
    }
  }

  console.log(searchKey)
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            onPressIn={() => {}}
            placeholder="what are you looking for"
          ></TextInput>
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={()=> handleSearch()}>
            <Feather name="search" size={24} color={COLORS.offwhite}/>
          </TouchableOpacity>
        </View>
      </View>

      {searchResults.length === 0 ? (
        <View style={{flex: 1}}>
          <Image 
          source={require('../assets/images/Pose23.png')}
          style={styles.searchImage}
          />
        </View>
      ): (
        <FlatList 
        data={searchResults}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (<SearchTitle item={item} />)}
        style={{marginHorizontal: 12}}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
