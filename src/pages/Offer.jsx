import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    // si j'ai pas ma réponse j'affiche ça :
    <div>Chargement ...</div>
  ) : (
    // sinon j'affiche ça :
    <div className="offer-page">
      <div className="col-left">
        <img src={data.product_pictures[0].url} alt={data.product_name} />
      </div>
      <div className="col-right">
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
            <div key={index}>
              <p>
                {keys} : {detail[keys]};
              </p>
            </div>
          );
        })}
        <span>{data.product_name}</span>
        <span>{data.product_description}</span>
        <span>{data.owner.account.username}</span>

        <button>ACHETER</button>
      </div>
    </div>
  );
};

export default Offer;
