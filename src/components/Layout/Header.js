import { Fragment } from "react";
import bannerImage from "../../assets/bannerimage.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

// eslint-disable-next-line no-unused-vars
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MacDough Wings</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={bannerImage} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
