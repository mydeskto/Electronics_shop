import {useNavigate} from 'react-router-dom'
import "./Category.scss";
// import { useState } from 'react';
// import {  useEffect } from 'react';
// import {fetchDataFromApi} from '../../../Utils/api';


const CategoryFor = ({categories}) => {

    // const [categories,setCategories] = useState([])
    const navigate = useNavigate();

    // useEffect(() => {
        
    //     getCategories();
        
    // }, []);

    // const getCategories = async () => {
    //     try {
    //         const res = await fetchDataFromApi("/api/categories?populate=*");
    //         setCategories(res);
    //     } catch (error) {
    //         console.error("Error fetching categories: ", error);
    //     }
    // };
    
    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="category"
                        onClick={()=> navigate(`/category/${item.id}`)}
                    >
                        <img
                            src={
                                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                item.attributes.img.data.attributes.url
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryFor;