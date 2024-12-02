import React from 'react'
import 'animate.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeroPage from './Components/Hero/HeroPage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Foods from './Pages/Foods'
import Profile from './Pages/Profile'
import SettingsPage from './Pages/Setting'
import PrivacyPolicyPage from './Pages/Policy'
import HelpPage from './Pages/Help'
import WishList from './Pages/WishList';
import Cart from './Pages/Cart';
import FoodDetails from './Pages/FoodDetails';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Pages/Checkout';
import Register from './Pages/Register';
import Payment from './Pages/Payment';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<HeroPage />} />
      <Route path={'/about'} element={<About />} />
      <Route path={'/contact'} element={<Contact />} />
      <Route path={'/foods'} element={<Foods />} />
      <Route path={'/profile'} element={<Profile />} />
      <Route path={'/cart'} element={<Cart />} />
      <Route path={'/check_out_page'} element={<Checkout />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/setting_page'} element={<SettingsPage />} />
      <Route path={'/help'} element={<HelpPage />} />
      <Route path={'/ourfoods/:foodId'} element={<FoodDetails />} />
      <Route path={'/wishlist'} element={<WishList />} />
      <Route path={'/policy'} element={<PrivacyPolicyPage />} />
      <Route path={'/payment'} element={<Payment />} />
      <Route path={'/*'} element={<NotFound />} />
    </Routes>
    <ToastContainer />
    </BrowserRouter>
    </>
  )
}

export default App
