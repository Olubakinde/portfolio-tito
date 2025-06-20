import './Projects.css';

const projects = [
  {
    logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
    name: 'Career Helpi | AI-Powered Career Quiz Platform',
    role: 'Full Stack Developer',
    link: 'https://ammarahmad05.github.io/cisc275-helpi/',
    period: 'Feb 2025 - May 2025',
    description: 'Developed a web app that leverages GPT-4 to generate personalized career recommendations from user quiz responses, Integrated the OpenAI API with asynchronous handling, prompt engineering, and error fallback logic for reliable, context-aware outputs, Designed a responsive UI/UX to support seamless AI-driven interaction, including dynamic progress tracking and user feedback.'
  },
  {
    logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
    name: 'Shopora',
    role: 'Frontend Developer',
    link: 'https://myblog.com',
    period: '2023',
    description: 'A modern blog platform with markdown support, user authentication, and responsive design.'
  },
  {
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
    name: 'Valv-AI',
    role: 'UI/UX Designer',
    link: 'https://myecommerce.com',
    period: '2022',
    description: 'Designed and prototyped an e-commerce app with a focus on user experience and accessibility.'
  },
  {
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
    name: 'Rate-my-Campus',
    role: 'UI/UX Designer',
    link: 'https://myecommerce.com',
    period: '2022',
    description: 'Designed and prototyped an e-commerce app with a focus on user experience and accessibility.'
  },
  {
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
    name: 'resumai',
    role: 'UI/UX Designer',
    link: 'https://myecommerce.com',
    period: '2022',
    description: 'Designed and prototyped an e-commerce app with a focus on user experience and accessibility.'
  },
  {
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
    name: 'Axle',
    role: 'UI/UX Designer',
    link: 'https://myecommerce.com',
    period: '2022',
    description: 'Designed and prototyped an e-commerce app with a focus on user experience and accessibility.'
  }
];

const Projects = () => (
  <section className="projects-section" id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map((proj, idx) => (
        <div className="projects-card" key={idx}>
          <div className="proj-logo-wrap">
            <img src={proj.logo} alt={proj.name + ' logo'} className="proj-logo" />
          </div>
          <div className="proj-content">
            <div className="proj-header">
              <span className="proj-name">{proj.name}</span>
              <a href={proj.link} className="proj-role" target="_blank" rel="noopener noreferrer">{proj.role}</a>
            </div>
            <span className="proj-period">{proj.period}</span>
            <p className="proj-description">{proj.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 