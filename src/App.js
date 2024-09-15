import React from 'react';
import './App.css';

function App() {
  return (
    <div>

      <nav className="nav navbar">
        <div>
          <a href='#about-us'>JOLO</a>
          </div>
        <div>
          <a href="#about-us">About Us</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact-form">Contact</a>
        </div>
      </nav>

      <section id="about-us" className="about-us">
        <h1>About Us</h1>
        <div className="container-fluid about-content">
          <div className="row">
            <div className="col-lg-6">
              <img src="../img/about.jpg" alt="About Us" />
            </div>
            <div className="col-lg-6">
              <p>
              Hello, I'm JOLO, a tech enthusiast with a strong background in software development, 
              project management, and team leadership. I thrive on tackling complex challenges and turning 
              them into innovative solutions that make a difference. With a passion for pushing the boundaries
               of technology, I am constantly seeking new ways to create impactful projects that deliver value. 
              </p>
              <ul>
              <li>Proficient in software development</li>
              <li>Experienced in project management</li>
              <li>Skilled in leading cross-functional teams</li>
              <li>Passionate about pushing the boundaries of technology</li>
              <li>Dedicated to creating impactful and innovative solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <h2>Portfolio</h2>
        <div className="container-fluid">
          <div id="us" className="row">
            <div className="col">
                <img src="../img/cello.jpg" alt="Portfolio 1" />
                <p>PROJECT HARMONY</p>
                <p>This project aims to develop a software platform that can aggregate music 
                  from various sources and use advanced recommendation algorithms to create personalized 
                  playlists for users. The focus is on creating a seamless and harmonious music experience, 
                  where users can discover new tracks that resonate with their unique tastes.</p>
            </div>
            <div className="col">
                <img src="../img/nujabes.jpg" alt="Portfolio 2" />
                <p>PROJECT SERENITY</p>
                <p>This project seeks to develop a meditation app that combines soothing visuals with immersive 
                  audio experiences. By leveraging cutting-edge audio technologies and visual design principles,
                   the app aims to provide users with a tranquil and serene environment for relaxation and mindfulness.</p>
            </div>
            <div className="col">
                <img src="../img/samurai.jpg" alt="Portfolio 3" />
                <p>PROJECT ZENITH</p>
                <p>This project focuses on creating a revolutionary music production tool that empowers artists to craft 
                  their sound with unparalleled creativity and precision. By integrating innovative features and intuitive 
                  interfaces, the tool aims to elevate the art of music production to new heights, enabling artists to reach
                   the pinnacle of their creative expression.</p>
            </div>
          </div>
        </div>
      </section>

      <div id= "contact-form" className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Message" rows="5"></textarea>
          </div>
          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
