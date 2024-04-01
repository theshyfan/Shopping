import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await axios.get("http://192.168.1.2:3001/api/products");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function checkLogin(){
    const id = await AsyncStorage.getItem("id");
    
    if(id !== null){
      setIsLoggedIn(true)
    }
    console.log(id)
    console.log(isLoggedIn)
  }

  useEffect(() => {
    checkLogin(),
    fetchData();
  }, [isLoggedIn]); // 传递空数组作为依赖项

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
