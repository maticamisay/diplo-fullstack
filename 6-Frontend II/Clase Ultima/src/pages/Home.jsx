import useGetProducts from "../hooks/useGetProducts";
import ProductCard from "../components/product";

const Home = () => {
  const { data, mutation } = useGetProducts();

  const handleCreateProduct = async () => {
    const newProduct = {
      nombre: "Producto Con mutacion",
      precio: 100,
      categoria: "Categoria 1",
    };
    await mutation.mutate(newProduct);
  };

  if (!data) return <h1>Loading...</h1>;
  return (
    <>
      <h1>React App</h1>
      <button onClick={handleCreateProduct}> Agregar producto</button>

      {data?.data &&
        data.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </>
  );
};

export default Home;
