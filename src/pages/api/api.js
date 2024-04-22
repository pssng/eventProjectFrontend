import axios from "axios";
import { useState } from "react";

export async function sendLoginRequest(CF, password) {
  const apiUrl = "http://127.0.0.1:8080/public/authenticate";

  let jsonData = {
    fiscalCode: CF,
    password: password,
  };
  var response = await axios
    .post(apiUrl, jsonData)
    .then((resp) => localStorage.setItem("authKey", resp.data))
    .catch((error) => console.log(error));
}

export async function retrieveGenerals() {
  const token = localStorage.getItem("authKey");

  if (token !== undefined && token !== null) {
    var resp = await axios.post(
      "http://127.0.0.1:8080/public/generals",
      {},
      {
        headers: {
          "Content-Type": "application/json", // Esempio di header
          "Authorization": `Bearer ${token}`,
        },
      }
    ).then(response=> localStorage.setItem("userGenerals", response.data));

  }
}

export async function retriveRole() {
  const token = localStorage.getItem("authKey");
  if (token !== undefined && token !== null) {
    var resp = await axios.post(
      "http://127.0.0.1:8080/public/retrieve_role",
      {},
      {
        headers: {
          "Content-Type": "application/json", // Esempio di header
          "Authorization": `Bearer ${token}`,
        },
      }
    ).then(response=> localStorage.setItem("userRole", response.data));
  }
}
