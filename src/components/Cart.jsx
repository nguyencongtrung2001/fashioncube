import React, { useState, useEffect } from 'react'
import { FaTrash, FaPlus, FaMinus, FaShoppingBag } from 'react-icons/fa'
import '../css/cart.css'

const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadCartItems()
  }, [isOpen])

  const loadCartItems = () => {
    const items = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(items)
  }

  const updateQuantity = (itemId, size, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId, size)
      return
    }

    const updatedItems = cartItems.map(item => 
      item.id === itemId && item.selectedSize === size
        ? { ...item, quantity: newQuantity }
        : item
    )

    setCartItems(updatedItems)
    localStorage.setItem('cart', JSON.stringify(updatedItems))
  }

  const removeItem = (itemId, size) => {
    const updatedItems = cartItems.filter(
      item => !(item.id === itemId && item.selectedSize === size)
    )
    setCartItems(updatedItems)
    localStorage.setItem('cart', JSON.stringify(updatedItems))
  }

  const clearCart = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa tất cả sản phẩm?')) {
      setCartItems([])
      localStorage.removeItem('cart')
    }
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Giỏ hàng trống!')
      return
    }
    
    setLoading(true)
    // Simulate checkout process
    setTimeout(() => {
      alert('Đặt hàng thành công!')
      setCartItems([])
      localStorage.removeItem('cart')
      setLoading(false)
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-container" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>
            <FaShoppingBag /> Giỏ hàng
            {cartItems.length > 0 && (
              <span className="cart-count">({getTotalItems()})</span>
            )}
          </h2>
          <button className="cart-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <FaShoppingBag className="empty-icon" />
              <p>Giỏ hàng trống</p>
              <p className="empty-subtitle">Hãy thêm sản phẩm vào giỏ hàng</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${item.selectedSize}-${index}`} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-size">Size: {item.selectedSize}</p>
                      <p className="item-price">{formatPrice(item.price)}</p>
                    </div>

                    <div className="item-actions">
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        >
                          <FaMinus />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                      
                      <button 
                        className="remove-btn"
                        onClick={() => removeItem(item.id, item.selectedSize)}
                        title="Xóa sản phẩm"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Tạm tính:</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="summary-row">
                  <span>Phí vận chuyển:</span>
                  <span>Miễn phí</span>
                </div>
                <div className="summary-total">
                  <span>Tổng cộng:</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
              </div>

              <div className="cart-actions">
                <button 
                  className="clear-cart-btn" 
                  onClick={clearCart}
                  disabled={loading}
                >
                  Xóa tất cả
                </button>
                <button 
                  className="checkout-btn" 
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  {loading ? 'Đang xử lý...' : 'Thanh toán'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart