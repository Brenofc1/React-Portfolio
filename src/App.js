import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faGit } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ResumePDF from './Resume.pdf';
import axios from 'axios';

function App() {
  const [activeSection, setActiveSection] = useState('About Me');
  const [contactForm, setContactForm] = useState({ name: '', email: '', mobile: '', message: '' });

  const handleNavigationClick = (section) => {
    setActiveSection(section);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });
  
      const data = await response.json();
      console.log(data); // You can handle the response data as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'About Me':
        return (
          <section>
            <h2>About Me</h2>
            <p>
              Hi, I'm Breno Campos, a passionate web developer with expertise in frontend development. I have experience working
              with HTML, CSS, and JavaScript to build modern and responsive websites. I enjoy turning complex problems into
              simple, beautiful, and intuitive designs.
            </p>
            <p>
              In my free time, I love to explore the latest web technologies and contribute to open source projects. I believe in
              continuous learning and keeping up with industry trends. My goal is to create engaging and user-friendly web
              experiences that leave a lasting impression.
            </p>
          </section>
        );

      case 'Portfolio':
        return (
          <section>
            <h2>Portfolio</h2>
            <div className="project-container">
              <div className="project">
                <div className="project-image">
                  <img src={require('./img/wellnessApp.jpg').default} className="img-fluid" alt="" />
                </div>
                <div className="project-details">
                  <h3>WellnessApp</h3>
                  <p>Description of Project 1</p>
                  <div>
                    <a href="https://brenofc1.github.io/project-1-wellness-app/" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                    <a href="https://github.com/Brenofc1/project-1-wellness-app" target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="project-image">
                  <img src={require('./img/patient-management.jpg').default} className="img-fluid" alt="" />
                </div>
                <div className="project-details">
                  <h3>Patient Management</h3>
                  <p>Description of Project 2</p>
                  <div>
                    <a href="https://brenofc1.github.io/project-1-wellness-app/" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                    <a href="https://github.com/Brenofc1/project-1-wellness-app" target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="project-image" style={{ backgroundImage: `url(path_to_image_2)` }}></div>
                <div className="project-details">
                  <h3>Tech Solutions</h3>
                  <p>Description of Project 3</p>
                  <div>
                    <a href="https://brenofc1.github.io/Tech-Solutions/" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                    <a href="https://github.com/Brenofc1/Tech-Solutions" target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="project-image" style={{ backgroundImage: `url(path_to_image_3)` }}></div>
                <div className="project-details">
                  <h3>Project - EcommerceApp</h3>
                  <p>Description of Project 3</p>
                  <div>
                    <a href="https://brenofc1.github.io/project-3-ecommerce-app/" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                    <a href="https://github.com/Brenofc1/project-3-ecommerce-app" target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case 'Contact':
        return (
          <section>
            <h2>Contact</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={contactForm.mobile}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleFormChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </section>
        );

      case 'Resume':
        return (
          <section>
            <h2>Resume</h2>
            <p>
              <a href={ResumePDF} target="_blank" rel="noopener noreferrer">Download Resume</a>
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faHtml5} /> HTML5
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3} /> CSS3
              </li>
              <li>
                <FontAwesomeIcon icon={faJs} /> JavaScript
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} /> React
              </li>
              <li>
                <FontAwesomeIcon icon={faNodeJs} /> Node.js
              </li>
              <li>
                <FontAwesomeIcon icon={faGit} /> Git
              </li>
            </ul>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Breno Campos Portfolio</h1>
        <nav>
          <ul>
            <li className={activeSection === 'About Me' ? 'active' : ''}>
              <button onClick={() => handleNavigationClick('About Me')}>About Me</button>
            </li>
            <li className={activeSection === 'Portfolio' ? 'active' : ''}>
              <button onClick={() => handleNavigationClick('Portfolio')}>Portfolio</button>
            </li>
            <li className={activeSection === 'Contact' ? 'active' : ''}>
              <button onClick={() => handleNavigationClick('Contact')}>Contact</button>
            </li>
            <li className={activeSection === 'Resume' ? 'active' : ''}>
              <button onClick={() => handleNavigationClick('Resume')}>Resume</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>{renderSection()}</main>

      <footer>
        <p>Connect with me:</p>
        <a href="https://github.com/brenofc1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://linkedin.com/in/breno-ferreira-campos/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </footer>
    </div>
  );
}

export default App;
