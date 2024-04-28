import { Box, Stack, Link, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  FormControl,
} from "@mui/material";
import im3 from "../../../Assets/background.jpg";
import { sendLoginRequest } from "../../../pages/api/api";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [CF, setCF] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    sendLoginRequest(CF, password);
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
          <h2>Login</h2>
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
                <Grid item md={4}>
                  {" "}
                  <Link href={"/forgotPassword"}>{"Forgot Password?"}</Link>
                </Grid>
                <Grid item md={5}>
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
