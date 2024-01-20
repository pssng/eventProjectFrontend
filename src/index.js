import React from "react";
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
  const [roleLog, setRoleLog] = React.useState(<></>);
  const [isAuth, setIsAuth] = React.useState(false);

  const renderSection = (x) => {
    switch (x) {
      case "noLog":
        setIsAuth(false);
        break;
      case "client":
        return <AccountClient />;
      case "artist":
        return <AccountArtist />;
      case "promoter":
        return <AccountPromoters />;

      case "admin":
        return <AccountAdmin />;

      default:
        return null;
    }
  };
  return (
    //Usare il Router per consentire la navigazione tra le pagine all'interno della piattaforma
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/ManagerEvent" element={<ManagerEvent />} />
          <Route path="/Artist" element={<Artist />} />
          <Route path="/PayPage" element={<PayPage />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Events" element={<Catalog />} />
          <Route path="/RequestArtist" element={<RequestFormEventArtist />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Loginpromoters" element={<LoginPromoters />} />
          <Route path="/SignUppromoters" element={<SignUpPromoters />} />
          <Route path="/Loginclients" element={<LoginClients />} />
          <Route path="/SignUpclients" element={<SignUpClients />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/EventPage" element={<EventPage />} />
          <Route path="LoginArtist" element={<LoginArtist />} />
          <Route path="LoginAdmin" element={<LoginAdmin />} />
          <Route path="SignUpArtist" element={<SignUpArtist />} />
          {/*Quando faccio il routing devo capire il ruolo dell utente e 
          reindirizzarlo all'apposito Account per ora standard ho il Client, inserire nei parametri il ruolo per 
          mostrare una section diversa
          Passaggi: fai il login, identifica il ruolo dell'utente, metti il ruolo dell'utente nei parametri
          */}
          <Route path="/Account" element={renderSection("artist")} />

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
