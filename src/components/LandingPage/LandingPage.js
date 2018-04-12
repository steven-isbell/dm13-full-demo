import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUser } from "../../ducks/userReducer";

class LandingPage extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.user.name ? (
          <div>
            <p>
              {this.props.user.name} & {this.props.user.authid}
            </p>
            <a href={process.env.REACT_APP_LOGOUT}>
              <button>Logout</button>
            </a>
          </div>
        ) : (
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.userReducer });

export default connect(mapStateToProps, { getUser })(LandingPage);
