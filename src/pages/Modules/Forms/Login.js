import { Box, Stack, Link, Grid } from "@mui/material";
import { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import im3 from "../../../Assets/background.jpg";

export function LoginAdmin() {
  const [CF, setCF] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", CF);
    console.log("Password:", password);
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
                variant="standard"
                onChange={(e) => setCF(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <TextField
                required
                id="password"
                label="Password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
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

export function LoginClients() {
  const [CF, setCF] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", CF);
    console.log("Password:", password);
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
                id="email"
                label="Fiscal Code"
                variant="standard"
                onChange={(e) => setCF(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <TextField
                required
                id="password"
                label="Password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
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

export function LoginPromoters() {
  const [CF, setCF] = useState("");

  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Fiscal Code:", CF);
    console.log("Password:", password);
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
                variant="standard"
                onChange={(e) => setCF(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <TextField
                required
                id="password"
                label="Password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
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
  const [CF, setCF] = useState("");

  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Fiscal Code:", CF);
    console.log("Password:", password);
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
                variant="standard"
                onChange={(e) => setCF(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <TextField
                required
                id="password"
                label="Password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
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
