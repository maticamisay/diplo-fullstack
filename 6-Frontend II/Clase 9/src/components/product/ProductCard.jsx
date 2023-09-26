import React from "react";
import { Card, Rate } from "antd";

const ProductCard = ({ product }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={product.title} src={product.image} />}
    >
      <Card.Meta title={product.title} description={product.description} />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <Rate disabled defaultValue={product.rating.rate} />
      <p>{product.rating.count} reviews</p>
    </Card>
  );
};

export default ProductCard;
