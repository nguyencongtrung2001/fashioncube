import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAll, selectMen, selectWomen } from '../redux/slices/clothesSlice'
import '../css/selectcategory.css'

const Selectcategory = () => {
  const dispatch = useDispatch()
  const { currentCategory, allClothes, filteredClothes } = useSelector((state) => state.clothes)

  const handleCategoryChange = (category) => {
    switch(category) {
      case 'all':
        dispatch(selectAll())
        break
      case 'men':
        dispatch(selectMen())
        break
      case 'women':
        dispatch(selectWomen())
        break
      default:
        dispatch(selectAll())
    }
  }

  const menCount = allClothes.filter(item => item.category === 'men').length
  const womenCount = allClothes.filter(item => item.category === 'women').length

  return (
    <div className='category-container'>
      <div className='category-header'>
        <h2>Shop by Category</h2>
        <p>Discover our latest fashion collections</p>
      </div>
      
      <div className='category-buttons'>
        <button 
          className={`category-btn ${currentCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('all')}
        >
          All Items
          <span className='item-count'>({allClothes.length})</span>
        </button>
        
        <button 
          className={`category-btn ${currentCategory === 'men' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('men')}
        >
          Men's Fashion
          <span className='item-count'>({menCount})</span>
        </button>
        
        <button 
          className={`category-btn ${currentCategory === 'women' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('women')}
        >
          Women's Fashion
          <span className='item-count'>({womenCount})</span>
        </button>
      </div>

      <div className='category-info'>
        <p>Showing <strong>{filteredClothes.length}</strong> items</p>
      </div>
    </div>
  )
}

export default Selectcategory