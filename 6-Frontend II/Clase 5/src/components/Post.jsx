import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Body = styled.p`
  font-size: 16px;
  white-space: pre-line;
`;

export const Post = ({ post }) => {
  const [inCart, setInCart] = useState(false);
  return (
    <Container>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
      <button onClick={() => setInCart(!inCart)}>
        {inCart ? "Quitar del carrito" : "Agregar al carrito"}
      </button>
    </Container>
  );
};
