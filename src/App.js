import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loding from './Components/Loding';
import ProductsOnly from './Components/ProductsOnly';
import Footer from './layout/Footer/Footer';
import Navbar from './layout/Navbar/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

function App() {
  const [loding, setLoding] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setLoding(true)
    },3000)
  },[])
  return (
    loding ? 
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Home />
          </>
        }/>
        <Route path='/product/:Id' element={
          <>
            <ProductsOnly />
          </>
        }/>
        <Route path='/products' element={
          <>
            <Home />
          </>
        }/>
        <Route path='/cart' element={
          <>
            <Cart />
          </>
        }/>
        
      </Routes>
      <Footer/>
      <div className='text-center text-white py-3 bg-slate-800'>
        <p className='m-0'>
        copyright <i className="fa fa-copyright" aria-hidden="true"></i> Mahmoud Abdullah Anani
        </p>
      </div>
    </>
    : <Loding/>
  );
}

export default App;
