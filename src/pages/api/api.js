import axios from "axios";
import { useState } from "react";
export async function sendLoginRequest(CF, password) {
  const apiUrl = "http://127.0.0.1:8080/public/authenticate";
console.log(CF,password)
  let jsonData = {
    fiscalCode: CF,
    password: password,
  };
  var response = await axios
    .post(apiUrl, jsonData)
    .then((resp) => {
      localStorage.setItem("authKey", resp.data);
      alert("Login Effettuato");
    })
    .catch((error) => {
      console.log(error);
      alert("Error:" + error);
    });
  window.location.assign("/home");

}

export async function sendRegistrationRequest(roleparam, userDetails) {
  const apiUrl = "http://127.0.0.1:8080/public/new_user?role=" + roleparam;

  var response = await axios
    .post(apiUrl, userDetails)
    .then((resp) =>
      alert("Utente " + resp.data.name + " registrato correttamente")
    )
    .catch((error) => alert("Error:" + error));
}

export async function retrieveGenerals() {
  const token = localStorage.getItem("authKey");

  if (token !== undefined && token !== null) {
    var resp = await axios
      .get("http://127.0.0.1:8080/public/generals", {
        headers: {
          "Content-Type": "application/json", // Esempio di header
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) =>
        localStorage.setItem("userGenerals", JSON.stringify(response.data))
      );
  }
}

export async function retriveRole() {
  const token = localStorage.getItem("authKey");
  if (token !== undefined && token !== null) {
    var resp = await axios
      .post(
        "http://127.0.0.1:8080/public/retrieve_role",
        {},
        {
          headers: {
            "Content-Type": "application/json", // Esempio di header
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => localStorage.setItem("userRole", response.data));
  }
}
