import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navBar, setNavBar] = useState(true);
  useEffect(() => {
    if (window.location.pathname !== "/") {
      setNavBar(false);
    }
  }, [navBar]);
  const handleNavBar = () => {
    setNavBar(false);
  };

  return (
    <>
      {console.log(window.location)}
      {navBar ? (
        <nav>
          <Link onClick={handleNavBar} to="soda">
            {" "}
            Soda
          </Link>
          <Link onClick={handleNavBar} to="snack">
            {" "}
            Snack{" "}
          </Link>
          <Link onClick={handleNavBar} to="surprise">
            {" "}
            Surprise{" "}
          </Link>
        </nav>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
