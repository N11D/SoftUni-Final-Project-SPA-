import '../Styles/Register.css';

const Register = () => {
  return (
    <div className="registration-container">
      <h2>Регистрация</h2>
      <label>
        Потребителско име:
        <input
          type="text"
          value={''}
          onChange={''}
        />
      </label>
      <label>
        Парола:
        <input
          type="password"
          value=''
          onChange={''}
        />
      </label>
      <label>
        Потвърди парола:
        <input
          type="password"
          value={''}
          onChange={''}
        />
      </label>
      <button >Регистрирай се</button>
    </div>
  );
};

export default Register;
