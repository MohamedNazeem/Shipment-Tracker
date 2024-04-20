import React, { useState } from "react";
import Logo from "../../assets/bosta-logo.png";
import "./styles.css";
import Search from "@mui/icons-material/Search";

const NavBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const handleSearch = () => {
    // Placeholder for search functionality
    console.log("Searching...");
  };

  return (
    <div>
      <header>
        <img src={Logo} height={50} width={120} alt="bosta logo" />
        <nav>
          <ul className="nav__links">
            <li>Home</li>
            <li>Prices</li>
            <li>Call Sales Team</li>
          </ul>

          <ul className="nav__links__right">
            <li onMouseEnter={toggleSearch} onMouseLeave={toggleSearch}>
              Track your order
              {isSearchVisible && (
                <div className="search-container">
                  <input type="text" placeholder="Search..." />
                  <button onClick={handleSearch}>
                    <Search />
                  </button>
                </div>
              )}
            </li>
            <li>Login</li>
            <li></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
