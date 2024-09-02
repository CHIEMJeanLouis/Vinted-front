import { useState } from "react";
import axios from "axios";

const Announce = ({ token }) => {
  const [checkbox, SetCheckBox] = useState(false);
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState({});
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div style={{ backgroundColor: "#EAEDEE" }}>
      <h2 className="announce-h2">Vends ton article</h2>
      <div className="announce-container">
        <form
          className="announce-form"
          onSubmit={async (e) => {
            try {
              e.preventDefault();
              const formData = new FormData();
              formData.append("title", title);
              formData.append("price", price);
              formData.append("picture", picture);
              formData.append("color", color);
              formData.append("status", status);
              formData.append("brand", brand);
              formData.append("descrition", description);

              const response = await axios.post(
                " https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                formData,
                {
                  headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "multipart:form-data",
                  },
                }
              );
              console.log(response);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <div className="sell-block-add">
            <div className="dashed-effect">
              <label htmlFor="addfile">
                <span> + Ajouter une photo</span>
                <input
                  type="file"
                  id="addfile"
                  onChange={(e) => {
                    setPicture(e.target.files[0]);
                  }}
                />
              </label>
            </div>
          </div>
          <div className="all-blocks">
            <div className="block">
              <div className="sell-block-detail">
                <h3>Titre</h3>
              </div>

              <div className="sell-block-input">
                <input
                  type="text"
                  placeholder="ex:Chemise Sézane verte"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="block">
              <div className="sell-block-detail">
                <h3>Décris ton article</h3>
              </div>
              <div className="sell-block-input">
                <textarea
                  placeholder="ex: porté quelquefois, taille correctement"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="all-blocks">
            <div className="block">
              <div className="sell-block-detail">
                <h3>Marque</h3>
              </div>
              <div className="sell-block-input">
                <input
                  type="text"
                  placeholder="ex:Zara"
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="block">
              <div className="sell-block-detail">
                <h3>Taille</h3>
              </div>
              <div className="sell-block-input">
                <input
                  type="text"
                  placeholder="ex: L/40/12"
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="block">
              <div className="sell-block-detail">
                <h3>Couleur</h3>
              </div>
              <div className="sell-block-input">
                <input
                  type="text"
                  placeholder="ex:Fushia"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="block">
              <div className="sell-block-detail">
                <h3>Etat</h3>
              </div>
              <div className="sell-block-input">
                <input
                  type="text"
                  placeholder="Neuf avec étiquette"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="block">
              <div className="sell-block-detail">
                <h3>Lieu</h3>
              </div>
              <div className="sell-block-input">
                <input type="text" placeholder="ex:Paris" />
              </div>
            </div>
          </div>

          <div className="all-blocks-last">
            <div className="block">
              <div className="sell-block-detail">
                <h3>Prix</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "140px",
                }}
              >
                <div className="sell-block-input">
                  <input
                    type="text"
                    placeholder="0,00€"
                    value={price}
                    onChange={(e) => {
                      setPrice(Number(e.target.value));
                    }}
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <input
                    type="checkbox"
                    onChange={() => {
                      SetCheckBox(true);
                      console.log(checkbox);
                    }}
                  />
                  <p>Je suis intéressé(e) par les échanges</p>
                </div>
              </div>
            </div>
          </div>
          <button className="announce-button-add">Ajouter</button>
        </form>
      </div>
    </div>
  );
};
export default Announce;
