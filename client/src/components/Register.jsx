import '../Styles/Register.css';
import { AuthContext } from '../contextss/authContext';
import { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';

const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
      email: '',
      password: '',
      confirmPassword: '',
    }, onRegisterSubmit);
  
  return (
    <form id='register' method='POST' onSubmit={onSubmit}>
    <div>
      <h2>Регистрация</h2>
      <label>Имейл:</label>
          <input 
              type="email" 
              id='email' 
              name= 'email'
              value={values.email}
              onChange={changeHandler} />
      
      <label>Парола:</label>
        <input 
              type="password" 
              id='password'
              name= 'password'
              value={values.password}
              onChange={changeHandler} />
      
      <label>Повтвърдете парола:</label>  
        <input 
              type="password" 
              id='confirmPassword'
              name= 'confirmPassword'
              value={values.confirmPassword}
              onChange={changeHandler} />
        <input type="submit" className='btn submit' value='Регистрация' />
        <p>
          <span>Ако вече имате профил, натиснете <Link to="/login">тук</Link></span>
        </p>
    </div>
    </form>
  );
};

export default Register;
