import React, { useState, useEffect } from 'react';
import {  slide } from '../data/slide';
import '../css/promote.css';

const Promote = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slide.length);
    }, 5000); // Chuyển ảnh mỗi 5 giây
    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  const divStyle = {
    backgroundImage: `url(${slide[currentSlide]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
 
  };

  return (
    <div className="promote-container" style={divStyle}>
      <div className="slide-infor">
        <h2>SPRING / SUMMER COLLECTION 2017</h2>
        <h1>Get up to 30% Off New Arrivals</h1>
        <button className="btn-shop-now">SHOP NOW</button>
      </div>
     
    </div>
  );
};

export default Promote;