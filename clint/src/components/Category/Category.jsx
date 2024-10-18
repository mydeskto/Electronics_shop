import {useParams} from 'react-router-dom'
import "./Category.scss";
import Products from '../Products/Products'
import useFe from '../../hooks/useFe';
const Category = () => {
const {id} =useParams();

const {data} =useFe(`/api/products?populate=*&[filters][categories][id]=${id}`)


    return <div className="category-main-content">
        <div className="layout">
            <div className="category-tittle">
            {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.tittle}
            </div>
            <Products innerPage={true} products={data}/>
        </div>
          </div>;
};

export default Category;