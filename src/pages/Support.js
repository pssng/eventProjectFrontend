import { Box, Grid, Typography } from "@mui/material";
import im3 from "../Assets/background.jpg";

export const Support = () => {

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

        /* Stili del link */
        .link {
          color: #1976d2; 
          text-decoration: none; 
          font-weight: bold;
          transition: color 0.3s ease; 
        }

        .link:hover {
          color: #1565c0; 
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
        bgcolor={"aliceblue"}
      >
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Typography variant={"h4"} component={"i"}>
              {"Hai bisogno di aiuto?"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"subtitle"} component={"div"}>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="link">Contatta il support di JustArt</a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
