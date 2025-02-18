import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Addproduct from './Component/Addproduct';
import EditProduct from './Component/EditProduct';
import ProductList from './Component/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addProduct' element={<Addproduct/>}></Route>
      <Route path='/productList' element={<ProductList/>}></Route>
      <Route path='/editproduct/:id' element={<EditProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
