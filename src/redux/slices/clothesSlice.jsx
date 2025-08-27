import { createSlice } from '@reduxjs/toolkit'
import { clothemen, clothewomen } from '../../data/clothes'

// Tạo ID duy nhất cho mỗi sản phẩm
const allClothes = [
  ...clothemen.map((item, index) => ({
    ...item,
    id: `men_${index}`,
    category: 'men'
  })),
  ...clothewomen.map((item, index) => ({
    ...item,
    id: `women_${index}`,
    category: 'women'
  }))
]

const initialState = {
  allClothes,
  filteredClothes: allClothes,
  selectedCloth: null,
  currentCategory: 'all',
  loading: false,
  error: null
}

const clothesSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {
    selectAll: (state) => {
      state.filteredClothes = state.allClothes
      state.currentCategory = 'all'
    },
    selectMen: (state) => {
      state.filteredClothes = state.allClothes.filter(item => item.category === 'men')
      state.currentCategory = 'men'
    },
    selectWomen: (state) => {
      state.filteredClothes = state.allClothes.filter(item => item.category === 'women')
      state.currentCategory = 'women'
    },
    selectCloth: (state, action) => {
      const clothId = action.payload
      state.selectedCloth = state.allClothes.find(item => item.id === clothId)
    },
    clearSelectedCloth: (state) => {
      state.selectedCloth = null
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const {
  selectAll,
  selectMen,
  selectWomen,
  selectCloth,
  clearSelectedCloth,
  setLoading,
  setError
} = clothesSlice.actions

export default clothesSlice.reducer