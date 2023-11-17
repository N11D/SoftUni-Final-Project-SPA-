export default function Home(){
    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Строителна Компания</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-color: lightgrey;\n        }\n\n        header {\n            background-color: #333;\n            color: #fff;\n            padding: 20px;\n            text-align: center;\n        }\n\n        nav {\n            background-color: #555;\n            padding: 10px;\n            text-align: center;\n        }\n\n        nav a {\n            color: #fff;\n            text-decoration: none;\n            margin: 0 15px;\n            font-weight: bold;\n        }\n\n        section {\n            margin: 20px;\n        }\n\n        .hero-image {\n            background-image: url('construction.jpg'); /* Заменете 'construction.jpg' със снимка по ваш избор */\n            background-size: cover;\n            height: 300px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: #fff;\n            text-align: center;\n            font-size: 24px;\n        }\n\n        .services {\n            display: flex;\n            justify-content: space-around;\n            flex-wrap: wrap;\n        }\n\n        .service {\n            width: 30%;\n            padding: 20px;\n            margin: 10px;\n            background-color: #fff;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n            text-align: center;\n        }\n\n        footer {\n            background-color: #333;\n            color: #fff;\n            padding: 10px;\n            text-align: center;\n        }\n    "
    }}
  />
  <header>
    <h1>Добре дошли в Строителна Компания</h1>
  </header>
  <section>
    <div className="hero-image">
      <p>Строим бъдещето всяка стъпка по пътя.</p>
    </div>
    <h2>Нашите Услуги</h2>
    <div className="services">
      <div className="service">
        <h3>Строителство</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="service">
        <h3>Ремонти</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="service">
        <h3>Проектиране</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </section>
  <footer>
    <p>© 2023 Строителна Компания. Всички права запазени.</p>
  </footer>
</>

    );
}