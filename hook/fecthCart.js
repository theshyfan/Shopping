import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const fetchCart = async () => {
  const [data, setData] = useState([]);
  const [loading, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoader(true);
    const token = await AsyncStorage.getItem("token");

    try {
      const endpoint = "http://192.168.1.2:3001/api/cart/find";

      const headers = {
        "Content-Type": "application/json",
        token: JSON.parse(token),
      };

      const response = await axios.get(endpoint, { headers });
      const newData = JSON.stringify(response.data);
      const parseData = JSON.parse(newData)
      const products = parseData[0].products;

      await AsyncStorage.setItem('cartCount', JSON.stringify(products.length))
      setData(products)
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

export default fetchCart;
