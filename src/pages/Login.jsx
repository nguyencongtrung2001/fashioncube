import React, { useState } from 'react';
import { FaRegUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate,Routes,Route } from 'react-router-dom';
import '../css/login.css';

const Login = () => {
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Vui lòng nhập email và mật khẩu!');
            return;
        }
        // Giả sử kiểm tra đăng nhập thành công
        navigate('/home');
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
                        />
                    </div>
                    <div className='login__input-wrap'>
                        <FaLock className='login__icon' />
                        <input
                            className='login__input'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className='login__bottom'>
                    <p className='login__forgot-text'>Lost your password?</p>
                    <button className='login__button' type='submit'>
                        Log in
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