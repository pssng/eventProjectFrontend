import { Outlet } from "react-router";
import "../App.css";
import { Box, Paper, Stack, Typography } from "@mui/material";
import ResponsiveAppBar from "./Components/AppBar";

export const Layout = (props) => {

  return (
    <Stack className="App">
      <header className="App-header">
        <ResponsiveAppBar 
         userObj={{user:props.userObj.user, setUser:props.userObj.setUser}}/>
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
