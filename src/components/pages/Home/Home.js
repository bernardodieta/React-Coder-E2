import React, { useState } from 'react'
import GetAllData from '../../api/api.js'
import ProductDetail from "../Categorys/ProductDetail.js"
function Home() {
  const dato = "";
  const { data } = GetAllData()
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
          <h3>Precio: ${item.price}</h3>
          <button className='btn-comprar' onClick={() => handleClick(item)}>Buy</button>
        </div>
      ))}
    </div>
  )
}

export default Home