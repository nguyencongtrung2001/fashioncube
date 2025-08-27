import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import ClothDetail from './pages/ClothDetail'

function App() {
  const { isAuthenticated } = useSelector((state) => state.user)

  return (
    <Routes>
      <Route 
        path="/" 
        element={isAuthenticated ? <Navigate to="/home" /> : <Login />} 
      />
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/home" /> : <Login />} 
      />
      <Route 
        path="/home" 
        element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/cloth/:id" 
        element={isAuthenticated ? <ClothDetail /> : <Navigate to="/login" />} 
      />
    </Routes>
  )
}

export default App