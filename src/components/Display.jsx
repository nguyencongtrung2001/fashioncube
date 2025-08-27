import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCloth } from '../redux/slices/clothesSlice'
import '../css/display.css'

const Display = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { filteredClothes, currentCategory, loading } = useSelector((state) => state.clothes)

  const handleClothClick = (clothId) => {
    dispatch(selectCloth(clothId))
    navigate(`/cloth/${clothId}`)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)
  }

  const getCategoryTitle = () => {
    switch(currentCategory) {
      case 'men':
        return 'Men\'s Collection'
      case 'women':
        return 'Women\'s Collection'
      default:
        return 'All Collections'
    }
  }

  if (loading) {
    return (
      <div className='display-loading'>
        <div className='loading-spinner'></div>
        <p>Loading products...</p>
      </div>
    )
  }

  return (
    <div className='display-clothes'>
      <div className='display-header'>
        <h1 className='display-title'>{getCategoryTitle()}</h1>
        <div className='display-subtitle'>
          <p>Discover the latest trends in fashion</p>
        </div>
      </div>

      {filteredClothes.length === 0 ? (
        <div className='no-products'>
          <p>No products found in this category</p>
        </div>
      ) : (
        <div className='display-grid'>
          {filteredClothes.map((cloth) => (
            <div 
              key={cloth.id} 
              className='product-card'
              onClick={() => handleClothClick(cloth.id)}
            >
              <div className='product-image-container'>
                <img 
                  src={cloth.image} 
                  alt={cloth.name}
                  className='product-image'
                  loading='lazy'
                />
                <div className='product-overlay'>
                  <button className='view-details-btn'>
                    View Details
                  </button>
                </div>
                <div className='product-badge'>
                  {cloth.category === 'men' ? 'Men' : 'Women'}
                </div>
              </div>
              
              <div className='product-info'>
                <h3 className='product-name'>{cloth.name}</h3>
                <p className='product-price'>{formatPrice(cloth.price)}</p>
                <div className='product-actions'>
                  <button className='add-to-cart-btn'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Display