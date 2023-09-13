import React from "react";
import styles from "./ProductoCard.module.css";

const ProductoCard = ({ producto }) => {
  return (
    <div className={styles.card}>
      <img
        src={producto.image}
        alt={producto.title}
        className={styles.productImage}
      />
      <h2 className={styles.productName}>{producto.title}</h2>
      <p className={styles.productDescription}>{producto.description}</p>
      <p className={styles.productCategory}>Categoría: {producto.category}</p>
      <p className={styles.productPrice}>${producto.price}</p>
      <div className={styles.rating}>
        <span className={styles.ratingValue}>{producto.rating.rate}</span>
        <span>({producto.rating.count} reviews)</span>
      </div>
      <button className={styles.buyButton}>Comprar</button>
    </div>
  );
};

export default ProductoCard;
