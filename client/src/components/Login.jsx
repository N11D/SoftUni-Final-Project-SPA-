import '../Styles/Login.css'
import { useContext } from 'react';
import { AuthContext } from '../contextss/authContext';
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';


const LoginFormKeys= {
  Email: 'email',
  Password: 'password',
}


const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
        [LoginFormKeys.Username]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);
  
  return (
    <form id='login' method='POST' onSubmit={onSubmit}>
    <div>
      <h2>Вход</h2>
      
      <label>Потребителско име:</label>
          <input 
              type="email" 
              id='email' 
              name= {LoginFormKeys.Email}
              value={values[LoginFormKeys.Email]}
              onChange={changeHandler} />
      
      <label>Парола:</label>
        <input 
              type="password" 
              id='password'
              name= {LoginFormKeys.Password}
              value={values[LoginFormKeys.Password]}
              onChange={changeHandler} />
        <input type="submit" className='btn submit' value='Влез' />

        <p>
          <span>Ако нямате профил, натиснете <Link to="/register">тук</Link></span>
        </p>
    </div>
    </form>
  );
};

export default Login;
