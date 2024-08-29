import logo from "../assets/Vite + React_files/logo-a7c93c98.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-nav">
          <Link to="/">
            <img className="logo" src={logo} alt="logo vinted" />
          </Link>
          <div className="header-search">
            <input type="text" />
          </div>
          <div className="header-buttons">
            <div className="loginsignup">
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>
            </div>
            <button className="sell">Vend tes articles</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
