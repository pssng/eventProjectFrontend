import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import event1 from "../../Assets/event1.jpg";
import event2 from "../../Assets/event2.jpg";
import event3 from "../../Assets/event3.jpg";
import CardOpere from "./CardOpere";
import { useState } from "react";
const GenericArtwork = () => {
  const [opere, setOpere] = useState([
    {
      nome: "venere",
      descrizione: "lorem impsWEEEjdhuceh",
      img: event1,
    },
    {
      nome: "Bacio",
      descrizione: "lorem impsWEEEjdhuceh",
      img: event2,
    },
    {
      nome: "Infinito",
      descrizione: "lorem impsWEEEjdhuceh",
      img: event3,
    },
  ]);
  return (
    <Box style={{ display: "block", width: "100%" }}>
      <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
        Artworks
      </Typography>
      <hr style={{ width: "70%", color: "lightgray" }} />
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
        <Grid container direction={"row"} justifyContent={"space-around"}>
          {opere.map((op) => (
            <Grid item container md={3}>
              <Card style={{ width: "15rem", textAlign: "left" }}>
                <CardMedia
                  component="img"
                  height="100"
                  image={op.img}
                  alt="green iguana"
                />
                <Grid
                  container
                  direction={"row"}
                  justifyContent={"space-around"}
                >
                  <Grid item>
                    {" "}
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {op.nome}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {op.descrizione}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default GenericArtwork;
