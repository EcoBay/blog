import { forwardRef } from "react";

const Contact = forwardRef(function () {
  return (
    <div className="container">
      <em>
        I recreated the website but the design of the website is inspired by the
        portfolio of Jacob Leech at{" "}
        <a href="https://jacobleech.com">jacobleech.com</a>
      </em>
    </div>
  );
});

export default Contact;
