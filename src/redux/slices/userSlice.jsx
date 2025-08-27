import { createSlice } from '@reduxjs/toolkit'

// Helper functions for localStorage
const loadUserFromStorage = () => {
  try {
    const serializedUser = localStorage.getItem('user')
    if (serializedUser === null) {
      return null
    }
    return JSON.parse(serializedUser)
  } catch (err) {
    console.error('Error loading user from localStorage:', err)
    return null
  }
}

const saveUserToStorage = (user) => {
  try {
    const serializedUser = JSON.stringify(user)
    localStorage.setItem('user', serializedUser)
  } catch (err) {
    console.error('Error saving user to localStorage:', err)
  }
}

const removeUserFromStorage = () => {
  try {
    localStorage.removeItem('user')
  } catch (err) {
    console.error('Error removing user from localStorage:', err)
  }
}

const initialState = {
  currentUser: loadUserFromStorage(),
  isAuthenticated: !!loadUserFromStorage(),
  loading: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.loading = false
      state.currentUser = action.payload
      state.isAuthenticated = true
      state.error = null
      saveUserToStorage(action.payload)
    },
    loginFailure: (state, action) => {
      state.loading = false
      state.currentUser = null
      state.isAuthenticated = false
      state.error = action.payload
    },
    logout: (state) => {
      state.currentUser = null
      state.isAuthenticated = false
      state.error = null
      removeUserFromStorage()
    },
    updateUser: (state, action) => {
      state.currentUser = { ...state.currentUser, ...action.payload }
      saveUserToStorage(state.currentUser)
    },
    clearError: (state) => {
      state.error = null
    }
  }
})

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updateUser,
  clearError
} = userSlice.actions

export default userSlice.reducer