import PropTypes from "prop-types";

import styles from './navbar.module.css';

const navData = {
    home : `
    RS CARS`,
    btnName: "Sign Up",
    
  }

const NavComp = ()=> {
   
return(
    <div className={styles["root"]}>
    <nav className="navbar navbar-light bg-light static-top">
    
    <div className="container">
    <a  id={styles["link"]}>{navData.home}</a>
    <button>{navData.btnName}</button>
    </div>
    </nav>
  
    </div>
    
);
}

NavComp.prototypes = {
home: PropTypes.string,
btnName : PropTypes.string,


}

export default NavComp;