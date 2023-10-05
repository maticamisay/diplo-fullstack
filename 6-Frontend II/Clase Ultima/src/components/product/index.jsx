// components/ProductCard.js
import React from "react";
import {
  CardContainer,
  ProductName,
  ProductPrice,
  ProductCategory,
} from "./ProductsComponents";
import useCart from "../../store/useCart";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useCart();
  const handleAddCart = () => {
    setCart([...cart, { ...product, cantidad: 1 }]);
  };

  return (
    <CardContainer>
      <ProductName>{product.nombre}</ProductName>
      <ProductPrice>${product.precio}</ProductPrice>
      <ProductCategory>{product.categoria}</ProductCategory>
      <button onClick={handleAddCart}>Agregar al carrito</button>
    </CardContainer>
  );
};

export default ProductCard;
