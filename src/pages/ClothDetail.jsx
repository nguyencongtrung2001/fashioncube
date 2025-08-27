import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FaArrowLeft, FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa'
import { selectCloth, clearSelectedCloth } from '../redux/slices/clothesSlice'
import '../css/clothdetail.css'

const ClothDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { selectedCloth, allClothes } = useSelector((state) => state.clothes)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('M')
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (id) {
      dispatch(selectCloth(id))
    }
    
    return () => {
      dispatch(clearSelectedCloth())
    }
  }, [id, dispatch])

  const handleBack = () => {
    navigate('/home')
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)
  }

  const handleAddToCart = () => {
    const cartItem = {
      ...selectedCloth,
      quantity,
      selectedSize,
      addedAt: new Date().toISOString()
    }
    
    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItemIndex = existingCart.findIndex(
      item => item.id === selectedCloth.id && item.selectedSize === selectedSize
    )
    
    if (existingItemIndex >= 0) {
      existingCart[existingItemIndex].quantity += quantity
    } else {
      existingCart.push(cartItem)
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart))
    alert(`Added ${quantity} item(s) to cart!`)
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    // Save to localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (isFavorite) {
      const updatedFavorites = favorites.filter(fav => fav.id !== selectedCloth.id)
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    } else {
      favorites.push(selectedCloth)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }

  if (!selectedCloth) {
    return (
      <div className='detail-loading'>
        <div className='loading-spinner'></div>
        <p>Loading product details...</p>
      </div>
    )
  }

  const relatedProducts = allClothes
    .filter(item => item.category === selectedCloth.category && item.id !== selectedCloth.id)
    .slice(0, 4)

  return (
    <div className='cloth-detail-container'>
      <div className='detail-header'>
        <button className='back-btn' onClick={handleBack}>
          <FaArrowLeft /> Back to Home
        </button>
        <nav className='breadcrumb'>
          <Link to='/home'>Home</Link>
          <span>/</span>
          <span>{selectedCloth.category === 'men' ? 'Men' : 'Women'}</span>
          <span>/</span>
          <span>{selectedCloth.name}</span>
        </nav>
      </div>

      <div className='detail-content'>
        <div className='detail-image-section'>
          <div className='main-image-container'>
            <img 
              src={selectedCloth.image} 
              alt={selectedCloth.name}
              className='main-image'
            />
            <button 
              className={`favorite-btn ${isFavorite ? 'active' : ''}`}
              onClick={toggleFavorite}
            >
              <FaHeart />
            </button>
          </div>
        </div>

        <div className='detail-info-section'>
          <div className='product-meta'>
            <span className='product-category'>
              {selectedCloth.category === 'men' ? 'Men\'s Fashion' : 'Women\'s Fashion'}
            </span>
            <div className='product-rating'>
              <div className='stars'>
                {[1, 2, 3, 4, 5].map(star => (
                  <FaStar key={star} className={star <= 4 ? 'filled' : ''} />
                ))}
              </div>
              <span className='rating-text'>(4.0) 128 reviews</span>
            </div>
          </div>

          <h1 className='product-title'>{selectedCloth.name}</h1>
          <p className='product-description'>
            Premium quality {selectedCloth.category === 'men' ? 'men\'s' : 'women\'s'} fashion item. 
            Made with high-quality materials for comfort and style. Perfect for both casual and 
            formal occasions.
          </p>

          <div className='price-section'>
            <span className='current-price'>{formatPrice(selectedCloth.price)}</span>
            <span className='original-price'>{formatPrice(selectedCloth.price * 1.2)}</span>
            <span className='discount-badge'>-17%</span>
          </div>

          <div className='product-options'>
            <div className='size-selection'>
              <h3>Size</h3>
              <div className='size-options'>
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button 
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className='quantity-selection'>
              <h3>Quantity</h3>
              <div className='quantity-controls'>
                <button 
                  className='quantity-btn'
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className='quantity-display'>{quantity}</span>
                <button 
                  className='quantity-btn'
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className='action-buttons'>
            <button className='add-to-cart-btn' onClick={handleAddToCart}>
              <FaShoppingCart /> Add to Cart
            </button>
            <button className='buy-now-btn'>
              Buy Now
            </button>
          </div>

          <div className='product-features'>
            <div className='feature'>
              <h4>Free Shipping</h4>
              <p>Free shipping on orders over 500,000 VND</p>
            </div>
            <div className='feature'>
              <h4>Easy Returns</h4>
              <p>30-day return policy</p>
            </div>
            <div className='feature'>
              <h4>Quality Guarantee</h4>
              <p>100% authentic products</p>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className='related-products'>
          <h2>You might also like</h2>
          <div className='related-grid'>
            {relatedProducts.map(product => (
              <div 
                key={product.id}
                className='related-item'
                onClick={() => dispatch(selectCloth(product.id))}
              >
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{formatPrice(product.price)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ClothDetail