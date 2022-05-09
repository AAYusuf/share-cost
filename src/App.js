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
import Login from './views/Login';
import Register from './views/Register'; 
import CreateSubscription from './views/CreateSubscription';
import MySubscriptions from './views/MySubscriptions';
import Subscription from './components/Subscription';
import MyAccount from './views/MyAccount';
import JoinSubscription from './views/JoinSubscription';
import JoinedSubscriptions from './views/JoinedSubcriptions'
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
    <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="register" element ={<Register />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/join/subscription/:id' element={<JoinSubscription />}/>
        <Route path='/subscription/:id' element={<Subscription />}/>

        {/* Private Routes */}
        <Route element={<PrivateRoute/>} >
        <Route path='/my-account' element={<MyAccount />}/>
        <Route path='/create-subscription' element={<CreateSubscription />}/>
        <Route path='/my-subscriptions' element={<MySubscriptions />}/>
        <Route path='/joined/subscriptions' element={<JoinedSubscriptions />}/>
        </Route> 
    </Routes>        
      </AuthProvider>
  </BrowserRouter>
   
  );
}

export default App;
