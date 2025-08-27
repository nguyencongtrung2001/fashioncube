import React from 'react';
import display from '../data/displaybg';
import '../css/displaybackground.css';

const DisplayBackground = () => {
  // Lấy ảnh đầu tiên từ mảng display (giả sử display là mảng URL ảnh)
  const backgroundImage = display.length > 0 ? `url(${display[0]})` : 'none';

  const divStyle = {
    backgroundImage: backgroundImage, // Sử dụng backgroundImage thay vì image
    backgroundSize: 'cover', // Đảm bảo ảnh phủ kín
    backgroundPosition: 'center', // Căn giữa ảnh
    backgroundRepeat: 'no-repeat', // Không lặp ảnh
  };

  return (
    <div className="displaybackground-container" style={divStyle}>
      <div className="display-list">
        <h2 className="title title-season">SPRING/SUMMER COLLECTION 2017</h2>
        <h1 className="title title-discount">Get up to 30% Off New Arrivals</h1>
        <button className="btn-shop">SHOP NOW</button>
      </div>
    </div>
  );
};

export default DisplayBackground;