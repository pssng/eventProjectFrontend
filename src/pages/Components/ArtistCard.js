import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SmallPlaceIcon from "@mui/icons-material/Place";
import StaticRating from "./StaticRating";
import cardartist from "../../Assets/cardartist.jpg"
export function ArtistCard({ nome, cognome, luogo, image, rating }) {
  const navigate = useNavigate();
  return (
    <Stack
      padding={"1rem"}
      alignItems={"center"}
      spacing={2}
      justifyContent={"space-around"}
      style={{
        width: "20rem",
        wordWrap: "breakWord",
        textAlign: "center",
        backgroundImage: `url(${cardartist})`
      }}
      border="1px black groove"
      borderRadius="30px"
    >
      <img
        src={image}
        style={{
          width: "100%",
          height: "10rem",
          objectFit: "cover",
          borderTopRightRadius: "30px",
          borderTopLeftRadius: "30px"
        }}
      ></img>
      <Typography component={"i"} variant="h6">
        <b>
          {nome} {cognome}
        </b>
      </Typography>
      <Typography>
        <SmallPlaceIcon fontSize="small" /> {`  ${luogo} `}

      </Typography>
      <>
        <StaticRating value={rating} /></>
      <Button
        variant="outlined"
        onClick={() => {
          navigate("/ArtistPage", {
            replace: true,
            state: {
              nome,
              cognome,
              luogo,
              image,
            },
          });
        }}
      >
        {" "}
        Show More
      </Button>
    </Stack>
  );
}
