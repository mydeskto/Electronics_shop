import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();

    console.log(id)
    const imageUrl = data.image;
    const title = data.name;
    const price = data.new_price;

    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                {imageUrl ? (
                    <img
                        src={ imageUrl}
                        alt={title}
                    />
                ) : (
                    <div className="no-image">No Image Available</div>
                )}
            </div>
            <div className="prod-details">
                <span className="name">{title}</span>
                <span className="price">
                   Rs {price }
                </span>
            </div>
        </div>
    );
};

export default Product;
