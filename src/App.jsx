import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <>
    {/*Enquanto o botão não foi clicado a landing page fica vizivel*/}
      {!showProductList && (
        <header className="landing-page ">
          <div className="content">
            <div className="landing_content">
              <h1 className="content-title">
                Bem vindo ao <br />
                <strong className="title-emfase">Paradise Nursery</strong>
              </h1>
              <div className="divider"></div>
              <p className="content-subtitle">
                <em>
                  Onde o <strong className="subtitle-emfase">verde</strong>{" "}
                  encontra a{" "}
                  <strong className="subtitle-emfase">serenidade</strong>
                </em>
              </p>
            </div>

            <div className="aboutus_container">
              <AboutUs />
            </div>
            <div className="button-container">
              <button
                className="get-started-button"
                onClick={handleGetStartedClick}
              >
                Começar Agora
              </button>
            </div>
          </div>
        </header>
      )}
       {/*Quando clica a página some*/}
      {showProductList && <ProductList onHomeClick={handleHomeClick} />}
    </>
  );
}

export default App;
