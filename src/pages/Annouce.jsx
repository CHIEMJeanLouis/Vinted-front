import { useState } from "react";
import axios from "axios";

const Announce = () => {
  const [checkbox, SetCheckBox] = useState(false);

  return (
    <div style={{ backgroundColor: "#EAEDEE" }}>
      <h2 className="announce-h2">Vends ton article</h2>
      <div className="announce-container">
        <form
          className="announce-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="sell-block-add">
            <div className="dashed-effect">
              <label for="addfile">
                <span> + Ajouter une photo</span>
                <input type="file" id="addfile" />
              </label>
            </div>
          </div>
          <div className="all-blocks">
            <div className="block">
              <div className="sell-block-detail">
                <h3>Titre</h3>
              </div>

              <div className="sell-block-input">
                <input type="text" placeholder="ex:Chemise Sézane verte" />
              </div>
            </div>
            <div className="block">
              <div className="sell-block-detail">
                <h3>Décris ton article</h3>
              </div>
              <div className="sell-block-input">
                <textarea placeholder="ex: porté quelquefois, taille correctement"></textarea>
              </div>
            </div>
          </div>

          <div className="all-blocks">
            <div className="block">
              <div className="sell-block-detail">
                <h3>Marque</h3>
              </div>
              <div className="sell-block-input">
                <input type="text" placeholder="ex:Zara" />
              </div>
            </div>
            <div className="block">
              <div className="sell-block-detail">
                <h3>Taille</h3>
              </div>
              <div className="sell-block-input">
                <input type="text" placeholder="ex: L/40/12" />
              </div>
            </div>
            <div className="block">
              <div className="sell-block-detail">
                <h3>Couleur</h3>
              </div>
              <div className="sell-block-input">
                <input type="text" placeholder="ex:Fushia" />
              </div>
            </div>
            <div className="block">
              <div className="sell-block-detail">
                <h3>Etat</h3>
              </div>
              <div className="sell-block-input">
                <input type="text" placeholder="Neuf avec étiquette" />
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
                  <input type="text" placeholder="0,00€" />
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
