import { useRef, useState, useEffect } from 'react';
import './Experience.css';

interface Experience {
  logo: string;
  company: string;
  role: string;
  link?: string;
  period: string;
  description: string;
}

interface ExperienceCardProps {
  exp: Experience;
  side: string;
}

const experiences = [
  {
    logo: 'https://th.bing.com/th/id/OIP.mEfXlw-zTU4xEjo2JnfyVQAAAA?w=232&h=176&c=7&r=0&o=7&pid=1.7&rm=3',
    company: 'PSpilla Research Group, University of Delaware',
    role: 'Software Engineer & Web Designer ',
    link: 'https://www.pinterest.com/',
    period: 'March 2025 – Present',
    description: 'Conducted user research to inform and engineer a sleek, mobile-first front end with HTML, CSS, JavaScript, and WordPress—creating an accessible, interactive platform that showcases research projects and attracts top student talent to the startup\'s research group.'
  },
  {
    logo: 'https://th.bing.com/th/id/OIP.yKW0vY2oXU2fll6NLaYvDgHaHa?w=156&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    company: 'Deloitte Consulting',
    role: 'Software Engineer, Case Study Competition ',
    period: 'June 2022 – Present',
    description: 'Designed a mobile platform leveraging behavioral analytics and gamification to address a 30% decline in sports attendance, Delivered a high-fidelity prototype and business forecast projecting a 22% increase in attendance and $1.2M in potential revenue'
  },
  {
    logo: 'https://www.udel.edu/content/dam/udelImages/global/hero-images/international-student-advisory-committee-hero.png/_jcr_content/renditions/original',
    company: 'Center for Global Programs and Services',
    role: 'Student Representative, International Student Advisory Committee (ISAC) ',
    period: 'Jan 2022 – May 2022',
    description: 'Selected to represent/advocate for 2000+ international student body; work includes advising on student experience and issues, Partner with CGPS leadership to influence allocation and support strategies across academic and residential touchpoints.'
  },
  {
    logo: 'https://th.bing.com/th?q=Udel+Logo+Clip+Art+No+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247',
    company: 'Resident Life & Housing, University of Delaware',
    role: 'Resident Assistant',
    period: 'March 2024 – Present',
    description: 'Supervise and support a residence hall community of 500+ students, fostering an inclusive, safe, and engaged living environment. Collaborate with a team of Resident Assistants to ensure safety and promote a sense of community through events and program  Organized and led five+ events with 25+ attendees, increasing average turnout by 30% '
  }
];

const ExperienceCard = ({ exp, side }: ExperienceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (ref.current) {
            obs.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      obs.observe(ref.current);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`experience-card ${side} ${visible ? 'visible' : ''}`}
    >
      <div className="exp-marker" />
      {exp.logo && (
        <div className="exp-logo-wrap">
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            className="exp-logo"
          />
        </div>
      )}
      <div className="exp-content">
        <div className="exp-header">
          <span className="exp-company">{exp.company}</span>
          {exp.link ? (
            <a
              href={exp.link}
              className="exp-role"
              target="_blank"
              rel="noopener noreferrer"
            >
              {exp.role}
            </a>
          ) : (
            <span className="exp-role">{exp.role}</span>
          )}
        </div>
        <span className="exp-period">{exp.period}</span>
        <p className="exp-description">{exp.description}</p>
      </div>
    </div>
  );
};

const Experience = () => (
  <section className="experience-section" id="experience">
    <h2>Experience</h2>
    <div className="experience-list">
      {experiences.map((exp, i) => (
        <ExperienceCard
          key={i}
          exp={exp}
          side={i % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  </section>
);

export default Experience;
