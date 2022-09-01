import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductsContextProvider";
import "../../styles/ProductCard.css";
//for cart
import { useCart } from "../../context/CartContextProvider";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();

  const navigate = useNavigate();
  const { addProductToCart } = useCart();

  return (
    <>
      <h2>{item.name}</h2>
      <img src={item.picture} alt="error:(" className="image" />
      <h4>Price:{item.price}$</h4>
      <h4>Type:{item.type}</h4>
      <button
        className="button"
        onClick={() => navigate(`/details/${item.id}`)}
      >
        Details
      </button>
      <button className="button" onClick={() => navigate(`/edit/${item.id}`)}>
        Edit
      </button>
      <button className="button" onClick={() => deleteProduct(item.id)}>
        Delete
      </button>
      <button className="button" onClick={() => addProductToCart(item)}>
        Cart
      </button>
    </>
  );
};

export default ProductCard;
