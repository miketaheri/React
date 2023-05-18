import React, { FC, useState, ChangeEvent } from "react";
import { FaUser, FaSignInAlt, FaSearch } from "react-icons/fa";
import "./Nav.css";
import Logo from "../assets/Logo.png";

const NavBar: FC = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <nav>
      <div className="wrapped">
        <img className="img" src={Logo} alt="logo" />
        <button className="category">Categoriesss</button>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input className="input" type="text" placeholder="SEARCH" />
        </div>
        <button className="login">
          <FaSignInAlt />
          Login
        </button>
        <button className="signup">
          <FaUser />
          Signup
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
