import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "../css/home.css";
import Promote from "../components/Promote";
import Display from "../components/Display";

const Home = () => { 
  const handleselect = () =>{

  }
  return (
    <div className="home-container">
      <div className="header">
        <div className="header-left">
          <h1 className="title text-one">FASHION</h1>
          <h1 className="title text-two">CUBE</h1>
        </div>
        <div className="header-right">
          <div className="select-list">
            <ul className="nav-list nav-list-title">
              <li className="item-title">
                <Link to="/">Home</Link>
              </li>
              <li className="item-title">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="item-title">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="select-list">
            <ul className="nav-list nav-list-icon">
              <li className="item-icon">
                <FaSearch />
              </li>
              <li className="item-icon">
                <FaUser />
              </li>
              <li className="item-icon">
                <FaShoppingCart />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Thêm phần nội dung chính (tùy chọn) */}
      <Promote />

      <div className="display-clothes">
        <h1 className="display-title">New Arrivals</h1>
        <div className="display-category-button">
          <button className="btn btn-all" onClick={handleselect}> ALL</button>
          <button className="btn btn-men" onClick={handleselect}> MEN</button>
          <button className="btn btn-women" onClick={handleselect}> WOMEN'S </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
