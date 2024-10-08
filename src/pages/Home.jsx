import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ input, token }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers?title=${input}`
        );
        setData(response.data.offers);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [{ input }]);

  return loading ? (
    // si j'ai pas ma réponse j'affiche ça :
    <div>Chargement ...</div>
  ) : (
    // sinon j'affiche ça :
    <div>
      <div className="hero">
        <div className="home-hero">
          <h1>Prêt à faire du tri dans vos placards ?</h1>
          {token ? (
            <Link to="/announce">
              <button className="sell">Commencer à vendre</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="sell">Commencer à vendre</button>
            </Link>
          )}
        </div>
      </div>
      <div className="offer-section">
        {data.map((offer) => {
          return (
            <div key={offer._id} className="offer-container">
              <div className="offer-card">
                <div
                  className="owner-card"
                  onClick={() => {
                    alert("Go to the User Profil");
                  }}
                >
                  {offer.owner.account.avatar && (
                    <img
                      src={offer.owner.account.avatar.secure_url}
                      alt="icone utilisateur"
                    />
                  )}
                  <span>{offer.owner.account.username}</span>
                </div>
                <Link to={`./offers/${offer._id}`}>
                  <div>
                    <img
                      className="picture"
                      src={offer.product_pictures[0].secure_url}
                      alt="product photo"
                    />
                  </div>
                  <div className="bottom-offer-card">
                    <span>{offer.product_price} €</span>
                    {offer.product_details.map((detail, index) => {
                      return (
                        <div key={index}>
                          <span>{detail.MARQUE}</span>
                          <span>{detail.TAILLE}</span>
                        </div>
                      );
                    })}
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
