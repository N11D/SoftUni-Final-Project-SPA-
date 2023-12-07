import { Link } from 'react-router-dom'
import '../Styles/Navigation.css'
import { AuthContext } from '../contextss/authContext'
import { useContext } from 'react'

export default function Navigation(){

    const {isAuthenticated} = useContext(AuthContext);

    return(<nav className="nav-container">
    <ul className="nav-list">
      {isAuthenticated && (
        <>
        <li className="nav-item">
        <Link to="/">Начало</Link>
      </li>
      <li className="nav-item">
        <Link to="/about">За Нас</Link>
      </li>
      <li className="nav-item">
        <span>Проекти</span>
        <ul className="sub-menu">
          <li><Link to="/projects/current">Текущи</Link></li>
        </ul>
      </li>
      <li className="nav-item">
        <Link to="/contacts">Контакти</Link>
      </li>
      <li className="nav-item">
        <Link to="/logout">Изход</Link>
      </li>
      </>
      )}
      {!isAuthenticated && (
        <>
        <li className="nav-item">
        <Link to="/login">Вход</Link>
      </li>
      <li className="nav-item">
        <Link to="/about">За Нас</Link>
      </li>
      <li className="nav-item">
        <Link to="/contacts">Контакти</Link>
      </li>
      <li className="nav-item">
        <Link to="/register">Регистрация</Link>
      </li>
        </>
      )}
    </ul>
  </nav>
    )
}

