import { useState } from 'react';
import building1 from './images/download.jpeg';
import building2 from './images/images (1).jpeg';
import building3 from './images/images.jpeg';
import '../Styles/Current.css'

const projects = [
  {
    id: 1,
    street: 'Улица 1',
    number: 10,
    year: 2022,
    image: building1,
  },
  {
    id: 2,
    street: 'Улица 2',
    number: 15,
    year: 2023,
    image: building2,
  },
  {
    id:3,
    street: 'ulica 3',
    number: 81,
    year:2024,
    image: building3,
  },
];

// eslint-disable-next-line react/prop-types
const ProjectDetails = ({ street, number, year }) => (
  <div className="details-container">
    <p>{`Улица: ${street}`}</p>
    <p>{`Брой: ${number}`}</p>
    <p>{`Година: ${year}`}</p>
  </div>
);

const Current = () => {
  const [showDetails, setShowDetails] = useState(null);

  const handleDetailsClick = (projectId) => {
    setShowDetails(projectId === showDetails ? null : projectId);
  };

  return (
    <div className="current-projects-container">
      {projects.map((project) => (
        <article key={project.id} className="project-article">
          <img src={project.image} alt={`Building ${project.id}`} />
          <div className="project-details">
            
            <button onClick={() => handleDetailsClick(project.id)}>
              Детайли
            </button>
            {showDetails === project.id && (
              <ProjectDetails
                street={project.street}
                number={project.number}
                year={project.year}
              />
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Current;
