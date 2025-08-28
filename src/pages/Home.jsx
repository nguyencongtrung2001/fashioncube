import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
import "../css/home.css";
import Promote from "../components/Promote";
import Selectcategory from "../components/Selectcategory";
import Display from "../components/Display";
import Cart from "../components/Cart";

const Home = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleLogout = () => {
    if (window.confirm('Bạn có chắc chắn muốn đăng xuất?')) {
      dispatch(logout());
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

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
                <Link to="/home">Home</Link>
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
              <li className="item-icon user-info" title={currentUser?.email}>
                <FaUser />
                <span className="user-name">{currentUser?.name}</span>
              </li>
              <li className="item-icon" onClick={toggleCart} title="Giỏ hàng">
                <FaShoppingCart />
              </li>
              <li className="item-icon" onClick={handleLogout} title="Đăng xuất">
                <FaSignOutAlt />
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Promote />
      <Selectcategory />
      <Display />
      
      <Cart isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
};

export default Home;