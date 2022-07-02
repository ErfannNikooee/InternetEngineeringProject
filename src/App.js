import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import ProductDetails from './pages/ProductDetails';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/browse/:category' element={<ProductsPage/>} />
        <Route path='/products/:productId' element={<ProductDetails/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        {/* <Route path='/stores/:storeId' element={<StorePage/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
