import java from "../Assets/java.png";
import git from "../Assets/git.png";
import javaweb from "../Assets/Java EE Web Application Fundamentals.png";
import javapersistence from "../Assets/java persistence.png";
import maven from "../Assets/maven.png";
import spring from "../Assets/Spring.png";
import selenium from "../Assets/selenium.png";
import devops from "../Assets/Devops.png";
import webdev from "../Assets/web development.png";
import angular from "../Assets/Angular.png";
export default function Curriculum() {
  return (
    <div className="curriculum container">
      <div className="curriculum-heading">
        The Curriculum covers the following topics
      </div>
      <div className="curriculum-cards">
        <div className="card">
          <div>
            <img src={java}></img>
          </div>
          <div>Java Programming, Debugging and Unit Testing</div>
        </div>
        <div className="card">
          <div>
            <img src={git}></img>
          </div>
          <div>Version control using GIT</div>
        </div>
        <div className="card">
          <div>
            <img src={javaweb}></img>
          </div>
          <div>Java EE Web Application Fundamentals</div>
        </div>
        <div className="card">
          <div>
            <img src={javapersistence}></img>
          </div>
          <div>Java Persistence using JPA and Hibernate</div>
        </div>
        <div className="card">
          <div>
            <img src={maven}></img>
          </div>
          <div>Apache Maven</div>
        </div>
        <div className="card">
          <div>
            <img src={spring}></img>
          </div>
          <div>Spring Core, Spring MVC, Spring Boot REST API</div>
        </div>
        <div className="card">
          <div>
            <img src={selenium}></img>
          </div>
          <div>Functional/BDD Testing using Selenium</div>
        </div>
        <div className="card">
          <div>
            <img src={devops}></img>
          </div>
          <div>Agile, Scrum, and DevOps Fundamentals</div>
        </div>
        <div className="card">
          <div>
            <img src={webdev}></img>
          </div>
          <div>Web Design & Development</div>
        </div>
        <div className="card">
          <div>
            <img src={angular}></img>
          </div>
          <div>Front-end Development using Angular</div>
        </div>
      </div>
      <div className="curriculum-button">
        <a href="#content">
          <button>APPLY NOW</button>
        </a>
      </div>
      <div className="curriculum-click"><b>Click Here</b> to Download Full Curriculum in PDF</div>
    </div>
  );
}
