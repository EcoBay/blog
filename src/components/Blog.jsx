import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXmark,
  faDisplay,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";

import "./Blog.css";
import { ReactComponent as DWM } from "../images/dwm.svg";

const Blog = forwardRef(function (_, ref) {
  return (
    <section className="container">
      <h2 ref={ref}>Blogs</h2>
      <div className="introduction">
        <p>
          <strong>
            <span>A</span>s a programmer I like automating tasks. If i find a
            job boring and repetitive that would takes me about an hour... then
            I would create a program to do it for me for the whole next month.
            Some would say its pointless but for me at least is not boring.
          </strong>
        </p>
      </div>
      <div className="column">
        <div className="projects">
          <h3>Projects</h3>
          <p>
            I have been programming for about 7 years now and is quite confident
            with my skill, if I say so my self. I like collaborating with a
            bright team but I also enjoy with less familiar one.
          </p>
          <p>Listed below are some of my projects.</p>
          <div className="showcase">
            <Project
              img={<DWM />}
              title="DWM"
              link="https://github.com/EcoBay/dwm"
            >
              <p>
                A program that move and resize my windows so that I they don't
                overlap.
              </p>
            </Project>
            <Project
              img={<FontAwesomeIcon icon={faDisplay} />}
              title="Present"
              link="https://github.com/EcoBay/dwm"
            >
              <p>A program that create animated presentation from my notes</p>
            </Project>
            <Project
              img={<FontAwesomeIcon icon={faCameraRetro} />}
              title="ESP AI Webcam"
              link="https://github.com/EcoBay/esp-ai-webcam"
            >
              <p>
                A computer vision project for easy testing of other projects.
              </p>
            </Project>
          </div>
        </div>
        <div className="experiences">
          <h3>Experiences</h3>
          <p>
            I have joined various hackathon, most notable is Shell NXplorer
            which is an international contest to build a project solving food,
            energy, and water problems which our team won Gold award. One funny
            thing about that hackathon is that our project failed right before
            the judging proper and we fixed it using a condom bought in the
            nearest 7/11.
          </p>
          <p>
            For internship I have taken a three weeks internship at Center for
            Automation laboratory of DLSU-AdRIC. Choosing this as my internship
            is the single most important choice I have made my whole High School
            Career. I have learned some useful CS skill such as algorithmic
            thinking, robotics, computer vision, and more.
          </p>
        </div>
      </div>
    </section>
  );
});

function Project(props) {
  return (
    <div className="project">
      {props.img || <FontAwesomeIcon icon={faSquareXmark} />}
      <div className="content">
        {props.title && (
          <a href={props.link || "#"}>
            <h4>{props.title}</h4>
          </a>
        )}
        {props.children}
      </div>
    </div>
  );
}

export default Blog;
