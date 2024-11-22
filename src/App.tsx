import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Products from './pages/products/Products';
import Profile from './pages/profile/Profile';
import Login from './pages/auth/login/Login';
import Layout from './components/layout/Layout';
import ProductDetails from './pages/productDetails/ProductDetails';
import { useProducts } from './hooks/useProducts';


function App() {
  const {isLoading, products} = useProducts();

  return (
    <Router>
      <div className="App">
        <Toaster />
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Products isLoading={isLoading} products={products} />} />
            <Route path='/:id' element={<ProductDetails products={products}/>}/>
            <Route path="/profile" element={<Profile />}/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
