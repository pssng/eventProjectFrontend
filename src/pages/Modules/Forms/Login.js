import { Box, Stack, Link, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import im3 from "../../../Assets/background.jpg";

export function LoginAdmin(props) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "http://127.0.0.1:8080/public/authenticate";

    let jsonData = {
      fiscalCode: props.userObj.user.username,
      password: props.userObj.user.password,
    };

    var jsonString = JSON.stringify(jsonData);

    var httpRequest = new XMLHttpRequest();

    httpRequest.open("POST", apiUrl, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          localStorage.setItem("authKey", httpRequest.responseText);
       
          if (localStorage.getItem("authKey") !== "") {
            const whoAmIUrl = "http://127.0.0.1:8080/public/retrieve_role";
            var roleHttpRequest = new XMLHttpRequest();
            roleHttpRequest.open("POST", whoAmIUrl, true);

            roleHttpRequest.setRequestHeader(
              "Authorization",
              "Bearer " + localStorage.getItem("authKey")
            );

            roleHttpRequest.onreadystatechange = function () {
              if (roleHttpRequest.readyState === 4) {
                if (roleHttpRequest.status === 200) {
                  localStorage.setItem(
                    "userRole",
                    roleHttpRequest.responseText
                  );

                  // Dopo aver impostato tutti i dati nella localStorage, ricarica la pagina
                  navigate('/Home')
                  window.location.reload();
                }
              }
            };

            roleHttpRequest.send();
          }
        } else {
          console.error("Error: ", httpRequest.status, httpRequest.statusText);
        }
      }
    };

    httpRequest.send(jsonString);
  };

  return (
    <>
      <style>
        {`
      body {
        margin: 0;
        padding: 0;
        background-image: url(${im3});
        background-size: cover;
        background-repeat: no-repeat;
      }
    `}
      </style>
      <Box
        style={{
          border: "groove 3px black",
          borderRadius: "30px",
          width: "20rem",
          padding: "2rem",
          marginBottom: "10rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
        className={"center"}
      >
        <div>
          <h2>Login Admin Only</h2>
          <form onSubmit={handleSubmit}>
            <Stack direction={"column"} spacing={3}>
            <TextField
                required
                id="username"
                label="Fiscal Code"
                variant="standard"
                onChange={(e) => props.userObj.setUser({...props.userObj.user , username: e.target.value})}
                style={{ marginBottom: "10px" }}
              />
              <TextField
                required
                id="password"
                label="Password"
                variant="standard"
                onChange={(e) => props.userObj.setUser({...props.userObj.user , password: e.target.value})}
                style={{ marginBottom: "10px" }}
              />
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Button type="submit" variant="outlined">
                Login
              </Button>

              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Grid item md={"4"}>
                  {" "}
                  <Link href={"/forgotPassword"}>{"Forgot Password?"}</Link>
                </Grid>
                <Grid item md={"5"}>
                  <Link href={"/Contacts"}>
                    {"Can't Login? Contact Support"}
                  </Link>{" "}
                </Grid>
              </Grid>
            </Stack>
          </form>
        </div>
      </Box>
    </>
  );
}

export function LoginClients(props) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "http://127.0.0.1:8080/public/authenticate";

    let jsonData = {
      fiscalCode: props.userObj.user.username,
      password: props.userObj.user.password,
    };

    var jsonString = JSON.stringify(jsonData);

    var httpRequest = new XMLHttpRequest();

    httpRequest.open("POST", apiUrl, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          localStorage.setItem("authKey", httpRequest.responseText);
       
          if (localStorage.getItem("authKey") !== "") {
            const whoAmIUrl = "http://127.0.0.1:8080/public/retrieve_role";
            var roleHttpRequest = new XMLHttpRequest();
            roleHttpRequest.open("POST", whoAmIUrl, true);

            roleHttpRequest.setRequestHeader(
              "Authorization",
              "Bearer " + localStorage.getItem("authKey")
            );

            roleHttpRequest.onreadystatechange = function () {
              if (roleHttpRequest.readyState === 4) {
                if (roleHttpRequest.status === 200) {
                  localStorage.setItem(
                    "userRole",
                    roleHttpRequest.responseText
                  );

                  // Dopo aver impostato tutti i dati nella localStorage, ricarica la pagina
                  navigate('/Home')
                  window.location.reload();
                }
              }
            };

            roleHttpRequest.send();
          }
        } else {
          console.error("Error: ", httpRequest.status, httpRequest.statusText);
        }
      }
    };

    httpRequest.send(jsonString);
  };

  return (
    <>
      <style>
        {`
      body {
        margin: 0;
        padding: 0;
        background-image: url(${im3});
        background-size: cover;
        background-repeat: no-repeat;
      }
    `}
      </style>
      <Box
        style={{
          border: "groove 3px black",
          borderRadius: "30px",
          width: "20rem",
          padding: "2rem",
          marginBottom: "10rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
        className={"center"}
      >
        <div>
          <h2>Login as a Client</h2>
          <form onSubmit={handleSubmit}>
            <Stack direction={"column"} spacing={3}>
              <TextField
                required
                id="username"
                label="Fiscal Code"
                variant="standard"
                onChange={(e) => props.userObj.setUser({...props.userObj.user , username: e.target.value})}
                style={{ marginBottom: "10px" }}
              />
              <TextField
                required
                id="password"
                label="Password"
                variant="standard"
                onChange={(e) => props.userObj.setUser({...props.userObj.user , password: e.target.value})}
                style={{ marginBottom: "10px" }}
              />
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Button type="submit" variant="outlined">
                Login
              </Button>

              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Grid item>
                  {" "}
                  <Link href={"/forgotPassword"}>{"Forgot Password?"}</Link>
                </Grid>
                <Grid item>
                  <Link href={"/signUpClients"}>{"Sign Up"}</Link>{" "}
                </Grid>
              </Grid>
            </Stack>
          </form>
        </div>
      </Box>
    </>
  );
}

export function LoginPromoters(props) {
  // Ho tolto cf e password perche ora le nostre credenziali sono globali
  // e quindi userObj di cui parlo in index
  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "http://127.0.0.1:8080/public/authenticate";

    let jsonData = {
      fiscalCode: props.userObj.user.username,
      password: props.userObj.user.password,
    };

    var jsonString = JSON.stringify(jsonData);

    var httpRequest = new XMLHttpRequest();

    httpRequest.open("POST", apiUrl, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          localStorage.setItem("authKey", httpRequest.responseText);
          // console.log(httpRequest.responseText);
        } else {
          console.error("Error: ", httpRequest.status, httpRequest.statusText);
        }
      }
    };

    httpRequest.send(jsonString);
  };
  return (
    <>
      <style>
        {`
      body {
        margin: 0;
        padding: 0;
        background-image: url(${im3});
        background-size: cover;
        background-repeat: no-repeat;
      }
    `}
      </style>
      <Box
        style={{
          border: "groove 3px black",
          borderRadius: "30px",
          width: "20rem",
          padding: "2rem",
          marginBottom: "10rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
        className={"center"}
      >
        <div>
          <h2>Login as a Promoter</h2>
          <form onSubmit={handleSubmit}>
            <Stack direction={"column"} spacing={3}>
            <TextField
                required
                id="username"
                label="Fiscal Code"
                variant="standard"
                onChange={(e) => props.userObj.setUser({...props.userObj.user , username: e.target.value})}
                style={{ marginBottom: "10px" }}
              />
              <TextField
                required
                id="password"
                label="Password"
                variant="standard"
                onChange={(e) => props.userObj.setUser({...props.userObj.user , password: e.target.value})}
                style={{ marginBottom: "10px" }}
              />

              <FormControlLabel control={<Checkbox />} label="Remember me" />

              <Button type="submit" variant="outlined">
                Login
              </Button>
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Grid item>
                  {" "}
                  <Link href={"/forgotPassword"}>{"Forgot Password?"}</Link>
                </Grid>
                <Grid item>
                  <Link href={"/signUpPromoters"}>{"Sign Up"}</Link>{" "}
                </Grid>
              </Grid>
            </Stack>
          </form>
        </div>
      </Box>
    </>
  );
}

export function LoginArtist() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "http://127.0.0.1:8080/public/authenticate";

    let jsonData = {
      fiscalCode: props.userObj.user.username,
      password: props.userObj.user.password,
    };

    var jsonString = JSON.stringify(jsonData);

    var httpRequest = new XMLHttpRequest();

    httpRequest.open("POST", apiUrl, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          localStorage.setItem("authKey", httpRequest.responseText);
          // console.log(httpRequest.responseText);
        } else {
          console.error("Error: ", httpRequest.status, httpRequest.statusText);
        }
      }
    };

    httpRequest.send(jsonString);
  };
  return (
    <>
      <style>
        {`
      body {
        margin: 0;
        padding: 0;
        background-image: url(${im3});
        background-size: cover;
        background-repeat: no-repeat;
      }
    `}
      </style>
      <Box
        style={{
          border: "groove 3px black",
          borderRadius: "30px",
          width: "20rem",
          padding: "2rem",
          marginBottom: "10rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
        className={"center"}
      >
        <div>
          <h2>Login as a Artist</h2>
          <form onSubmit={handleSubmit}>
            <Stack direction={"column"} spacing={3}>
            <TextField
                required
                id="username"
                label="Fiscal Code"
                variant="standard"
                onChange={(e) => props.userObj.setUser({...props.userObj.user , username: e.target.value})}
                style={{ marginBottom: "10px" }}
              />
              <TextField
                required
                id="password"
                label="Password"
                variant="standard"
                onChange={(e) => props.userObj.setUser({...props.userObj.user , password: e.target.value})}
                style={{ marginBottom: "10px" }}
              />
              <FormControlLabel control={<Checkbox />} label="Remember me" />

              <Button type="submit" variant="outlined">
                Login
              </Button>
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Grid item>
                  {" "}
                  <Link href={"/forgotPassword"}>{"Forgot Password?"}</Link>
                </Grid>
                <Grid item>
                  <Link href={"/signUpPromoters"}>{"Sign Up"}</Link>{" "}
                </Grid>
              </Grid>
            </Stack>
          </form>
        </div>
      </Box>
    </>
  );
}
