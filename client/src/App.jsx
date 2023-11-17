import { Routes, Route, useNavigate } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home'
import About from './components/About';
import Footer from './components/Footer'
import Contacts from './components/Contacts';
import Current from './components/Current';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import * as authServices from './services/authServices';
import { AuthContext } from './contextss/authContext';
import { useState } from 'react';


function App() {

  const navigate=useNavigate();
  
  const [auth, setAuth]=useState({});

  const onLoginSubmit = async(data)=> {
    try {
      const result= await authServices.login(data);
      setAuth(result);
      navigate('/');
    } catch (error) {
     console.log('There is an error'); 
    }
  };

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } =  values;
    if(confirmPassword !== registerData.password){
      return alert('Password does not match!');
    }

    try {
      const result = await authServices.register(registerData);

      setAuth(result);

      navigate('/');
    } catch (error) {
      console.log('There is an error');
    }
  }

  const onLogout = () => {

    setAuth({});
  }

  const loggedIn = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
    }

  


  return (
    <AuthContext.Provider value={loggedIn}>

    <div>

      <Navigation />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/projects/current' element={<Current/>} />
      </Routes>
      
      <Footer />

    </div>

    </AuthContext.Provider>
  );
}

export default App
