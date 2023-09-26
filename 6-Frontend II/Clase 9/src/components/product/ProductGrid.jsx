import React from "react";
import { Row, Col } from "antd";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <Row gutter={16}>
      {products.map((product) => (
        <Col span={8} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;
