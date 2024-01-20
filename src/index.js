import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { NoPage } from "./pages/NoPages";
import { ManagerEvent } from "./pages/ManagerEvent";
import { Client } from "./pages/Client";
import { Artist } from "./pages/Artist";
import { PayPage } from "./pages/PayPage";
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
import {
  AccountAdmin,
  AccountClient,
  AccountPromoters,
  AccountArtist,
} from "./pages/Account";

export default function App() {
  // Questa variabile deve essere un oggetto, ovvero l'utente che logga, questa variabile da qui viene
  // passata in tutto il sito, particolare attenzione per account, l' oggetto user una volta settatto 
  // è disponibile ovunque e con un filtraggio tramite api si ricavano partendo da questa variabile 
  // tutte le altre informazioni riguardo questo specifico utente, al momento del login questa variabile 
  // di stato viene viene riempita con id username e password dell'utente al momento del logaut viene
  // svuotata 
  const [user,setUser] = useState({id: '',username: '', password: ''});
  const renderSection = (x) => {
    switch (x) {
      case "ROLE_CUSTOMER":
        return <AccountClient />;
      case "ROLE_ARTIST":
        return <AccountArtist />;
      case "ROLE_PROMOTER":
        return <AccountPromoters />;
      case "ROLE_ADMIN":
         return <AccountAdmin />;
      default:
        return null;
    }
  };
  return (
    //Usare il Router per consentire la navigazione tra le pagine all'interno della piattaforma
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout userObj={{user:user, setUser:setUser}} />}>
          <Route index element={<Home userObj={{user:user, setUser:setUser}} />} />
          <Route path="/Client" element={<Client userObj={{user:user, setUser:setUser}} />} />
          <Route path="/ManagerEvent" element={<ManagerEvent userObj={{user:user, setUser:setUser}} />} />
          <Route path="/Artist" element={<Artist userObj={{user:user, setUser:setUser}} />} />
          <Route path="/PayPage" element={<PayPage userObj={{user:user, setUser:setUser}} />} />
          <Route path="/Contacts" element={<Contacts userObj={{user:user, setUser:setUser}} />} />
          <Route path="/Events" element={<Catalog userObj={{user:user, setUser:setUser}} />} />
          <Route path="/RequestArtist" element={<RequestFormEventArtist userObj={{user:user, setUser:setUser}} />} />
          <Route path="/Home" element={<Home userObj={{user:user, setUser:setUser}} />} />
          <Route path="/Loginpromoters" element={<LoginPromoters userObj={{user:user, setUser:setUser}} />} />
          <Route path="/SignUppromoters" element={<SignUpPromoters userObj={{user:user, setUser:setUser}} />} />
          <Route path="/Loginclients" element={<LoginClients userObj={{user:user, setUser:setUser}} />} />
          <Route path="/SignUpclients" element={<SignUpClients userObj={{user:user, setUser:setUser}} />} />
          <Route path="/ForgotPassword" element={<ForgotPassword userObj={{user:user, setUser:setUser}} />} />
          <Route path="/EventPage" element={<EventPage userObj={{user:user, setUser:setUser}} />} />
          <Route path="LoginArtist" element={<LoginArtist userObj={{user:user, setUser:setUser}} />} />
          <Route path="LoginAdmin" element={<LoginAdmin userObj={{user:user, setUser:setUser}} />} />
          <Route path="SignUpArtist" element={<SignUpArtist userObj={{user:user, setUser:setUser}} />} />
          {/*Quando faccio il routing devo capire il ruolo dell utente e 
          reindirizzarlo all'apposito Account per ora standard ho il Client, inserire nei parametri il ruolo per 
          mostrare una section diversa
          Passaggi: fai il login, identifica il ruolo dell'utente, metti il ruolo dell'utente nei parametri
          */}
          <Route path="/Account"
           userObj={{user:user, setUser:setUser}} 
           element={renderSection(localStorage.getItem("userRole"))} />

          <Route path="*" element={<NoPage />} />
        </Route>
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
