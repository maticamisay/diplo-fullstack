// styles/ProductCardStyles.js
import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  width: 300px;
`;

export const ProductName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.p`
  color: #e44d26;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const ProductCategory = styled.p`
  font-size: 1rem;
  color: #555;
`;
