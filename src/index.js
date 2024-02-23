import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { NoPage } from "./pages/NoPages";
import { ManagerEvent } from "./pages/ManagerEvent";
import { useState } from "react";
import { Client } from "./pages/Client";
import { Artist } from "./pages/Artist";
import { PaymentCorrect } from "./pages/PaymentCorrect";
import { PaymentError } from "./pages/PaymentError";
import { Contacts } from "./pages/Contacts";
import { Catalog } from "./pages/Catalog";
import { RequestFormEventArtist } from "./pages/Modules/Forms/RequestFormArtist";
import {
  LoginClients,
  LoginPromoters,
  LoginAdmin,
  LoginArtist,
} from "./pages/Modules/Forms/Login";
import {
  SignUpClients,
  SignUpPromoters,
  SignUpArtist,
} from "./pages/Modules/Forms/Signup";
import ForgotPassword from "./pages/Modules/Forms/ForgotPassword";
import { EventPage } from "./pages/Components/EventPage";
import { EventPageAccount } from "./pages/Components/EventPageAccount";
import { ArtistPage } from "./pages/Components/ArtistPage";
import {
  AccountAdmin,
  AccountClient,
  AccountPromoters,
  AccountArtist,
} from "./pages/Account";
import GenericReview from "./pages/Components/GenericReview";
import GenericArtwork from "./pages/Components/GenericArtwork";
export default function App() {
  const [formDataList, setFormDataList] = useState([]);
  const receiveFormData = data => {
    setFormDataList([...formDataList, data]);
  };

  var cf = localStorage.getItem("fiscalCode");
  const [isAuth, setIsAuth] = React.useState();
  React.useEffect(
    () => {
      if (cf !== undefined) {
        setIsAuth(true);
      }
    },
    [cf]
  );

  const renderSection = x => {
    switch (x) {
      case "ROLE_CUSTOMER":
        return <AccountClient isAuth={isAuth} setIsAuth={setIsAuth} />;
      case "ROLE_ARTIST":
        return <AccountArtist isAuth={isAuth} setIsAuth={setIsAuth} />;

      case "ROLE_PROMOTER":
        return (
          <AccountPromoters
            formDataList={formDataList}
            setFormDataList={setFormDataList}
            receiveFormData={receiveFormData}
            isAuth={isAuth}
            setIsAuth={setIsAuth}
          />
        );
      case "ROLE_ADMIN":
        return (
          <AccountAdmin
            formDataList={formDataList}
            setFormDataList={setFormDataList}
            receiveFormData={receiveFormData}
            isAuth={isAuth}
            setIsAuth={setIsAuth}
          />
        );
      default:
        return null;
    }
  };

  return (
    //Usare il Router per consentire la navigazione tra le pagine all'interno della piattaforma
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout isAuth={isAuth} setIsAuth={setIsAuth} />}
        >
          <Route index element={<Home />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/ManagerEvent" element={<ManagerEvent />} />
          <Route path="/Artists" element={<Artist />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Events" element={<Catalog />} />
          <Route path="/RequestArtist" element={<RequestFormEventArtist />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/Loginpromoters"
            element={<LoginPromoters isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route path="/SignUppromoters" element={<SignUpPromoters />} />
          <Route
            path="/Loginclients"
            element={<LoginClients isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route path="/SignUpclients" element={<SignUpClients />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/EventPage" element={<EventPage />} />
          <Route path="/EventPageAccount" element={<EventPageAccount />} />

          <Route
            path="/LoginArtist"
            element={<LoginArtist isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route
            path="/LoginAdmin"
            element={<LoginAdmin isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route path="/SignUpArtist" element={<SignUpArtist />} />
          <Route path="/ArtistPage" element={<ArtistPage />} />
          <Route path="/GenericReview" element={<GenericReview />} />
          <Route path="/GenericArtwork" element={<GenericArtwork />} />
          {/*Quando faccio il routing devo capire il ruolo dell utente e 
          reindirizzarlo all'apposito Account per ora standard ho il Client, inserire nei parametri il ruolo per 
          mostrare una section diversa
          Passaggi: fai il login, identifica il ruolo dell'utente, metti il ruolo dell'utente nei parametri
          */}
          {/* <Route path="/Account" element={renderSection("ROLE_ARTIST")} />  */}
          {console.log("CIAO " + localStorage.getItem("userRole"))}
          <Route
            path="/Account"
            element={renderSection(localStorage.getItem("userRole"))}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/PaymentCorrect" element={<PaymentCorrect />} />
        <Route path="/PaymentError" element={<PaymentError />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
