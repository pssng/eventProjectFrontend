import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SmallPlaceIcon from "@mui/icons-material/Place";
import StaticRating from "./StaticRating";
export function ArtistCard({ nome, cognome, luogo, image, rating }) {
  const navigate = useNavigate();
  return (
    <Stack
      margin={"1rem"}
      spacing={2}
      justifyContent={"space-around"}
      style={{
        width: "20rem",
        wordWrap: "breakWord",
        textAlign: "center",
        
      }}
      border="1 black groove"
      borderRadius= "30px"
      bgcolor= "rgba(255, 255, 255, 0.5)"
    >
      <img
        src={image}
        style={{
          width: "100%",
          height: "10rem",
          objectFit: "cover",
          borderTopRightRadius:"30px",
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

      <div style={{ margin: "auto" }}>
        <StaticRating value={rating} />
      </div>

      {<hr />}
      <Button
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
