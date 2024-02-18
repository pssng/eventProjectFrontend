import { EventCard } from "./Components/EventCard";
import Divider, { Typography, Grid } from "@mui/material";
import { Box, Stack } from "@mui/material";
import event1 from "../Assets/event1.jpg";
import event2 from "../Assets/event2.jpg";
import event3 from "../Assets/event3.jpg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Rating from "./Rating";


export const Catalog = () => {
  const [events, setEvents] = useState([]);

  const apiUrl = "http://127.0.0.1:8080/public/events/get_all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setEvents(data); // Imposta lo stato degli artisti con i dati ottenuti dalla chiamata API
        } else {
          console.error("Errore durante la chiamata API:", response.statusText);
        }
      } catch (error) {
        console.error("Errore durante la chiamata API:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

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
          height: "70vh",
          textAlign: "left",
          overflowX: "scroll",
        }}
      >
        <Grid
          container
          direction={"row"}
          justifyContent={"space-around"}
          spacing={2}
        >
          {events.map((event) => (
            <Grid item>
              <EventCard
                id={event.eventId}
                emailOrganizzatore={event.emailOrganizzatore}
                luogo={event.locationAddress + ", " + event.locationCity}
                categoria={event.eventCategory}
                nome={event.eventName}
                organizzatore={event.eventPromoter}
                startDate={event.eventStartDate}
                endDate={event.eventEndDate}
                prezzo={event.eventPrice}
                descrizione={event.eventDescription}
                img={event.img}
                location={location.pathname}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
