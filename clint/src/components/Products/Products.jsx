import "./Products.scss";
import Product from "./Product/Product";
import { useEffect, useState } from "react";

const Products = ({ products, innerPage, headingText }) => {
    console.log(products, "hello");

    const [data, setData] = useState([]);

    // Update data whenever products change
    useEffect(() => {
        if (Array.isArray(products)) {
            setData(products);
        }
    }, [products]); // Run when `products` changes

    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {data.length > 0 ? (
                    data.map((item) => (
                        <Product key={item.id} id={item._id} data={item} />
                    ))
                ) : (
                    <div>No products available.</div>
                )}
            </div>
        </div>
    );
};

export default Products;