import '../Styles/Footer.css'

export default function Footer(){
    return(<footer className="footer-container">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Контакти</h3>
        <p>Телефон: +123456789</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="footer-section">
        <h3>Адрес</h3>
        <p>ул. Пашата 2571</p>
        <p>София, България</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2023 Строителна Компания. Всички права запазени.</p>
    </div>
  </footer>
    );
}