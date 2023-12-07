import React from 'react'
import GetAllData from '../../api/api.js'
import '../Home/Home.css'
import { Link } from 'react-router-dom';

function CategoryElectronic() {

  const { data } = GetAllData()


  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='home-container'>
      {data
        .filter((item) => item.category === 'electronics')
        .map((item, index) => (
          <div key={index} className='product-card'>
            <h2>{item.title.substring(0, 30) + '...'}</h2>
            <img src={item.image} alt="" />
            <p>{item.price}</p>
            <Link to={`/categoryelectronic/${item.id}`} className="btn-compra">Mas info</Link>  
          </div>
        ))}
    </div>
  )
}

export default CategoryElectronic