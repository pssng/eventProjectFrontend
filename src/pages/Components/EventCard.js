import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
export function EventCard({
  id,
  nome,
  descrizione,
  organizzatore,
  prezzo,
  startDate,
  endDate,
  img,
  luogo,
  categoria,
  emailOrganizzatore,
  location,
}) {
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
      border="1px black groove"
      borderRadius= "30px"
      bgcolor= "rgba(255,255,240)"

    >
      <img
        src={img}
        style={{
          width: "100%",
          height: "10rem",
          objectFit: "cover",
          borderTopRightRadius:"30px",
          borderTopLeftRadius: "30px"
        }}
      ></img>
      <Typography component={"i"} variant="h6">
        <b>{nome}</b>
      </Typography>
      <Typography variant="subtitle">
        <i>On:</i>
        {`  ${startDate} to ${endDate}`}
      </Typography>
      <Typography>
        <PlaceIcon />
        {`  ${luogo} `}
      </Typography>
      <Typography component={"subtitle"}>
        <i>Category:</i>
        {`  ${categoria} `}
      </Typography>
      {/* <Typography component={'div'} variant="body1" sx ={{ textOverflow: 'ellipsis', overflow: 'hidden',
            whiteSpace: 'nowrap'}}>{descrizione}</Typography>
        */}
      <Typography align="right" variant="caption" style={{ marginRight: "1rem" }}  >
        <i>By: {`${organizzatore}`}</i>
        
      </Typography>
      {<hr />}
      {
        <Typography align="right" variant="body1" style={{ marginRight: "1rem" }}  >
          <b>Ticket Price: ${`${prezzo} `}</b>
        </Typography>
      }
      {prezzo && (
        <Button
          onClick={() => {
            navigate("/EventPage", {
              replace: true,
              state: {
                id,
                categoria,
                nome,
                luogo,
                descrizione,
                organizzatore,
                emailOrganizzatore,
                prezzo,
                startDate,
                endDate,
                img,
                location,
              },
            });
          }}
        >
          {" "}
          Show More
        </Button>
      )}
    </Stack>
  );
}
