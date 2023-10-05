import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useGetProducts = () => {
  const queryClient = useQueryClient();

  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("/api/productos");
      const data = await response.json();
      return data;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24 * 30,
  });

  const mutation = useMutation({
    mutationFn: async (newProduct) => {
      const response = await fetch("/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      console.log(data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  return { data, mutation };
};

export default useGetProducts;
