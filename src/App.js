
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/signUp/signUp';
import FoodDetails from './components/foodDetail/foodDetail';
import Checkout from './components/checkout/checkout';
import Cart from './components/cart/cart';
import FoodCatalog from './components/foodCatalog/foodCatalog';
import Create from './components/create/create';
import Navbar from './components/navBar/navBar';
import Footer from './components/footer/footer';
// import { useEffect } from 'react';
function App() {

  // let navigate = useNavigate()
  // useEffect(()=>{
  //   console.log("in app");
  //   // navigate("/login")
  // },[])
  return (
    <div>
      <Navbar />
       <Routes>
         <Route path='/' element={<Navigate to="/home" />} />
         <Route path='/home' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/create' element={<Create />} />
         <Route path='/food/:id' element={<FoodDetails />} />
         <Route path='/foods' element={<FoodCatalog />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/checkout' element={<Checkout />} />
       </Routes>
       <Footer />
    
    </div>
  );
}

export default App;
