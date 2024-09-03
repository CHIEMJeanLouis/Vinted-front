import logo from "../assets/Vite + React_files/logo-a7c93c98.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ setInput, setIsConnected }) => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  return (
    <header>
      <div className="header-container">
        <div className="header-nav">
          <Link to="/">
            <img className="logo" src={logo} alt="logo vinted" />
          </Link>
          <div className="header-search">
            <input
              className="header-input-search"
              type="text"
              placeholder="Chercher un article"
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
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
                style={{
                  backgroundColor: "#c2175b",
                  color: "white",
                  border: "none",
                }}
                onClick={() => {
                  Cookies.remove("token");
                  navigate("/");
                }}
              >
                Deconnexion
              </button>
            )}
            {!token ? (
              <Link to="/login">
                <button
                  className="sell"
                  onClick={() => {
                    setIsConnected(true);
                  }}
                >
                  Vend tes articles
                </button>
              </Link>
            ) : (
              <Link to="/announce">
                <button className="sell">Vend tes articles</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
