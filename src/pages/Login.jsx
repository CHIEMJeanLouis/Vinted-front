import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="form-container">
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const request = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/login",
            {
              email: email,
              password: password,
            }
          );
          const token = request.data.token; //  bkUK-u2WdvwABXtP2rhST3_y5xjuXpe7p6hOd0u7yn-nU6Y3I8bzcbKBiLYUkR3O pour "lagusensei"
          Cookies.set("token", token, { expires: 7 });
          setToken(Cookies.get("token"));
          navigate("/");
        }}
      >
        <h1>Se connecter</h1>

        <input
          className="input-form"
          type="email"
          placeholder="Votre email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <input
          className="input-form"
          type="password"
          placeholder="Votre mot de passe"
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Se Connecter</button>

        <Link className="form-link" to="/signup">
          Pas encore de compte ? Inscris-toi !
        </Link>
      </form>
    </div>
  );
};

export default Login;
