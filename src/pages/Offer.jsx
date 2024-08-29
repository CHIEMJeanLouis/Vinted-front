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
    <div>
      <p>{data.product_price}</p>
      <img src={data.product_pictures[0].url} alt={data.product_name} />
    </div>
  );
};

export default Offer;
