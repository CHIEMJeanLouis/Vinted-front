import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  // State
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  //Factorise
  const request = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      console.log(response.data);
      Cookies.set("token", response.data.token, { expires: 7 });
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Veuillez remplir tous les champs");
      } else if (error.status === 409) {
        setErrorMessage("Email déjà existant");
      } else {
        setErrorMessage(
          "Un problème est survenu, merci d'essayer ultérieurement"
        );
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      request();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>S'inscrire</h1>
        <input
          className="input-form"
          type="text"
          placeholder="Votre nom d'utilisateur"
          value={username}
          onChange={(event) => {
            const Username = event.target.value;
            setUsername(Username);
          }}
        />
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

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <div className="newsletter">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={() => {
              setNewsletter(!newsletter);
            }}
          />
          <p>S'inscrire a la newsletter</p>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>

        <button type="submit">S'inscrire</button>

        <Link className="form-link" to="/login">
          Tu as déja un compte ? Connecte-toi !
        </Link>
        {/* <a href="./login">Tu as déja un compte ? Connecte-toi !</a> garder les balises <a></a> pour naviguer en dehors du site */}
      </form>
    </div>
  );
};

export default Signup;
