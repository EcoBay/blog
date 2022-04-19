import { forwardRef } from "react";
import { ReactComponent as Profile } from "../images/profile.svg";
import "./About.css";

const About = forwardRef(function (_, ref) {
  return (
    <div className="container" ref={ref}>
      <div className="profile">
        <div className="profileBorder">
          <Profile />
        </div>
      </div>
      <div className="description">
        <p>
          <strong>
            <span>H</span>ey! I'm Jerico, my friends call me Eco &mdash; a
            programmer and a data scientist... soon... hopefully
          </strong>
        </p>
        <p>
          I'm the type of person that strives for efficiency, some people call
          it being lazy but the wise Bill Gates once said, "I choose lazy person
          to do a hard job. Because a lazy person will find an easy way to do it
        </p>
        <p>
          I am currently an undergrad student taking BS Computer Science at
          Cagayan State University
        </p>
      </div>
    </div>
  );
});

export default About;
