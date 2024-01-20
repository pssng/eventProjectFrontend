import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import eventImage from "../../Assets/event3.jpg";
import { Typography, Stack, Button } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function CardLarge({
  descrizione,
  nome,
  id,
  organizzatore,
  prezzo,
  startDate,
  endDate,
  img,
  luogo,
  categoria,
  emailOrganizzatore,
}) {
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <Card style={{ width: "15rem",textAlign:'center' }}>
      <CardMedia
        component="img"
        height="100"
        image={eventImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descrizione}
        </Typography>
      </CardContent>
      <Stack direction={"row"} justifyContent={"space-around"}>
        <IconButton
          aria-label="add to favorites"
          onClick={handleFavoriteClick}
          color={isFavorited ? "white" : "default"}
        >
          {isFavorited ? (
            <FavoriteIcon style={{ fontSize: 30, color: "red" }} />
          ) : (
            <FavoriteBorderIcon style={{ fontSize: 30, color: "black" }} />
          )}
        </IconButton>
        <IconButton
        variant="text"
        
          onClick={() => {
            navigate("/EventPage", {
              replace: true,
              state: {
                descrizione,
                nome,
                id,
                organizzatore,
                prezzo,
                startDate,
                endDate,
                img,
                luogo,
                categoria,
                emailOrganizzatore,
              },
            });
          }}
        ><KeyboardDoubleArrowRightIcon/>
        </IconButton>
      </Stack>
    </Card>
  );
}
export default CardLarge;
