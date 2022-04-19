import { useState } from "react";
import { SplitText } from "@cyriacbr/react-split-text";
import "./NavBar.css";

function NavBar(props) {
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => setActive(!isActive);
  const navClass = isActive ? "container isActive" : "container";

  const letterSpan = ({ children }) => <span>{children}</span>;
  const onClick = (i) => () => {
    const section = props.linkRefs.current[i];
    console.log(section);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={navClass}>
      <a href=".">
        <h1>
          <SplitText LetterWrapper={letterSpan}>Jerico Bayod</SplitText>
        </h1>
      </a>
      <ul>
        <li>
          <button onClick={onClick(0)}>About</button>
        </li>
        <li>
          <button onClick={onClick(1)}>Blogs</button>
        </li>
        <li>
          <button>Contact</button>
        </li>
      </ul>
      <button id="menu" onClick={toggleMenu}></button>
    </nav>
  );
}

export default NavBar;
