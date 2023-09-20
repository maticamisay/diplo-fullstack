import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getTitles = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data.map((item) => item.title);
};

const useProducts = () => {
  const {
    data: titles = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getTitles,
  });

  return { titles, isLoading, isError };
};

export default useProducts;
