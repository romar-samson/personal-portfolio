function App() {
  return (
    <>
      <>
      <header className="navigation fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand font-tertiary h3" href="index.html">
            
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation"
        aria-controls="navigation"
        ria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse text-center" id="navigation">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              about
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  {/* hero area */}
  <section className="hero-area bg-primary" id="parallax">
    <div className="container">
      <div className="row">
        <div className="col-lg-11 mx-auto">
          <h1 className="text-white font-tertiary">
            Hi! I’m <br /> Romar Samson <br /> UI/UX Designer
          </h1>
          <div className="col-lg-3 col-10 mx-left">
            <button className="btn btn-primary w-100">Download CV</button>
          </div>
        </div>
      </div>
    </div>
    <div className="layer-bg w-100">
      <img
        className="img-fluid w-100"
        src="images/illustrations/leaf-bg.png"
        alt="bg-shape"
      />
    </div>
    <div className="layer" id="l2">
      <img src="images/illustrations/dots-cyan.png" alt="bg-shape" />
    </div>
    <div className="layer" id="l3">
      <img src="images/illustrations/leaf-orange.png" alt="bg-shape" />
    </div>
    <div className="layer" id="l4">
      <img src="images/illustrations/dots-orange.png" alt="bg-shape" />
    </div>
    <div className="layer" id="l5">
      <img src="images/illustrations/leaf-yellow.png" alt="bg-shape" />
    </div>
    <div className="layer" id="l6">
      <img src="images/illustrations/leaf-cyan.png" alt="bg-shape" />
    </div>
    <div className="layer" id="l7">
      <img src="images/illustrations/dots-group-orange.png" alt="bg-shape" />
    </div>
    <div className="layer" id="l8">
      <img src="images/illustrations/leaf-pink-round.png" alt="bg-shape" />
    </div>
    <div className="layer" id="l9">
      <img src="images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
    </div>
    {/* social icon */}
    <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1">
      <li className="mb-3">
        <a className="text-white" href="https://www.facebook.com/uqlzsam">
          <i className="ti-facebook" />
        </a>
      </li>
      <li className="mb-3">
        <a className="text-white" href="https://www.instagram.com/uqlzsam/">
          <i className="ti-instagram" />
        </a>
      </li>
      <li className="mb-3">
        <a className="text-white" href="https://dribbble.com/romar-samson">
          <i className="ti-dribbble" />
        </a>
      </li>
      <li className="mb-3">
        <a className="text-white" href="https://github.com/romar-samson">
          <i className="ti-github"/>
        </a>
      </li>
    </ul>
    {/* /social icon */}
  </section>
  {/* /hero area */}
  {/* about */}
  <section className="section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 mx-auto text-center">
          <h1 className="section-title mb-3">About</h1>
          <p className="font-poppins paragraph-lg text-grey">
            I’m a UI/UX Designer from the Philippines, passionate about technology, 
            problem-solving, sharing a little bit knowledge within the community and 
            continuous learning. Here you'll find some of the projects I've been 
            working on, practicing, and contributing to. I work on projects including
            building modern web applications, and mobile apps. <br />
            <br />Outside of work, I enjoy staying active through my favorite hobbies — playing table tennis, volleyball, and cycling. These activities help me stay fit, build teamwork, and keep a balanced lifestyle while having fun.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* /about */}
  {/* skills */}
  <section className="section" id="skills">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-title">Tech Stack</h2>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
          <div className="card shadow text-center">
            <div className="card-footer bg-white">
              <h4 className="card-title">Frontend</h4>
              <p>Html</p>
              <p>Css</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Taildwind CSS</p>
              <p>Vite</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
          <div className="card shadow text-center">
            <div className="card-footer bg-white">
              <h4 className="card-title">Backend</h4>
              <p>Node.JS</p>
              <p>Python</p>
              <p>Csharp</p>
              <p>PHP</p>
              <p>Laravel</p>
              <p>MySQL</p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
          <div className="card shadow text-center">
            <div className="card-footer bg-white">
              <h4 className="card-title">Tools</h4>
              <p>Github</p>
              <p>Git</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
          <div className="card shadow text-center">
            <div className="card-footer bg-white">
              <h4 className="card-title">Design Tools</h4>
              <p>Figma</p>
              <p>Framer</p>
              <p>Webflow</p>
              <p>Canva</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /skills */}
  {/* experience */}
  <section className="section" id="education">
    <div className="container">
      <div className="row justify-content-around">
        <div className="col-lg-12 text-center">
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="col-lg-3 col-md-4 text-center">
          <img src="images/experience/icon-1.png" alt="icon" />
          <p className="mb-0">May 17, 2024</p>
          <h4>Peak Performance: the 7 essentials for sales supremacy</h4>
          <h6 className="text-light">Udemy</h6>
        </div>
        <div className="col-lg-3 col-md-4 text-center">
          <img src="images/experience/icon-2.png" alt="icon" />
          <p className="mb-0">May 16, 2024</p>
          <h4>Create and Design Digital Products using canva</h4>
          <h6 className="text-light">Coursera</h6>
        </div>
        <div className="col-lg-3 col-md-4 text-center">
          <img src="images/experience/icon-3.png" alt="icon" />
          <p className="mb-0">October - Present</p>
          <h4>UI/UX Roadmap</h4>
          <h6 className="text-light">UI Rishi</h6>
        </div>
      </div>
    </div>
  </section>
  {/* ./experience */}
  {/* education */}
  <section className="section position-relative">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-title">Education</h2>
        </div>
        <div className="col-lg-6 col-md-6 mb-80">
          <div className="d-flex">
            <div className="mr-lg-5 mr-3">
              <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
            </div>
            <div>
              <p className="text-dark mb-1">2023</p>
              <h4>Hello World!👋</h4>
              <p className="mb-0 text-light">
                La Verdad Christian College, INC
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 mb-80">
          <div className="d-flex">
            <div className="mr-lg-5 mr-3">
              <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
            </div>
            <div>
              <p className="text-dark mb-1">2025 - 2026</p>
              <h4>Bachelor of Science in Information system
              </h4>
              <p className="mb-0 text-light">La Verdad Christian College, INC</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 mb-80">
          <div className="d-flex">
            <div className="mr-lg-5 mr-3">
              <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
            </div>
            <div>
              <p className="text-dark mb-1">2023 - 2024</p>
              <h4>Associate in Computer Technology</h4>
              <p className="mb-0 text-light">La Verdad Christian College, INC</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 mb-80">
          <div className="d-flex">
            <div className="mr-lg-5 mr-3">
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* bg image */}
    <img
      className="img-fluid edu-bg-image w-100"
      src="images/backgrounds/education-bg.png"
      alt="bg-image"
    />
  </section>
  {/* /education */}
  {/* portfolio */}
<section className="section" id="projects">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h2 className="section-title">Recent Projects</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      {/* Project 1 */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="position-relative rounded hover-wrapper">
          <img
            src="images/blog/FigmaPortfolio.png"
            alt="portfolio-image"
            className="img-fluid rounded w-100"
          />
          <div className="hover-overlay">
            <div className="hover-content">
              <a
                className="btn btn-light btn-sm"
                href="https://www.figma.com/design/bWP6URBxaNLhnD4t2XJhNB/Figma?node-id=0-1&t=A7aTYWUDphhw5el0-1"
              >
                view project
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="position-relative rounded hover-wrapper">
          <img
            src="images/blog/LVCIS.png"
            alt="portfolio-image"
            className="img-fluid rounded w-100"
          />
          <div className="hover-overlay">
            <div className="hover-content">
              <a
                className="btn btn-light btn-sm"
                href="https://www.figma.com/design/bWP6URBxaNLhnD4t2XJhNB/Figma?node-id=0-1&t=A7aTYWUDphhw5el0-1v"
              >
                view project
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="position-relative rounded hover-wrapper">
          <img
            src="images/blog/2ndyearProject.png"
            alt="portfolio-image"
            className="img-fluid rounded w-100"
          />
          <div className="hover-overlay">
            <div className="hover-content">
              <a
                className="btn btn-light btn-sm"
                href="https://www.figma.com/design/bWP6URBxaNLhnD4t2XJhNB/Figma?node-id=0-1&t=A7aTYWUDphhw5el0-1"
              >
                view project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* /Recent Projects */}

  {/* contact */}
  <section
    className="section section-on-footer"
    data-background="images/backgrounds/bg-dots.png"
    id="contact"
  >
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-title">Contact Info</h2>
        </div>
        <div className="col-lg-8 mx-auto">
          <div className="bg-white rounded text-center p-5 shadow-down">
            <h4 className="mb-80">Contact Form</h4>
            <form action="#" className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="form-control px-0 mb-4"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="form-control px-0 mb-4"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  className="form-control px-0 mb-4"
                  placeholder="Type Message Here"
                  defaultValue={""}
                />
              </div>
              <div className="col-lg-6 col-10 mx-auto">
                <button className="btn btn-primary w-100">send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /contact */}
  {/* footer */}
  <footer className="bg-dark footer-section">
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-light">Email</h5>
            <p className="text-white paragraph-lg font-secondary">
              romarsamson11@gmail.com
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-light">Phone</h5>
            <p className="text-white paragraph-lg font-secondary">
              0927 521 5374
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-light">Address</h5>
            <p className="text-white paragraph-lg font-secondary">
              Tarlac City, Philippines
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-top text-center border-dark py-5">
      <p className="mb-0 text-light">
        © 2025 Romar Samson.All rights reserved.
      </p>
    </div>
  </footer>
  {/* footer */}
</>

    </>
  )
}

export default App
