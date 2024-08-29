import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="form-container">
      <form>
        <h1>S'inscrire</h1>
        <input
          className="input-form"
          type="text"
          placeholder="Votre nom d'utilisateur"
        />
        <input className="input-form" type="email" placeholder="Votre email" />
        <input
          className="input-form"
          type="password"
          placeholder="Votre mot de passe"
        />
        <div className="newsletter">
          <input type="checkbox" />
          <p>S'inscrire a la newsletter</p>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>

        <button>S'inscrire</button>

        <Link className="form-link" to="/login">
          Tu as déja un compte ? Connecte-toi !
        </Link>
      </form>
    </div>
  );
};

export default Signup;
