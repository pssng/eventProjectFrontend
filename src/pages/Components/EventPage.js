import {
  Box,
  Card,
  Stack,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
  Button,
  Rating,
} from "@mui/material";
import * as React from "react";
import EventIcon from "@mui/icons-material/Event";
import PlaceIcon from "@mui/icons-material/Place";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useLocation } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ModalRequestArtistForPromoter from "./ModalRequestArtistForPromoter";
import { Link } from "react-router-dom";
import ModalPayment from "./ModalPayment";
import axios from "axios";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export function EventPage(props) {
  const locationR = useLocation();
  const generals = JSON.parse(localStorage.getItem("userGenerals"));
  const apiUrl = "http://localhost:8080/public";
  const [isFavorited, setIsFavorited] = useState();
  const [isFavoritedId, setIsFavoritedId] = useState();
  const fiscalCode = generals.fiscalCode;
  const eventId = locationR.state.id;
  const apiUrl1 = "http://localhost:8080/auth/reviews";
  const [reviewData, setReviewData] = useState({
    reviewTitle: "",
    reviewText: "",
    reviewRating: 0,
  });
  const handleReviewSubmit = async () => {
    // Controlla se reviewRating è diverso da 0 prima di inviare la richiesta
    if (reviewData.reviewRating === 0) {
      return;
    }

    const token = localStorage.getItem("authKey");

    try {
      const reviewDto = {
        reviewData: {
          reviewTitle: "",
          reviewText: "",
          reviewRating: reviewData.reviewRating,
        },
        eventId: eventId,
      };

      const response = await axios.post(apiUrl1 + "/to_event", reviewDto, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response data:", response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to submit the review. Please try again later.");
    }
  };

  useEffect(() => {
    handleReviewSubmit();
  }, [reviewData.reviewRating]); // Chiamare handleReviewSubmit ogni volta che reviewData.reviewRating cambia

  const fetchisfav = async () => {
    await axios.get(apiUrl + `/viewAll/${fiscalCode}`).then((resp) => {
      setIsFavorited(
        resp.data.filter((el) => el.eventId !== eventId).length > 0
      );
      setIsFavoritedId(resp.data[0]?.id);
    });
  };
  fetchisfav();
  const [quantity, setQuantity] = useState(1);

  const handleFavoriteClick = async () => {
    try {
      // Verifica lo stato corrente del pulsante

      if (isFavorited) {
        // Se l'elemento è già nei preferiti, esegui la chiamata API per rimuoverlo dai preferiti
        await removeFromFavorites();
        window.location.reload();
      } else {
        // Altrimenti, esegui la chiamata API per aggiungere l'elemento ai preferiti
        await addToFavorites();
        window.location.reload();
      }

      // Aggiorna lo stato del pulsante dei preferiti
    } catch (error) {
      console.error("Errore durante il cambio di stato dei preferiti:", error);
      // Gestisci eventuali errori qui
    }
  };

  const addToFavorites = async () => {
    try {
      const fiscalCode = generals.fiscalCode;
      const eventId = locationR.state.id;
      if (!fiscalCode) {
        console.error("Codice fiscale utente non valido");
        return;
      }

      const requestBody = {
        fiscalCode: fiscalCode,
        eventId: eventId,
      };

      await axios.post(apiUrl + "/addFav", requestBody);

      // Handle successful addition to favorites
      console.log("Added to favorites successfully");
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const removeFromFavorites = async () => {
    try {
      const eventId = locationR.state.id;
      const response = await axios.delete(
        apiUrl + `/removeFav/${isFavoritedId}`
      );
      if (response.status === 200) {
        // Handle successful deletion
        console.log("Favorite deleted successfully");
        // Update the UI to reflect the deletion
        // For example, remove the favorite from the list of favorites
      } else {
        // Handle error
        console.error("Error deleting favorite:", response.data);
      }
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };

  console.log("ID: " + locationR.state.id);

  const handleCollaborate = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `/auth/request/artist/${locationR.state.id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to collaborate with promoter.");
      }

      // Handle successful collaboration
      console.log("Collaboration request successful");
    } catch (error) {
      console.error("Error collaborating with promoter:", error.message);
    }
  };

  return (
    <Box style={{ textAlign: "left", padding: "1rem" }}>
      <Link to={locationR.state.location}>
        <Button startIcon={<KeyboardDoubleArrowLeftIcon />}> Back</Button>
      </Link>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="70vh"
        spacing={3}
      >
        <Grid item xs={12} md={6} xl={9}>
          <Card sx={{ height: "80vh", textAlign: "center" }}>
            <CardMedia
              component="img"
              height="200rem"
              image={locationR.state.img}
              alt="event photo"
            />
            <CardContent>
              <Stack direction={"row"} justifyContent={"space-around"}>
                <Typography variant="body1" component={"div"}>
                  {" "}
                  <PlaceIcon
                    style={{ fontSize: 30, verticalAlign: "middle" }}
                  />
                  {locationR.state.luogo}
                </Typography>

                <Typography variant="body1" component={"div"}>
                  {" "}
                  <EventIcon
                    style={{ fontSize: 30, verticalAlign: "middle" }}
                  />{" "}
                  <i>
                    {" "}
                    <b>from</b>
                  </i>
                  {" " + locationR.state.startDate + " "}
                  <i>
                    <b>to</b>
                  </i>
                  {" " + locationR.state.endDate}
                </Typography>
              </Stack>

              <Typography
                gutterBottom
                variant="h4"
                component="div"
                margin={"1rem"}
              >
                {locationR.state.nome}
              </Typography>

              <hr style={{ color: "lightgray", width: "70%" }} />

              <Typography
                variant="body1"
                component={"div"}
                olor="text.secondary"
                margin={"2rem 1rem 0 1rem "}
                style={{ overflow: "auto", height: "10rem" }}
              >
                {locationR.state.descrizione}
              </Typography>
            </CardContent>
            {/*TICKET ZONE */}
            <CardContent>
              <hr style={{ color: "lightgray" }} />
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography
                    style={{
                      textAlign: "left",
                    }}
                  >
                    Are you an artist?
                    <button
                      style={{
                        border: "none",
                        background: "none",
                        color: "blue",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={handleCollaborate}
                    >
                      {" "}
                      COLLABORATE{" "}
                    </button>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    color="text.primary"
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <b>Ticket Price: ${locationR.state.prezzo} </b>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* INIZIO LISTA LATERALE */}
        <Grid item xs={12} md={4} xl={3}>
          <Box
            style={{
              backgroundColor: `#22223B`,
              height: "80vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/*DETTAGLI DELL'EVENTO */}

            <Grid container item direction="column" xs={5} spacing={1}>
              <Grid item xs={5}>
                <ul
                  style={{
                    listStyleType: "none",
                  }}
                >
                  <Typography
                    style={{
                      color: "white",
                      width: 300,
                      height: "2rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    EVENT DETAILS
                  </Typography>

                  <li
                    style={{
                      margin: "0.5rem",
                      borderBottom: "1px solid rgba(232, 232, 232)",
                    }}
                  >
                    <Typography
                      style={{
                        color: "white",
                      }}
                    >
                      Start:
                    </Typography>
                    <Typography style={{ color: "gray" }}>
                      {locationR.state.startDate}
                    </Typography>
                  </li>

                  <li
                    style={{
                      margin: "0.5rem",
                      borderBottom: "1px solid rgba(232, 232, 232)",
                    }}
                  >
                    <Typography
                      style={{
                        color: "white",
                      }}
                    >
                      End:
                    </Typography>
                    <Typography style={{ color: "gray" }}>
                      {locationR.state.endDate}
                    </Typography>
                  </li>

                  <li
                    style={{
                      margin: "0.5rem",
                      borderBottom: "1px solid rgba(232, 232, 232)",
                    }}
                  >
                    <Typography
                      style={{
                        color: "white",
                      }}
                    >
                      Category:
                    </Typography>
                    <Typography style={{ color: "gray" }}>
                      {locationR.state.categoria}
                    </Typography>
                  </li>
                </ul>
              </Grid>

              {/*DETTAGLI DEL PROMOTER */}

              <Grid item>
                <ul
                  style={{
                    listStyleType: "none",
                  }}
                >
                  <Typography
                    style={{
                      color: "white",
                      width: 300,
                      height: "2rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    PROMOTER DETAILS
                  </Typography>

                  <li
                    style={{
                      margin: "0.5rem",
                      borderBottom: "1px solid rgba(232, 232, 232)",
                    }}
                  >
                    <Typography
                      style={{
                        color: "white",
                      }}
                    >
                      Promoter:
                    </Typography>
                    <Typography style={{ color: "gray" }}>
                      {locationR.state.organizzatore}
                    </Typography>
                  </li>

                  <li
                    style={{
                      margin: "0.5rem",
                      borderBottom: "1px solid rgba(232, 232, 232)",
                    }}
                  >
                    <Typography
                      style={{
                        color: "white",
                      }}
                    >
                      Email:
                    </Typography>
                    <Typography style={{ color: "gray" }}>
                      {locationR.state.emailOrganizzatore}
                    </Typography>
                  </li>
                </ul>
              </Grid>
            </Grid>
            <Box style={{ marginTop: "7rem" }}>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography component={"div"} variant="body1" color="white">
                  Add to favorites
                </Typography>
                <IconButton
                  aria-label="add to favorites"
                  onClick={handleFavoriteClick}
                  color={isFavorited ? "white" : "default"}
                >
                  {isFavorited ? (
                    <FavoriteIcon style={{ fontSize: 30, color: "white" }} />
                  ) : (
                    <FavoriteBorderIcon
                      style={{ fontSize: 30, color: "white" }}
                    />
                  )}
                </IconButton>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography component={"div"} variant="body1" color="white">
                  Buy Now
                </Typography>
                <ModalPayment
                  eventName={locationR.state.nome}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  id={locationR.state.id}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white", // Coloriamo il testo di bianco
                }}
              >
                <Typography component={"div"} variant="body1">
                  Rate us
                </Typography>
                <Rating
                  value={reviewData.reviewRating}
                  onChange={(event, newValue) => {
                    setReviewData((prevData) => ({
                      ...prevData,
                      reviewRating: newValue,
                    }));
                  }}
                  emptyIcon={<StarBorderIcon style={{ color: "white" }} />}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
