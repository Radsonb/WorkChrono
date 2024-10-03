import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Reports from "./pages/Reports"

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
