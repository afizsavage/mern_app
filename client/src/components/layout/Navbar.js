import React from "react";
import "../../stylesheets/tailwind.generated.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar flex fixed container py-2 justify-center mx-auto">
        <a href="/" className="font-mono font-nomal text-4xl pr-2">
          <i className="inline-block">
            <svg
              className="w-10 h-10  mr-2 pt-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="heroicon-ui"
                d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"
              />
            </svg>
          </i>
          MERN
        </a>
      </nav>
    );
  }
}

export default Navbar;
