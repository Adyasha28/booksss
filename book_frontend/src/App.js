import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Nabvar/Navbar';
import LandingPage from './Components/LandingPage/Landingpage';
import Search from './Components/SearchPage/SearchPage';
import Wishlist from './Components/Wishlist/Wishlist';
import Register from './Components/auth/register';
import Login from './Components/auth/login';
function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<LandingPage />} />
          <Route exact path='/Search' element={<Search />} /> 
          <Route exact path='/wishlist' element={<Wishlist />} /> 
          <Route exact path='/Register' element={< Register/>} /> 
          
      </Routes>
    </div>
  );
}

export default App;
