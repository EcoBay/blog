import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <div className="container">
      <a href="#">
        <h1>
          <span>J</span>
          <span>B</span>
        </h1>
      </a>
      <ul>
        <Handlers
          link="https://web.facebook.com/Eco.Bayod/"
          icon={faFacebook}
        />
        <Handlers
          link="https://www.linkedin.com/in/jericobayod/"
          icon={faLinkedin}
        />
        <Handlers link="https://github.com/EcoBay" icon={faGithub} />
      </ul>
    </div>
  );
}

function Handlers(props) {
  return (
    <li>
      <a href={props.link}>
        <FontAwesomeIcon icon={props.icon} />
      </a>
    </li>
  );
}

export default Footer;
