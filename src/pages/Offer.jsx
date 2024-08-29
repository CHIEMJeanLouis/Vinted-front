import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers/" + id
        );
        setData(response.data.offers);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  // let productPicture;

  // for (let i = 0; i < data.length; i++) {
  //   productPicture = data[i].product_pictures[0].url;
  // }

  return loading ? (
    // si j'ai pas ma réponse j'affiche ça :
    <div>Chargement ...</div>
  ) : (
    // sinon j'affiche ça :
    <div>
      <p>hello</p>
      <img src={data.product_pictures[0].url} alt="photo du produit" />
    </div>
  );
};

export default Offer;
