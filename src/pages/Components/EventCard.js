import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
export function EventCard({
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
}) {
  const navigate = useNavigate();
  return (
    <Stack
    margin={'1rem'}
      spacing={1}
      style={{
        width: "15rem",
        wordWrap: "breakWord",
        textAlign: "center",
      }}
    >
      <img
        src={img}
        style={{
          border: "1px solid #ddd",
          bordeRadius: "4px",
          padding: "5px",
          width: "14rem",
          height: "7rem",
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
      <Typography align="right" variant="caption">
        <i>By:</i>
        {`   ${organizzatore}`}
      </Typography>
      {<hr />}
      {
        <Typography align="right" variant="body1">
          <b>Price:</b>
          {`   ${prezzo} `}
        </Typography>
      }
      {prezzo && (
        <Button
          onClick={() => {
            navigate("/EventPage", {
              replace: true,
              state: {
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
