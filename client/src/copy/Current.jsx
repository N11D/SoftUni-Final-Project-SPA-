import '../Styles/Current.css'
import './images/download.jpeg'
import build1 from './images/download.jpeg'
import build2 from './images/images (1).jpeg'
import build3 from './images/images.jpeg'

const projects = [
  {
    id: 1,
    street: 'Улица 1',
    number: 10,
    year: 2022,
    image: build1,
  },
  {
    id: 2,
    street: 'Улица 2',
    number: 15,
    year: 2023,
    image: build2,
  },
  {
    id: 3,
    street: 'Улица 3',
    number: 20,
    year: 2024,
    image: build3,
  },
];

const Current = () => {
  return (
    <div className="current-projects-container">
      {projects.map((project) => (
        <article key={project.id} className="project-article">
          <img src={project.image} alt={`Building ${project.id}`} />
          <div className="project-details">
            <h3>{`Улица: ${project.street}`}</h3>
            <p>{`Брой: ${project.number}`}</p>
            <p>{`Година: ${project.year}`}</p>
            <button>Детайли</button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Current;

