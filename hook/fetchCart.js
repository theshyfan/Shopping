import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import axios from "axios";

const fetchCart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoader] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoader(true);
    const token = await AsyncStorage.getItem("token");
    try {
      const endpoint = "http://192.168.1.2:3001/api/cart/find";

      const headers = {
        "Content-Type": "application/json",
        token: JSON.parse(token),
      };

      const response = await axios.get(endpoint, { headers });
      const cartProducts = response.data[0].products;

      await AsyncStorage.setItem('cartCount', JSON.stringify(cartProducts.length))
      setData(cartProducts)
      setLoader(false)

    } catch (error) {
      setError(error)
    }finally{
        setLoader(false)
    }
  };

  useEffect(()=>{
    fetchData();
  }, [])

  const refetch = () => {
    setLoader(true)
    fetchData();
  }

  return {data, loading, error, refetch}
};

export default fetchCart
