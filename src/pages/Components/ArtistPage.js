import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import ModalRequestPromoterForArtist from "./ModalRequestPromoterForArtist";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Link, useLocation } from "react-router-dom";

export function ArtistPage() {
  const locationA = useLocation();
  return (
    <Box style={{ textAlign: "left", padding: "1rem" }}>
      <Link to={"/artists"}>
        <Button startIcon={<KeyboardDoubleArrowLeftIcon />}> Back</Button>
      </Link>

      <Card sx={{ maxWidth: 800, textAlign: "center", margin: "auto" }}>
        <CardMedia
          component="img"
          height="500rem"
          image={locationA.state.image}
          alt="artist photo"
          style={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {locationA.state.nome} {locationA.state.cognome}
          </Typography>
          <Typography variant="body1" component={"div"}>
            {" "}
            <PlaceIcon style={{ fontSize: 30, verticalAlign: "middle" }} />
            {locationA.state.luogo}
          </Typography>
        </CardContent>

        <CardActions style={{ marginTop: "3rem" }}>
          <Link to="/GenericArtwork" style={{ margin: "auto" }}>
            <Button size="large">Artworks</Button>
          </Link>
          <ModalRequestPromoterForArtist/>
          <Link to="/GenericReview" style={{ margin: "auto" }}>
            <Button size="large">Reviews</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
