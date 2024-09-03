import { useState } from "react";
import axios from "axios";
import FormDetails from "../components/FormDetails";
import { Navigate } from "react-router-dom";

const Announce = ({ token }) => {
  const [checkbox, SetCheckBox] = useState(false);
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState({});
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const setSomething = (e) => {
    setSomething(e.target.value);
  };

  return token ? (
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
              formData.append("size", size);
              formData.append("city", city);
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
              if (response.data.status === 201) {
                alert("Woot, annonce bien publiée !");
              }
            } catch (error) {
              console.log(error);
              if (
                error.response.data.message ===
                "title, price and picture are required"
              ) {
                return alert("title, price and picture are required");
              }
            }
          }}
        >
          <div className="sell-block-add">
            <div className="dashed-effect">
              <label className="addfile" htmlFor="addfile">
                <span> + Ajouter une photo</span>
                <input
                  type="file"
                  id="addfile"
                  onChange={(e) => {
                    setPicture(e.target.files[0]);
                  }}
                />
                {/* Pour afficher une preview du file selectionné */}

                {/* <div>
                  {picture && (
                    <img
                      src={URL.createObjectURL(picture)}
                      alt="preview picture"
                    />
                  )}
                </div> */}
              </label>
            </div>
          </div>
          <div className="all-blocks">
            <FormDetails
              title="Titre"
              setSomething={setTitle}
              placeholder="ex:Chemise Sézane verte"
            />
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
            <FormDetails
              title="Marque"
              placeholder="ex:Zara"
              setSomething={setBrand}
            />

            <div className="block">
              <FormDetails
                title="Taille"
                placeholder="ex: L/40/12"
                setSomething={setSize}
              />
            </div>
            <div className="block">
              <FormDetails
                title="Couleur"
                placeholder="ex: Fushia"
                setSomething={setColor}
              />
            </div>

            <div className="block">
              <FormDetails
                title="Etat"
                placeholder="Neuf avec étiquette"
                setSomething={setStatus}
              />
            </div>
            <div className="block">
              <FormDetails
                title="Lieu"
                placeholder="ex: Paris"
                setSomething={setCity}
              />
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
                      // if (!Number) {
                      //   alert("Ce champs recquiert un nombre");
                      // }
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
  ) : (
    <Navigate to="/login" />
  );
};
export default Announce;
