import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = props => (
  <div>
    <Link to="/">
      <div>Home</div>
    </Link>
    <Link to="/login">
      <div>Login</div>
    </Link>
    <Link to="/shop">
      <div>Shop</div>
    </Link>
    <Link to="/cart">
      <div>Cart {props.cart.length || 0}</div>
    </Link>
  </div>
);

const mapStateToProps = state => ({ ...state.productReducer });

export default connect(mapStateToProps)(Header);
