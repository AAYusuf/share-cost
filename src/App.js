import './App.css';
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login/Login';
import Register from './views/Register'; 
import CreateSubscription from './views/CreateSubscription';
import MySubscriptions from './views/MySubscriptions';
import Subscription from './components/Subscription';
import MyAccount from './views/MyAccount';
import JoinSubscription from './views/JoinSubscription';
import JoinedSubscriptions from './views/JoinedSubcriptions'
import Profile from './views/Profile'
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Index from './views/Index';
import Wallet from './views/Wallet';
import Bank from './views/Bank';
import Settings from './views/Settings';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
    <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route path="register" element ={<Register />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/join/subscription/:id' element={<JoinSubscription />}/>

        {/* Private Routes */}
        <Route element={<PrivateRoute/>} >
        <Route path='/subscription/:id' element={<Subscription />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/my-account' element={<MyAccount />}/>
        <Route path='/create-subscription' element={<CreateSubscription />}/>
        <Route path='/my-subscriptions' element={<MySubscriptions />}/>
        <Route path='/joined/subscriptions' element={<JoinedSubscriptions />}/>
        <Route path='/wallet' element={<Wallet />}/>
        <Route path='/bank' element={<Bank />}/>
        <Route path='/settings' element={<Settings />}/>
        <Route path='/profile' element={<Profile />}/>
        </Route> 
    </Routes>        
      </AuthProvider>
  </BrowserRouter>
   
  );
}

export default App;
