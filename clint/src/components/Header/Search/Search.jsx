import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import useFe from "../../../hooks/useFe";
import { useNavigate } from "react-router-dom";

const Search = ({ setshowSearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    let { data } = useFe(
        `/api/products?populate=*&filters[tittle][$contains]=${query}`
    );

    console.log(data);
    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setshowSearch(false)}
                />
            </div>
            <div className="search-result-content">
                {!data?.data?.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className="search-results">
                    {data?.data?.map((item) => (
                        <div
                            className="search-result-item"
                            key={item.id}
                            onClick={() => {
                                navigate("/product/" + item.id);
                                setshowSearch(false);
                            }}
                        >
                            <div className="image-container">
                                <img
                                    src={
                                        process.env
                                            .REACT_APP_STRIPE_APP_DEV_URL +
                                        item.attributes.image.data[0].attributes
                                            .url
                                    }
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.attributes.title}
                                </span>
                                <span className="desc">
                                    {item.attributes.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;