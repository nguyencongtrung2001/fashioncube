import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "../css/home.css";
import Promote from "../components/Promote";
import Selectcategory from "../components/Selectcategory";

const Home = () => { 
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
      <Selectcategory/>
       
    </div>
  );
};

export default Home;
