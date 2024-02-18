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
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Alert from "@mui/material/Alert";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export function SignUpClients() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = React.useState(dayjs("2022-04-17"));
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [imageProfile, setImageProfile] = useState("");
  const [err, setErr] = useState("");
  const [fiscalCode, setFiscalCode] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validCF.test(fiscalCode)) {
      const apiUrl = "http://127.0.0.1:8080/public/new_customer";

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fiscalCode: fiscalCode,
            password: password,
            name: name,
            surname: surname,
            city: city,
            address: address,
            birthDate: birthday,
            email: email,
            imgPath: imageProfile,
          }),
        });

        if (response.ok) {
          <Alert severity="success">
            "User " + {fiscalCode} + " signed up successfully."
          </Alert>;
        }
      } catch (error) {
        console.error("Error during signup:", error);

        <Alert severity="error">
          Failed to sign up. Please try again later.
        </Alert>;
      }
    } else {
      setErr("Invalid Fiscal Code");
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
          <h2>{"Sign Up as a Customer"}</h2>
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    required
                    label="Birth Date"
                    defaultValue={dayjs("2022-04-17")}
                    // con il backend usare = label="Controlled field"
                    // con il backend usare = value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </LocalizationProvider>
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
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(e) => setImageProfile(e.target)}
                  />
                </Button>
              </Grid>
              <Grid item md="10">
                <Button
                  type="submit"
                  variant="outlined"
                  style={{ float: "right" }}
                >
                  Sign In
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
  const [fiscalCode, setFiscalCode] = useState("");

  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validCF.test(fiscalCode)) {
      const apiUrl = "http://127.0.0.1:8080/public/new_promoter";

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fiscalCode: fiscalCode,
            password: password,
            name: name,
            surname: surname,
            city: city,
            address: address,
            birthDate: birthday,
            email: email,
          }),
        });

        if (response.ok) {
          alert("User " + fiscalCode + " signed up successfully.");
        } else {
          const errorText = await response.text();
          alert("Failed to sign up. Server error: " + errorText);
        }
      } catch (error) {
        console.error("Error during signup:", error);
        alert("Failed to sign up. Please try again later.");
      }
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    required
                    label="Birth Date"
                    defaultValue={dayjs("2022-04-17")}
                    // con il backend usare = label="Controlled field"
                    // con il backend usare = value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </LocalizationProvider>
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
                  Sign In
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
  const [fiscalCode, setFiscalCode] = useState("");

  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validCF.test(fiscalCode)) {
      const apiUrl = "http://127.0.0.1:8080/public/new_artist";

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fiscalCode: fiscalCode,
            password: password,
            name: name,
            surname: surname,
            city: city,
            address: address,
            birthDate: birthday,
            email: email,
          }),
        });

        if (response.ok) {
          alert("User " + fiscalCode + " signed up successfully.");
        } else {
          const errorText = await response.text();
          alert("Failed to sign up. Server error: " + errorText);
        }
      } catch (error) {
        console.error("Error during signup:", error);
        alert("Failed to sign up. Please try again later.");
      }
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    required
                    label="Birth Date"
                    defaultValue={dayjs("2022-04-17")}
                    // con il backend usare = label="Controlled field"
                    // con il backend usare = value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </LocalizationProvider>
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
                  Sign In
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
