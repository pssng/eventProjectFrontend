import { EventCard } from "./Components/EventCard";
import Divider, { Typography, Grid } from "@mui/material";
import { Box, Stack } from "@mui/material";
import event1 from "../Assets/event1.jpg";
import event2 from "../Assets/event2.jpg";
import event3 from "../Assets/event3.jpg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Rating from "./Components/Rating";
import axios from "axios";

export const Catalog = () => {
  const [events, setEvents] = useState([]);

  const apiUrl = "http://localhost:8080/public/events/get_all";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(apiUrl);
        // Otteniamo i dati dall'API
        const eventList = response.data;
        // Impostiamo lo stato degli eventi con l'array ricevuto
        setEvents(eventList);
      } catch (error) {
        console.error("Errore durante il recupero degli eventi:", error);
      }
    };

    // Chiamiamo la funzione per recuperare gli eventi quando il componente viene montato
    fetchEvents();
  }, []); // La dipendenza vuota assicura che questa chiamata venga fatta solo una volta

  let location = useLocation();
  return (
    <>
      <Typography variant="h4" component={"div"} style={{ margin: "0.5rem" }}>
        Our Events <hr style={{ width: "70%", color: "lightgray" }} />
      </Typography>

      <Box
        style={{
          margin: "0 2rem",
          border: "groove 1px gray",
          borderRadius: "10px",
          height: "80vh",
          textAlign: "left",
          overflowX: "scroll",
        }}
      >
        <Grid
          padding={2}
          container
          direction={"row"}
          justifyContent={"space-around"}
          spacing={2}
        >
          {events.length > 0 &&
            events.map((event) => (
              <Grid item key={event.eventId}>
                <EventCard
                  emailOrganizzatore={event.promoterEmail}
                  luogo={
                    event.locationAddress +
                    ", ( " +
                    event.locationCity +
                    " ) " +
                    event.locationName
                  }
                  categoria={event.eventCategory}
                  nome={event.eventName}
                  organizzatore={event.promoterInfo}
                  startDate={event.eventStartDate}
                  endDate={event.eventEndDate}
                  prezzo={event.eventPrice}
                  descrizione={event.eventDescription}
                  img={event.eventPicPath}
                  id={event.eventId}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};
