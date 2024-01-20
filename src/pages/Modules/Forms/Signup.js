import { Box, Grid } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { Button, TextField, FormControl } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import im3 from "../../../Assets/background.jpg";
import { validCF } from "./reg";

export function SignUpClients() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [city, setCity] = useState("");
  const [nation, setNation] = useState("");
  const [address, setAddress] = useState("");

  const [err, setErr] = useState("");

  const [fiscalCode, setFiscalCode] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validCF.test(fiscalCode)) {
      //QUi chiamata api
    } else {
      setErr("Fiscal Code not valid");
    }
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
          width: "30rem",
          padding: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
        className={"center"}
      >
        <div>
          <h2>{"Sign Up as a Client"}</h2>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction={"row"}
              spacing={3}
              style={{ justifyContent: "center" }}
            >
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Surname"
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Date of Birth"
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Nation"
                  onChange={(e) => setNation(e.target.value)}
                />
              </Grid>

              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="FiscalCode"
                  onChange={(e) => setFiscalCode(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
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
              </Grid>
              <Grid item md="10">
                <Button
                  type="submit"
                  variant="outlined"
                  style={{ float: "right" }}
                >
                  Register
                </Button>
                {err}
              </Grid>
            </Grid>
          </form>
        </div>
      </Box>
    </>
  );
}
export function SignUpPromoters() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [nation, setNation] = useState("");
  const [fiscalCode, setFiscalCode] = useState("");

  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validCF.test(fiscalCode)) {
      //QUi chiamata api
    } else {
      setErr("Fiscal Code not valid");
    }
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
          width: "30rem",
          padding: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
        className={"center"}
      >
        <div>
          <h2>{"Sign Up as a Promoter"}</h2>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction={"row"}
              spacing={3}
              style={{ justifyContent: "center" }}
            >
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Surname"
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Date of Birth"
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Nation"
                  onChange={(e) => setNation(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="FiscalCode"
                  onChange={(e) => setFiscalCode(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <FormControl
                  variant="outlined"
                  onChange={(e) => setPassword(e.target.value)}
                >
                  <InputLabel required htmlFor="outlined-adornment-password">
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
              </Grid>
              <Grid item md="10">
                <Button
                  type="submit"
                  variant="outlined"
                  style={{ float: "right" }}
                >
                  Register
                </Button>
                {err}
              </Grid>
            </Grid>
          </form>
        </div>
      </Box>
    </>
  );
}

export function SignUpArtist() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [nation, setNation] = useState("");
  const [fiscalCode, setFiscalCode] = useState("");

  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validCF.test(fiscalCode)) {
      //QUi chiamata api
    } else {
      setErr("Fiscal Code not valid");
    }
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
          width: "30rem",
          padding: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
        className={"center"}
      >
        <div>
          <h2>{"Sign Up as a Artist"}</h2>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction={"row"}
              spacing={3}
              style={{ justifyContent: "center" }}
            >
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Surname"
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Date of Birth"
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="Nation"
                  onChange={(e) => setNation(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <TextField
                  required
                  id="outlined-required"
                  label="FiscalCode"
                  onChange={(e) => setFiscalCode(e.target.value)}
                />
              </Grid>
              <Grid item md="5">
                <FormControl
                  variant="outlined"
                  onChange={(e) => setPassword(e.target.value)}
                >
                  <InputLabel required htmlFor="outlined-adornment-password">
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
              </Grid>
              <Grid item md="10">
                <Button
                  type="submit"
                  variant="outlined"
                  style={{ float: "right" }}
                >
                  Register
                </Button>
                {err}
              </Grid>
            </Grid>
          </form>
        </div>
      </Box>
    </>
  );
}
