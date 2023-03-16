import React from "react";
import classes from "./navBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function navigateToLogin() {
    navigate("/login");
  }
  function Logout() {
    dispatch(logout());
    navigate("/home");
  }
  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/" className={classes.title}>
            THAMIZHAN FOODS
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <Link to="/home">Home</Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/home#contacts">Contacts</Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/home#foods">Foods</Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/home#faq">FAQ</Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/home#create">Create</Link>
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon} />
          <Link to="/cart" className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>0</div>
          </Link>
          <button className={classes.logout} onClick={isLoggedIn?Logout:navigateToLogin}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
