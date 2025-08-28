import React, { useState, useEffect } from 'react';
import { FaRegUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure, clearError } from '../redux/slices/userSlice';
import '../css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    // Clear any previous errors when component mounts
    dispatch(clearError());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      dispatch(loginFailure('Vui lòng nhập email và mật khẩu!'));
      return;
    }

    dispatch(loginStart());

    // Simulate API call - Accept any valid email and password
    setTimeout(() => {
      // Simple validation: email format and password length
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(email)) {
        dispatch(loginFailure('Định dạng email không hợp lệ!'));
        return;
      }
      
      if (password.length < 6) {
        dispatch(loginFailure('Mật khẩu phải có ít nhất 6 ký tự!'));
        return;
      }
      
      // Create user data from input
      const userData = {
        id: Date.now(), // Generate unique ID
        email: email,
        name: email.split('@')[0], // Use email prefix as name
        avatar: null,
        loginTime: new Date().toISOString()
      };
      
      dispatch(loginSuccess(userData));
      navigate('/home');
    }, 1000);
  };

  return (
    <div className='login-container'>
      <div className='login'>
        <h1 className='login__title'>Login</h1>
        <form className='login__form' onSubmit={handleSubmit}>
          <div className='login__input-group'>
            <div className='login__input-wrap'>
              <FaRegUser className='login__icon' />
              <input
                className='login__input'
                value={email}
                type='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className='login__input-wrap'>
              <FaLock className='login__icon' />
              <input
                className='login__input'
                value={password}
                type='password'
                placeholder='Password (tối thiểu 6 ký tự)'
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          
          {error && <div className='login__error'>{error}</div>}
          
          <div className='login__bottom'>
            <p className='login__forgot-text'>Lost your password?</p>
            <button 
              className='login__button' 
              type='submit' 
              disabled={loading}
            >
              {loading ? 'Đang đăng nhập...' : 'Log in'}
            </button>
            <p>
              New user? <Link to='/register'>Please Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;