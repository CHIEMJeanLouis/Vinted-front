import logo from "../assets/Vite + React_files/logo-a7c93c98.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ setToken }) => {
  const token = Cookies.get("token");
  console.log(token);

  const navigate = useNavigate();

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
            {!token ? (
              <div className="loginsignup">
                <Link to="/signup">
                  <button>S'inscrire</button>
                </Link>
                <Link to="/login">
                  <button>Se connecter</button>
                </Link>
              </div>
            ) : (
              <button
                onClick={() => {
                  Cookies.remove("token");
                  navigate("/");
                }}
              >
                Deconnexion
              </button>
            )}
            <button className="sell">Vend tes articles</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
