import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Shop from './Component/Shop';
import Cart from './Component/Cart';
import Purchase from './Component/Purchase';
import Details from './Component/Details';
import Contact from './Component/Contact';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Signout from './Component/Signout'
import Search from './Component/Search';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/purchase" element={<Purchase/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Signin/>}/>
        <Route path="/reg" element={<Signup/>}/>
        <Route path="/signout" element={<Signout/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
      
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
