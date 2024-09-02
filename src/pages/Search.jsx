import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Search = () => {
  const { query } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/v2/offers?${query}`
      );
      console.log(response.data);
    };
    fetchData();
  }, []);

  return;
};

export default Search;
