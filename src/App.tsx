import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Products from './pages/products/Products';
import Profile from './pages/profile/Profile';
import Login from './pages/auth/login/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Toaster />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
