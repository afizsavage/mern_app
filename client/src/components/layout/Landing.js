import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/tailwind.generated.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="container items-end justify-center flex h-screen-1/2">
        <div className=" flex flex-col">
          <div className="my-4 px-2 text-center">
            <h4 className="text-4xl">
              <b
                className="font-bold
              "
              >
                Build
              </b>{" "}
              a login/auth app with the <span className="font-mono">MERN</span>{" "}
              stack from scratch
            </h4>
            <p className="text-xl p-2 text-grey-100">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
          </div>
          <div className="flex flex-row justify-center m-2">
            <div className="mr-4">
              <Link
                to="/register"
                className="uppercase tracking-wide w-40 rounded ripple-bg-blue-700 text-white py-2 px-4 inline-flex justify-center"
              >
                Register
              </Link>
            </div>
            <div className="ml-4">
              <Link
                to="login"
                className=" uppercase tracking-wide w-40 rounded ripple-bg-teal-700 text-white py-2 px-4 inline-flex justify-center "
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
