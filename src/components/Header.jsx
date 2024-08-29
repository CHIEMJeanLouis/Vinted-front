import logo from "../assets/Vite + React_files/logo-a7c93c98.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-nav">
          <img className="logo" src={logo} alt="logo vinted" />
          <div className="header-search">
            <input type="text" />
          </div>
          <div className="header-buttons">
            <div className="loginsignup">
              <button>S'inscrire</button>
              <button>Se connecter</button>
            </div>
            <button className="sell">Vend tes articles</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
