import { Box, Stack, Link, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import im3 from "../../../Assets/background.jpg";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

export function LoginAdmin() {
  const [CF, setCF] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", CF);
    console.log("Password:", password);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
                id="email"
                label="Fiscal Code"
                variant="outlined"
                onChange={(e) => setCF(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <FormControl
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
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

export function LoginClients() {
  const [CF, setCF] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "http://127.0.0.1:8080/public/authenticate";

    let jsonData = {
      fiscalCode: CF,
      password: password,
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
                  navigate("/Home");
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
          <h2>Login as a Customer</h2>
          <form onSubmit={handleSubmit}>
            <Stack direction={"column"} spacing={3}>
              <TextField
                required
                id="email"
                label="Fiscal Code"
                variant="outlined"
                onChange={(e) => setCF(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <FormControl
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
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

export function LoginPromoters() {
  const [CF, setCF] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "http://127.0.0.1:8080/public/authenticate";

    let jsonData = {
      fiscalCode: CF,
      password: password,
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
                id="email"
                label="Fiscal Code"
                variant="outlined"
                onChange={(e) => setCF(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <FormControl
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

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
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [CF, setCF] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "http://127.0.0.1:8080/public/authenticate";

    let jsonData = {
      fiscalCode: CF,
      password: password,
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
          alert("Error: ", httpRequest.status, httpRequest.statusText);
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
                id="email"
                label="Fiscal Code"
                variant="outlined"
                onChange={(e) => setCF(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <FormControl
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

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
                  <Link href={"/signUpArtist"}>{"Sign Up"}</Link>{" "}
                </Grid>
              </Grid>
            </Stack>
          </form>
        </div>
      </Box>
    </>
  );
}
