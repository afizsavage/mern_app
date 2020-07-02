import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import "../../stylesheets/tailwind.generated.css";
import "../../stylesheets/mern.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container items-center justify-center flex h-screen-3/4">
        <div className="w-auto flex justify-center">
          <div className="align-center">
            <div className="text-sm">
              <Link
                to="/"
                className="uppercase text-gray-800 py-2 inline-flex items-center"
              >
                <svg
                  className="fill-current w-4 h-4 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
                  />
                </svg>
                <span>back to home</span>
              </Link>
            </div>
            <div className="my-4">
              <h4 className="mb-1 text-3xl">
                <b className="">Register</b> below
              </h4>
              <p className="text-sm font-thin mt-1">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Log in
                </Link>
              </p>
            </div>
            <div className="w-96">
              <form
                className="w-full mt-10"
                noValidate
                onSubmit={this.onSubmit}
              >
                <div className="input-container w-full">
                  <input
                    required
                    className="text-xl focus:border-teal-700 border-b-2 border-gray-400 appearance-none bg-transparent w-full text-gray-700 leading-tight pt-2 focus:outline-none"
                    type="text"
                    aria-label="Full name"
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    id="name"
                  />
                  <label htmlFor="name" className="text-ph-text">
                    Name
                  </label>
                  <span className="absolute left-0 text-red-500">
                    {errors.name}
                  </span>
                </div>
                <div className="input-container w-full">
                  <input
                    required
                    className="text-xl focus:border-teal-700 pt-2 border-b-2 border-gray-400 appearance-none bg-transparent w-full text-gray-700 leading-tight focus:outline-none"
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                  />
                  <label className="text-ph-text" htmlFor="email">
                    Email
                  </label>
                  <span className="absolute left-0 text-red-500">
                    {errors.email}
                  </span>
                </div>
                <div className="input-container w-full">
                  <input
                    required
                    className="text-xl focus:border-teal-700 pt-2 border-b-2 border-gray-400 appearance-none bg-transparent w-full text-gray-700 leading-tight focus:outline-none"
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                  />
                  <label className="text-ph-text" htmlFor="password">
                    Password
                  </label>
                  <span className="absolute left-0 text-red-500">
                    {errors.password}
                  </span>
                </div>
                <div className="input-container w-full">
                  <input
                    required
                    className="text-xl focus:border-teal-700 pt-2 border-b-2 border-gray-400 appearance-none bg-transparent w-full text-gray-700 leading-tight focus:outline-none"
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                  />
                  <label className="text-ph-text" htmlFor="password2">
                    Confirm Password
                  </label>
                  <span className="absolute left-0 text-red-500">
                    {errors.password2}
                  </span>
                </div>
                <div className="flex items-center input-container w-full">
                  <button
                    type="submit"
                    className="uppercase tracking-wide w-40 rounded ripple-bg-blue-700 text-white py-2 px-4 inline-flex justify-center"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
