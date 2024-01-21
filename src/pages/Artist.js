import { Typography, Grid, Box } from "@mui/material";
import paolo from "../Assets/paolo.jpg";
import armando from "../Assets/armando.png";
import angelo from "../Assets/angelo.jpg";
import raffaele from "../Assets/raffaele.png";
import { ArtistCard } from "./Components/ArtistCard";
export const Artist = () => {
  const artists = [
    {
      nome: "Paolo",
      cognome: "Coletta",
      luogo: "Mugnano di Napoli",
      image: paolo,
      rating: 5,
    },
    {
      nome: "Armando",
      cognome: "Cobucci",
      luogo: "Paestum",
      image: armando,
      rating: 5,
    },
    {
      nome: "Angelo",
      cognome: "Ciaramella",
      luogo: "Caserta",
      image: angelo,
      rating: 2,
    },
    {
      nome: "Raffaele",
      cognome: "Montella",
      luogo: "Napoli",
      image: raffaele,
      rating: 4,
    },
  ];
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
            <Grid item>
              <ArtistCard
                nome={artist.nome}
                cognome={artist.cognome}
                luogo={artist.luogo}
                image={artist.image}
                rating={artist.rating}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
