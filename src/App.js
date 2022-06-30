import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import ProductDetails from './pages/ProductDetails';
import ProductsPage from './pages/ProductsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/browse/:category' element={<ProductsPage/>} />
        <Route path='/products/:productId' element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
