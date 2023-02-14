import React, { useState } from 'react';
import css from './Products.module.css'
import { ProductsData } from '../../data/products';
import plane from '../../assets/plane.png'
import { useAutoAnimate } from '@formkit/auto-animate/react'


const Products = () => {
    const [menuProducts, setMenuProducts] = useState(ProductsData)
   const [parent] = useAutoAnimate()
    const filter = type =>{
        setMenuProducts(ProductsData.filter((product) =>product.type === type))
    }
    return (
        <div className={css.container}>
        <img src={plane} alt='plane' />  
        <h1>Our Feature Products</h1>  
        <div className={css.products}>
            <ul className={css.menu}>
             <li onClick={() =>setMenuProducts(ProductsData)} >All</li>
             <li onClick={() =>filter("skin care")}>Skin Care</li>
             <li onClick={() =>filter("conditioner")}>Conditioner</li>
             <li onClick={() =>filter("foundation")}>Foundation</li>
            </ul>
            <div className={css.list} ref={parent} >
                 {
                    menuProducts.map((product,i) => (
                        <div key={i} className={css.product}>
                          <div className="left-s">
              <div className="name">
                <span> {product.name} </span>
                <span> {product.details} </span>
              </div>
              <span> {product.price}$ </span>
              <div>Shop Now</div>
            
            </div>

            <img className="img-p" src={product.img} alt="product" />
                        </div>
                    ))
                 }
            </div>
        </div>
        </div>
    );
};

export default Products;