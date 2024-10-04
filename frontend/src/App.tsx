import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Reports from "./pages/Reports"
import Login from "./pages/Login"

function App() {
  const isAuthenticated = !!localStorage.getItem('token')

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/home" element={ isAuthenticated ? <Home /> :<Navigate to='/' /> } />
          <Route path="/reports" element={<Reports />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
