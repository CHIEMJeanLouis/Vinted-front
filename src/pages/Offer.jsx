import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <div>Chargement ...</div>
  ) : (
    <div className="offer-page">
      <div className="col-left">
        <img src={data.product_pictures[0].url} alt={data.product_name} />
      </div>
      <div className="col-right">
        <div className="col-right-top">
          <span className="offer-price">{data.product_price} €</span>
          {data.product_details.map((detail, index) => {
            // {
            //   console.log("detail ===> ", detail);  ===> Objects {MARQUE: 'STRADIVARIUS'}, {ÉTAT: 'NEUF AVEC ÉTIQUETTE'}
            // }
            const keys = Object.keys(detail);
            // console.log("keys ===> ", keys); ===> tableau MARQUE, ETAT, COULEUR, EMPLACEMENT

            const key = keys[0];
            // console.log("key ===> ", key); ===> clé de l'objet detail ===> MARQUE, ETAT, COULEUR,EMPLACEMENT

            return (
              <ul key={index}>
                <li className="offer-list">
                  <span>{keys} </span>
                  <span>{detail[keys]}</span>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="col-right-middle">
          <div className="col-right-detail">
            <span>{data.product_name}</span>
            <span>{data.product_description}</span>
          </div>

          <div className="col-right-user">
            {data.owner.account.avatar && (
              <img
                src={data.owner.account.avatar.secure_url}
                alt="icone utilisateur"
              />
            )}
            <span>{data.owner.account.username}</span>
          </div>
        </div>
        <div className="col-right-bottom">
          <Link
            to="/payment"
            state={{
              title: data.product_name,
              price: data.product_price * 100,
            }}
          >
            <button>ACHETER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
