// components/Footer.js
import React from "react";
import {
  FooterContainer,
  FooterLogo,
  FooterLinks,
  FooterLink,
} from "./FooterComponents";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>MyApp</FooterLogo>
      <FooterLinks>
        <FooterLink
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </FooterLink>
        <FooterLink
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </FooterLink>
        <FooterLink
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
