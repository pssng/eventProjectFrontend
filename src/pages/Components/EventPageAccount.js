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
import ModalReview from "./ModalReview";

export function EventPageAccount() {
  const locationR = useLocation();
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Box style={{ textAlign: "left", padding: "1rem" }}>
      <Link to={"/Account"}>
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
                  {locationR.state.eventRegion}
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
                {locationR.state.eventDescription}
              </Typography>
            </CardContent>
            {/*TICKET ZONE */}
            <CardContent>
              <hr style={{ color: "lightgray" }} />
              <Grid container justifyContent="center">
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Typography>
                    Did you like the event? Let us know what do you think!
                  </Typography>
                  <Link to="/GenericReview" style={{ margin: "auto" }}>
                    <Button size="large">Leave a review</Button>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* INIZIO LISTA LATERALE */}
        <Grid item xs={12} md={4} xl={3}>
          <Box
            style={{
              backgroundColor: `black`,
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
                      {locationR.state.eventCategory}
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
                      {locationR.state.eventPromoter}
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
