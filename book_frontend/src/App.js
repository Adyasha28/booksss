import React from 'react';
import {Route,Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage/Landingpage';
import Search from './Components/SearchPage/SearchPage';
import Wishlist from './Components/Wishlist/Wishlist';
import Register from './Components/auth/register';
import Login from './Components/auth/login';
import Navbar from './Components/Nabvar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={< Register/>} />  
          <Route path='/home' element={<LandingPage />} />
          <Route path='/Search' element={<Search />} /> 
          <Route path='/wishlist' element={<Wishlist />} /> 
      </Routes>
    </div>
  );
}

export default App;
