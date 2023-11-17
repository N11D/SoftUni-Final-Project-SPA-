import { Link } from 'react-router-dom'
import '../Styles/Navigation.css'

export default function Navigation(){
    return(<nav className="nav-container">
    <ul className="nav-list">
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
          <li><Link to="/projects/future">Бъдещи</Link></li>
        </ul>
      </li>
      <li className="nav-item">
        <Link to="/services">Услуги</Link>
      </li>
      <li className="nav-item">
        <Link to="/contacts">Контакти</Link>
      </li>
    </ul>
  </nav>
    )
}