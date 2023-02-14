import React from 'react';
import Hero from '../../componets/Hero/Hero';
import Products from '../../componets/Products/Products';
import Slider from '../../componets/SLider/Slider';
import Virtual from '../../componets/Virtual/Virtual';

const Home = () => {
    return (
        <div>
           <Hero /> 
           <Slider />
           <Virtual />
           <Products />
        </div>
    );
};

export default Home;