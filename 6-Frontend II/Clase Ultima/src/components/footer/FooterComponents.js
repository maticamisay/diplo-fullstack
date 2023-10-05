// styles/FooterStyles.js
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLogo = styled.h1`
  font-size: 1.5rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 15px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
