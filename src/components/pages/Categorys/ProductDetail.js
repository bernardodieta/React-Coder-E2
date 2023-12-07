import React from 'react';

import { Link } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail({ product }) {
    return (
        <div className='detail-container'>
            <div className='product-content'>

                <img src={product.image} alt="" />

            </div>
            <div className='product-description'>

                <h2>{product.title}</h2>
                < h4>Product Description</h4>
                <div >{product.description}</div>
                <h3>Price: ${product.price}</h3>
                <button className='btn-add'>Add to Cart</button>
                <button className='btn-add'><Link to="/">Back</Link></button>

            </div>
        </div>
    );
}

export default ProductDetail;