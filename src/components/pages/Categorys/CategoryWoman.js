import React, { useState } from 'react'
import GetAllData from '../../api/api.js'
import '../Home/Home.css'
import ProductDetail from './ProductDetail.js';

function CategoryWoman() {
    const dato = "/category/women's clothing";   
    const { data } = GetAllData(dato)
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClick = (product) => {
        setSelectedProduct(product);
    }

    if (!data) {
        return <div>Loading...</div>;
    }
    if (selectedProduct) {
        return <ProductDetail product={selectedProduct} />;
    }

    return (
        <div className='home-container'>
            {data.map((item, index) => (
                <div key={index} className='product-card'>
                    <h2>{item.title.substring(0, 30) + '...'}</h2>
                    <img src={item.image} alt="" />
                    <h3>{item.price}</h3>
                    <button className='btn-comprar' onClick={() => handleClick(item)}>Buy</button>
                </div>
            ))}
        </div>
    )
}

export default CategoryWoman