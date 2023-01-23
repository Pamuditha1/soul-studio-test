import React, { useState } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { name, description, price } = product;

  return (
    <div className="pl_card-con">
      <div className="pl_card-content">
        <div className="pl_card_view">
          <small>Tap to View Details</small>
        </div>
        <div
          className="pl_card_image-con"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          <div className="pl_card_wishlist">
            <div className="pl_card_wishlist-box">
              <FontAwesomeIcon icon={faHeart} size="1x" />
            </div>
          </div>
        </div>
        <h2 className="p1_card_title">{name}</h2>
        <p className="pl_card_des">{description}</p>
        <h1 className="pl_card_price">₹ {price}</h1>
      </div>
      <div className="pl_qty-container">
        <div className="pl_card-qty">
          <button
            className="pl_card_qty-btns"
            onClick={() => setQuantity((qty) => --qty)}
          >
            -
          </button>
          <div className="pl_card_amount">
            <div>
              <p className="pl_card_amount_number">{quantity}</p>
            </div>
            <div>
              <p className="pl_card_amount_nos">Nos</p>
            </div>
          </div>

          <button
            className="pl_card_qty-btns"
            onClick={() => setQuantity((qty) => ++qty)}
          >
            +
          </button>
        </div>
        <div className="pl_card-add-cart">
          <FontAwesomeIcon
            icon={faShoppingCart}
            size="1x"
            className="pl_card_icon"
          />
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
