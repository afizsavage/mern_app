import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends React.Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div className="container items-end justify-center flex h-screen-1/2">
        <div className=" flex flex-col">
          <div className="my-4 px-2 text-center">
            <h4 className="text-4xl">
              <b
                className="font-bold text-teal-700
              "
              >
                Hey there,
              </b>{" "}
              {user.name.split(" ")[0]}
              <p className="text-xl p-2 text-grey-100">
                You are logged into a full-stack{" "}
                <span className="font-mono">MERN</span> app
              </p>
            </h4>
          </div>
          <div className="flex flex-row justify-center m-2">
            <div>
              <button
                onClick={this.onLogoutClick}
                className="uppercase tracking-wide w-40 rounded ripple-bg-blue-700 text-white py-2 px-4 inline-flex justify-center"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
