import { Outlet } from "react-router";
import "../App.css";
import { Box, Paper, Stack, Typography } from "@mui/material";
import ResponsiveAppBar from "./Components/AppBar";

export const Layout = (props) => {
  console.log("LAYOUT: " + props.isAuth);

  return (
    <Stack className="App">
      <header className="App-header">
        <ResponsiveAppBar isAuth={props.isAuth} setIsAuth={props.setIsAuth} />
        {/* <Typography component={"i"} variant="h3" textAlign={"center"}>
          ArtEvents
        </Typography> */}
      </header>

      <Outlet />
      {/* 
      <footer className="App-footer" >
        hchgv
        Made with 🖤 by Partenope Students. 
      </footer>
      */}
    </Stack>
  );
};
