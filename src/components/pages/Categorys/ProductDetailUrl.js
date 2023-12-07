import React from 'react';

import GetAllData from '../../api/api';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css';


function ProductDetailUrl() {
    const { productId } = useParams();
    const { data, error } = GetAllData();

    if (!data) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }
    console.log(data);
    console.log(productId);
    const product = data.find((item) => item.id === Number(productId));

    if (!product) {
        return <div>Product not faund</div>;
    }

    const { title, image, price, description } = product;

    return (
        <div className='detail-container'>
            <div className='product-content'>

                <img src={image} alt="" />

            </div>
            <div className='product-description'>
                
                <h2>{title}</h2>
                < h4>Product Description</h4>
                <div >{description}</div>
                <h3>Price: ${price}</h3>
                <button className='btn-add'>Add to Cart</button>
                <button className='btn-add'><Link to="/categoryelectronic">Back</Link></button>
            </div>
        </div>
    );
}

export default ProductDetailUrl;