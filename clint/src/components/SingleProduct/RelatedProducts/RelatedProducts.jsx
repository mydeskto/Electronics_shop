import axios from 'axios';
import Products from '../../Products/Products';
import { useEffect, useState } from 'react';

const RelatedProducts = ({ productId, categoryId }) => {
    const [data, setData] = useState([]); // State to store related products
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            try {
                const url = `http://localhost:3000/api/relatedProducts/${productId}`;
                const response = await axios.get(url);
                if (response && response.data) {
                    setData(response.data.relatedProducts);
                    console.log(response.data.relatedProducts) // Update state with fetched data
                }
            } catch (error) {
                console.error("Error fetching related products:", error);
                setError("Failed to load related products."); // Set error state
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchRelatedProducts();
    }, [productId, ]);

    if (loading) {
        return <div>Loading related products...</div>; // Loading state
    }

    if (error) {
        return <div>{error}</div>; // Display error message
    }

    return (
        <div className='related-products'>
            <Products headingText="Related Products" products={data} />
        </div>
    );
};

export default RelatedProducts;
