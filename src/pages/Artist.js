import { Typography, Grid, Box } from "@mui/material";
import { ArtistCard } from "./Components/ArtistCard";
import { useState, useEffect } from "react";
import axios from "axios";

export const Artist = () => {
  const [artists, setArtists] = useState([]);

  const apiUrl = "http://127.0.0.1:8080/public/our_artists";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(apiUrl).then(resp=>setArtists(resp.data))
      } catch (error) {
        console.error("Errore durante la chiamata API:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <>
      <Typography variant="h4" component={"div"} style={{ margin: "0.5rem" }}>
        Our Artists <hr style={{ width: "70%", color: "lightgray" }} />
      </Typography>

      <Box
        style={{
          margin: "1rem",
          border: "groove 1px gray",
          borderRadius: "10px",
          height: "80vh",
          padding: "2rem",
          textAlign: "left",
          overflowX: "scroll",
        }}
      >
        <Grid container direction={"row"} spacing={2}>
          {artists.map((artist) => (
            <Grid item key={artist.id}>
              <ArtistCard
                nome={artist.name}
                cognome={artist.surname}
                luogo={artist.city}
                // image= {artist.imgPath}
                rating={artist.ratingAvg}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};