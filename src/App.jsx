
import './App.css'

const projects = [
  {
    number: '01',
    title: 'AI Tutor Platform',
    category: 'AI • Web Development',
    description:
      'An AI-powered learning platform designed to support students with personalized learning, study goals and AI assistance.',
    tech: ['React', 'Java', 'Spring Boot', 'Gemini API'],
  },
  {
    number: '02',
    title: 'Smart Track-Following Trolley',
    category: 'Embedded Systems',
    description:
      'An automated trolley that follows a predefined path using IR sensors and motor control circuitry.',
    tech: ['Arduino', 'IR Sensors', 'L298N', 'Embedded C'],
  },
  {
    number: '03',
    title: 'Honey Bee Game',
    category: 'Python Development',
    description:
      'A turn-based hexagonal grid game where players collect honey using game logic and interactive gameplay.',
    tech: ['Python', 'Pygame'],
  },
  {
    number: '04',
    title: 'Gas Leakage Detector',
    category: 'IoT • Hardware',
    description:
      'An Arduino-based gas leakage detection system that alerts users through an LED and sound alarm.',
    tech: ['Arduino', 'Sensors', 'Electronics'],
  },
  {
    number: '05',
    title: 'Parallel Prefix Adder',
    category: 'VLSI • Digital Design',
    description:
      'An academic study of parallel prefix adders and their performance for datapath VLSI design.',
    tech: ['Digital Design', 'VLSI', 'Verilog'],
  },
  {
    number: '06',
    title: 'Remote Sensing & GIS',
    category: 'Python • Geospatial Analysis',
    description:
      'Worked on vegetation condition and aerosol optical depth mapping using satellite datasets and GIS tools.',
    tech: ['Python', 'Google Earth Engine', 'QGIS', 'MODIS'],
  },
]

const skillGroups = [
  {
    title: 'VLSI & Digital Design',
    skills: ['Verilog', 'RTL Verification', 'Digital Electronics', 'SystemVerilog'],
  },
  {
    title: 'Programming',
    skills: ['C', 'Python', 'Java', 'JavaScript'],
  },
  {
    title: 'Embedded Systems',
    skills: ['Arduino', '8051', '8086', 'Microcontrollers'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['VS Code', 'Git', 'React', 'MATLAB', 'QGIS'],
  },
]

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          SP<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#activities">Activities</a>
          <a href="#contact" className="nav-contact">
            Contact ↗
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">

          <p className="welcome">
            <span className="status-dot"></span>
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Sofiya Parvez</span>
          </h1>

          <h2>
            Electronics & Communication Engineering Student
          </h2>

          <p className="hero-description">
            Exploring the world of VLSI, RTL Verification,
            Embedded Systems and emerging technologies.
            Passionate about learning, building and creating
            meaningful solutions through technology.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work ↗
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">

            <a
              href="https://www.linkedin.com/in/sofiya-parvez-mohammad-036a25324"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="linkedin-icon">in</span>
              LinkedIn ↗
            </a>

            <span className="social-divider"></span>

            <a
              href="https://github.com/Sofiya1308"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg
                className="github-icon"
                viewBox="0 0 24 24"
                width="27"
                height="27"
                fill="currentColor"
                aria-label="GitHub"
                role="img"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.43.11-2.97 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.69.11 2.97.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              GitHub ↗
            </a>

          </div>

        </div>

        {/* Profile Image */}
        <div className="hero-visual">
          <div className="photo-glow"></div>

          <div className="profile-circle">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpeg`}
              alt="Sofiya Parvez"
              className="profile-photo"
            />
          </div>

          <div className="floating-card card-one">
            <span>💻</span> VLSI Enthusiast
          </div>

          <div className="floating-card card-two">
            <span>⚡</span> ECE Student
          </div>

          <p className="profile-caption">
            ECE | VLSI | Technology
          </p>
        </div>
      </section>

      {/* About */}
      <section className="section about-section" id="about">

        <p className="section-label">GET TO KNOW ME</p>

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-card">
          <div className="about-symbol">✦</div>

          <div>
            <h3>Curious mind. Creative builder.</h3>

            <p>
              I am a third-year B.Tech student in Electronics and
              Communication Engineering at BVRIT Hyderabad College
              of Engineering for Women, graduating in 2028.
              I am interested in VLSI design, RTL verification,
              digital systems and embedded technologies.
            </p>

            <p>
              I enjoy exploring new technologies, working on
              practical projects and continuously improving my
              technical skills. My goal is to build a strong
              foundation in semiconductor and digital design.
            </p>
          </div>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>8.98</h3>
            <p>Current CGPA</p>
          </div>

          <div className="stat-card">
            <h3>2028</h3>
            <p>Graduation Year</p>
          </div>

          <div className="stat-card">
            <h3>ECE</h3>
            <p>My Department</p>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">

        <p className="section-label">WHAT I WORK WITH</p>

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section projects-section" id="projects">

        <p className="section-label">SOME THINGS I'VE BUILT</p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-arrow">↗</span>
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="skill-tags">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* Experience and Education */}
      <section className="section" id="experience">

        <p className="section-label">MY JOURNEY SO FAR</p>

        <h2 className="section-title">
          Experience & <span>Education</span>
        </h2>

        <div className="timeline">

          <div className="timeline-item">
            <span className="timeline-dot"></span>

            <p className="timeline-date">
              May – July 2026
            </p>

            <h3>Remote Sensing & GIS Intern</h3>

            <h4>India Space Academy</h4>

            <p>
              Worked on satellite-based remote sensing and GIS
              projects involving vegetation condition analysis,
              drought mapping and aerosol optical depth.
            </p>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>

            <p className="timeline-date">2026</p>

            <h3>Digital AI Annotation Intern</h3>

            <h4>ST Student Tribe</h4>

            <p>
              Participated in an AI annotation internship
              involving digital data annotation activities.
            </p>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>

            <p className="timeline-date">
              2026 – 2028
            </p>

            <h3>
              B.Tech – Electronics & Communication Engineering
            </h3>

            <h4>
              BVRIT Hyderabad College of Engineering for Women
            </h4>

            <p>
              Third-year undergraduate student, building
              knowledge in electronics, communication,
              digital systems and VLSI technologies.
            </p>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>

            <p className="timeline-date">2024</p>

            <h3>Intermediate – 93.7%</h3>

            <h4>Government Junior College</h4>

            <p>
              Board of Intermediate Education, Andhra Pradesh.
            </p>
          </div>

        </div>
      </section>

      {/* Patent and Achievements */}
      <section className="section" id="achievements">

        <p className="section-label">
          INNOVATION & RECOGNITION
        </p>

        <h2 className="section-title">
          Patent & <span>Achievements</span>
        </h2>

        <div className="achievement-card">

          <div className="achievement-icon">🏆</div>

          <div>
            <p className="project-category">PATENT</p>

            <h3>Autonomous Following Trolley</h3>

            <p>
              Patent achievement associated with an autonomous
              trolley project focused on following a user or
              predefined path using electronic sensing and control.
            </p>

            <span className="achievement-tag">
              Innovation • Embedded Systems
            </span>
          </div>

        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="section" id="activities">

        <p className="section-label">
          BEYOND THE CLASSROOM
        </p>

        <h2 className="section-title">
          Extracurricular <span>Activities</span>
        </h2>

        <div className="activities-grid">

          <div className="activity-card">
            <span className="activity-icon">🚗</span>

            <h3>NXP Cup India Challenge 2026</h3>

            <p>
              Participated in a technical competition involving
              autonomous vehicle concepts and robotics.
            </p>
          </div>

          <div className="activity-card">
            <span className="activity-icon">💧</span>

            <h3>AtomQuest 2026</h3>

            <p>
              Shortlisted for Round 2 with an innovative
              smart water purifier ecosystem concept.
            </p>
          </div>

          <div className="activity-card">
            <span className="activity-icon">🎓</span>

            <h3>IETE Student Membership</h3>

            <p>
              Member of the Institution of Electronics and
              Telecommunication Engineers.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">

        <p className="section-label">LET'S CONNECT</p>

        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <p className="contact-description">
          Interested in working together, discussing technology
          or sharing opportunities? Feel free to contact me.
        </p>

        <a
          href="mailto:sofiyaparvezmohammad@gmail.com"
          className="primary-btn"
        >
          Say Hello ✉
        </a>

        <div className="contact-links">

          <a href="mailto:sofiyaparvezmohammad@gmail.com">
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/sofiya-parvez-mohammad-036a25324"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/Sofiya1308"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">

        <a href="#home" className="logo">
          SP<span>.</span>
        </a>

        <p>
          Designed & built by Sofiya Parvez © 2026
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  )
}

export default App
