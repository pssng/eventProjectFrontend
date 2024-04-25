import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Grid, TextField, IconButton } from "@mui/material";
import { EventCard } from "./Components/EventCard";
import event1 from "../Assets/event1.jpg";
import event2 from "../Assets/event2.jpg";
import event3 from "../Assets/event3.jpg";
import CardLarge from "./Components/CardFavorites";
import { Request } from "./Modules/Forms/Request";
import { useTheme } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import CardOpere from "./Components/CardOpere";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import AccountMenu from "./Components/AccountMenu";
import { useMediaQuery } from "react-responsive";
import PaletteIcon from "@mui/icons-material/Palette";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import HistoryIcon from "@mui/icons-material/History";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Review from "./Components/Review";
import ModalReview from "./Components/ModalReview";
import ModalUploadArtwork from "./Components/ModalUploadArtwork";
import { retrieveGenerals, retriveRole } from "./api/api";
import axios from "axios";
import { useEffect } from "react";
const drawerWidth = 240;
const generals = JSON.parse(localStorage.getItem("userGenerals"));
const role = localStorage.getItem("userRole");

export function AccountClient() {
  const [currentSection, setCurrentSection] = useState("Profile");

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/public/events/get_all";

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
    fetchEvents();
  }, []);
  const theme = useTheme();

  const renderSection = () => {
    switch (currentSection) {
      case "Profile":
        return renderProfileSection(generals, role);
      case "Tickets":
        return renderTicketSection();
      case "Favorites":
        return renderFavoritesSection();
      case "History of Events":
        return renderhistoryEventsSection();

      default:
        return null;
    }
  };

  const renderTicketSection = () => {
    return (
      <Box style={{ display: "block" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Tickets
          <Link to={"../events"} style={{ float: "right" }}>
            <IconButton color="success" fontSize={"inherit"}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Link>
          <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "80vh",
            padding: "2rem",
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
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };
  const renderhistoryEventsSection = () => {
    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          History Events <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "2rem",
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
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };

  const renderFavoritesSection = () => {
    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Favorites <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "2rem",
            textAlign: "left",
            overflowX: "scroll",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={3}
            justifyContent={"space-around"}
          >
            {events.map((event) => (
              <Grid item>
                {" "}
                <CardLarge
                  nome={event.eventName}
                  organizzatore={event.promoterInfo}
                  data={event.eventStartDate + " " + event.eventEndDate}
                  prezzo={event.eventPrice}
                  descrizione={event.eventDescription}
                  img={event.eventPicPath}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };
  const renderProfileSection = (generals, role) => {
    console.log(generals);
    return (
      <Box
        style={{
          height: "30rem",
          width: "40rem",
          padding: "2rem",
          backgroundColor: "#a0c4ff",
        }}
        className="center"
      >
        <div
          style={{
            backgroundColor: "#eaf4f4",
            height: "30rem",
            width: "40rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          <Typography variant="h4" style={{ marginBottom: "1em" }}>
            Profile
          </Typography>
          <Grid
            container
            direction={"row"}
            spacing={3}
            style={{ justifyContent: "center" }}
          >
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue={generals.name}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Surname"
                defaultValue={generals.surname}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Date of Birth"
                defaultValue={generals.birthDate}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue={generals.email}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="City"
                defaultValue={generals.city}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Address"
                defaultValue={generals.address}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Fiscal Code"
                defaultValue={generals.fiscalCode}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Role"
                defaultValue={role}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  };
  const listOptions = [
    {
      text: "Profile",
      icon: <AccountBoxIcon style={{ color: "white" }} />,
    },
    {
      text: "Tickets",
      icon: <ConfirmationNumberIcon style={{ color: "white" }} />,
    },
    {
      text: "Favorites",
      icon: <FavoriteIcon style={{ color: "white" }} />,
    },
    {
      text: "History of Events",
      icon: <HistoryIcon style={{ color: "white" }} />,
    },
  ];

  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  return (
    <Box sx={{ display: isMobile ? "block" : "flex" }}>
      <CssBaseline />
      {isMobile ? (
        <AccountMenu
          currentSection={currentSection}
          listOptions={listOptions}
        />
      ) : (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "black",
              color: "white",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <Typography variant="h5">My Account</Typography>
          <Typography variant="caption" style={{ marginTop: "0px" }}>
            {" "}
            For Clients{" "}
          </Typography>
          <Divider />
          <List>
            {[
              {
                text: "Profile",
                icon: <AccountBoxIcon style={{ color: "white" }} />,
              },
              {
                text: "Tickets",
                icon: <ConfirmationNumberIcon style={{ color: "white" }} />,
              },
              {
                text: "Favorites",
                icon: <FavoriteIcon style={{ color: "white" }} />,
              },
              {
                text: "History of Events",
                icon: <HistoryIcon style={{ color: "white" }} />,
              },
              {
                text: "Logout",
                icon: <LogoutIcon style={{ color: "white" }} />,
                action: () => {
                  localStorage.clear(); window.location.reload();
                  window.location.assign("/login");
                },
              },
            ].map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() =>
                  item.text === "Logout"
                    ? item.action()
                    : setCurrentSection(item.text)
                }
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
      {renderSection()}
    </Box>
  );
}

export function AccountPromoters() {
  const [currentSection, setCurrentSection] = useState("Profile");

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/public/events/get_all";

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
    fetchEvents();
  }, []);
  const theme = useTheme();

  const renderSection = () => {
    switch (currentSection) {
      case "Profile":
        return renderProfileSection();
      // Aggiungi altri casi per le sezioni aggiuntive
      case "Tickets":
        return renderTicketSection();
      case "Favorites":
        return renderFavoritesSection();
      case "History of Events":
        return renderhistoryEventsSection();
      case "Proposed Events":
        return renderProposedEventsSection();
      case "Incoming Requests":
        return renderIncomingReqSection();
      case "Send a Request":
        return <Request></Request>;
      default:
        return null;
    }
  };

  const renderTicketSection = () => {
    return (
      <Box style={{ display: "block" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Tickets
          <Link to={"../events"} style={{ float: "right" }}>
            <IconButton color="success" fontSize={"inherit"}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Link>
          <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "80vh",
            padding: "2rem",
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
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };
  const renderhistoryEventsSection = () => {
    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          History Events <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "2rem",
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
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };

  const renderFavoritesSection = () => {
    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Favorites <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "2rem",
            textAlign: "left",
            overflowX: "scroll",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={3}
            justifyContent={"space-around"}
          >
            {events.map((event) => (
              <Grid item>
                {" "}
                <CardLarge
                  nome={event.eventName}
                  organizzatore={event.promoterInfo}
                  data={event.eventStartDate + " " + event.eventEndDate}
                  prezzo={event.eventPrice}
                  descrizione={event.eventDescription}
                  img={event.eventPicPath}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };
  const renderProposedEventsSection = () => {
    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Proposed Event <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "1rem",
            textAlign: "left",
          }}
        >
          No requests found
        </Box>
      </Box>
    );
  };

  const renderIncomingReqSection = () => {
    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Incoming Requests <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "2rem",
            textAlign: "left",
            overflowX: "scroll",
          }}
        >
          no data found
        </Box>
      </Box>
    );
  };

  const renderProfileSection = () => {
    return (
      <Box
        style={{
          height: "30rem",
          width: "40rem",
          padding: "2rem",
          backgroundColor: "#a0c4ff",
        }}
        className="center"
      >
        <div
          style={{
            backgroundColor: "#eaf4f4",
            height: "30rem",
            width: "40rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          <Typography variant="h4" style={{ marginBottom: "1em" }}>
            Profile
          </Typography>
          <Grid
            container
            direction={"row"}
            spacing={3}
            style={{ justifyContent: "center" }}
          >
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue={generals.name}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Surname"
                defaultValue={generals.surname}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Date of Birth"
                defaultValue={generals.birthDate}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue={generals.email}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="City"
                defaultValue={generals.city}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Address"
                defaultValue={generals.address}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Fiscal Code"
                defaultValue={generals.fiscalCode}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Role"
                defaultValue={role}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  };
  const listOptions = [
    {
      text: "Profile",
      icon: <AccountBoxIcon style={{ color: "white" }} />,
    },
    {
      text: "Tickets",
      icon: <ConfirmationNumberIcon style={{ color: "white" }} />,
    },
    {
      text: "Favorites",
      icon: <FavoriteIcon style={{ color: "white" }} />,
    },
    {
      text: "History of Events",
      icon: <HistoryIcon style={{ color: "white" }} />,
    },
    {
      text: "Proposed Events",
      icon: <CalendarViewDayIcon style={{ color: "white" }} />,
    },
    {
      text: "Incoming Requests",
      icon: <InsertDriveFileIcon style={{ color: "white" }} />,
    },
    {
      text: "Send a Request",
      icon: <ForwardToInboxIcon style={{ color: "white" }} />,
    },
  ];
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  return (
    <Box sx={{ display: isMobile ? "block" : "flex" }}>
      <CssBaseline />
      {isMobile ? (
        <AccountMenu
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          listOptions={listOptions}
        />
      ) : (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "black",
              color: "white",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <Typography variant="h5">My Account</Typography>
          <Typography variant="caption" style={{ marginTop: "0px" }}>
            {" "}
            For Promoters{" "}
          </Typography>
          <Divider />
          <List>
            {[
              {
                text: "Profile",
                icon: <AccountBoxIcon style={{ color: "white" }} />,
              },
              {
                text: "Tickets",
                icon: <ConfirmationNumberIcon style={{ color: "white" }} />,
              },
              {
                text: "Favorites",
                icon: <FavoriteIcon style={{ color: "white" }} />,
              },
              {
                text: "History of Events",
                icon: <HistoryIcon style={{ color: "white" }} />,
              },
              {
                text: "Proposed Events",
                icon: <CalendarViewDayIcon style={{ color: "white" }} />,
              },
              {
                text: "Incoming Requests",
                icon: <InsertDriveFileIcon style={{ color: "white" }} />,
              },
              {
                text: "Send a Request",
                icon: <ForwardToInboxIcon style={{ color: "white" }} />,
              },
              {
                text: "Logout",
                icon: <LogoutIcon style={{ color: "white" }} />,
                action: () => {
                  localStorage.clear(); window.location.reload();
                  window.location.assign("/login");
                },
              },
            ].map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() =>
                  item.text === "Logout"
                    ? item.action()
                    : setCurrentSection(item.text)
                }
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
      {renderSection()}
    </Box>
  );
}
//aggiunto le const e modificato la sezione artistic works
export function AccountArtist() {
  const [events, setEvents] = useState([]);
  const [opere, setOpere] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/public";

    const fetchEvents = async () => {
      try {
        const response = await axios.get(apiUrl + "/events/get_all");
        // Otteniamo i dati dall'API
        const eventList = response.data;
        // Impostiamo lo stato degli eventi con l'array ricevuto
        setEvents(eventList);
      } catch (error) {
        console.error("Errore durante il recupero degli eventi:", error);
      }
    };
    fetchEvents();

    const fetchOpere = async () => {
      try {
        const fiscalCode = generals.fiscalCode;

        const response = await axios
          .get(apiUrl + `/artworks/by-artist?fiscalCode=${fiscalCode}`)
          .then((response) => {setOpere(response.data);console.log(response.data)});

      } catch (error) {
        console.error("Errore durante il recupero delle opere:", error);
      }
    };
    fetchOpere();
  }, []);

  //aggiunto qui opere
  const [currentSection, setCurrentSection] = useState("Profile");
  const theme = useTheme();
  const [recensioniArtisti, setRecensioniArtisti] = useState([
    {
      yourName: "Mario Rossi",
      reviewArtist:
        "Beyond the technical prowess, there's a sense of authenticity in his creations. Each piece feels like a window into the artist's soul, offering a glimpse of their thoughts, feelings, and unique perspective on the world. It's this personal touch that makes their art not only visually stunning but also emotionally resonant.",
      ratingArtist: 5,
    },
    {
      yourName: "Francesco Bianchi",
      reviewArtist:
        "The use of color and texture in their pieces is nothing short of masterful, contributing to a vibrant and dynamic atmosphere that invites exploration. Every stroke seems purposeful, weaving together a narrative that unfolds with each gaze.",
    },
  ]);

  const handleReviewSubmit = (newReview) => {
    setRecensioniArtisti([...recensioniArtisti, newReview]);
  };
  const handleUploadArtwork = async (newArtwork) => {
    const apiUrl = "http://localhost:8080/auth";
    try {
      const response = await axios.post(apiUrl + "/artworks/new");
      // Otteniamo i dati dall'API
      const opereList = response.data;
      setOpere(opereList);
    } catch (error) {
      console.error("Errore durante il recupero delle opere:", error);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case "Profile":
        return renderProfileSection();
      // Aggiungi altri casi per le sezioni aggiuntive
      case "Tickets":
        return renderTicketSection();
      case "Favorites":
        return renderFavoritesSection();
      case "History of Events":
        return renderhistoryEventsSection();
      case "Artistic Works":
        return renderOpereSection();
      case "Attended Events":
        return renderAttendedEventSection();
      case "Request Participation":
        return <Request></Request>;
      case "Artist Review":
        return renderArtistReview();
      default:
        return null;
    }
  };
  const renderTicketSection = () => {
    return (
      <Box style={{ display: "block" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Tickets
          <Link to={"../events"} style={{ float: "right" }}>
            <IconButton color="success" fontSize={"inherit"}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Link>
          <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "80vh",
            padding: "2rem",
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
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };
  const renderArtistReview = () => {
    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Review
          <ModalReview onReviewSubmit={handleReviewSubmit} />
        </Typography>
        <hr style={{ width: "70%", color: "lightgray" }} />

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "80vh",
            padding: "2rem",
            textAlign: "left",
            overflowX: "scroll",
          }}
        >
          <Grid container direction={"row"} spacing={3}>
            {recensioniArtisti.map((rec) => (
              <Grid item>
                {" "}
                <Review
                  yourName={rec.yourName}
                  reviewArtist={rec.reviewArtist}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };
  const renderhistoryEventsSection = () => {
    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          History Events <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "2rem",
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
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };

  const renderFavoritesSection = () => {
    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Favorites <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "2rem",
            textAlign: "left",
            overflowX: "scroll",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={3}
            justifyContent={"space-around"}
          >
            {events.map((event) => (
              <Grid item>
                {" "}
                <CardLarge
                  nome={event.eventName}
                  organizzatore={event.promoterInfo}
                  data={event.eventStartDate + " " + event.eventEndDate}
                  prezzo={event.eventPrice}
                  descrizione={event.eventDescription}
                  img={event.eventPicPath}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };
  const renderAttendedEventSection = () => {
    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Attended Events <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "1rem",
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
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };

  const renderOpereSection = () => {
    // request body => {
    //   "artworkId": 0,
    //   "artworkName": "string",
    //   "artworkDescription": "string",
    //   "artworkYear": "string"
    // }
    const handleUpdateOpere = (id) => {
      // Implementa la logica per l'aggiornare una opera tramite l'id
    };
    const handleDeleteOpere = (id) => {
      // Implementa la logica per l'eliminazione dell'opera con l'id specifico
    };

    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Artworks
          <ModalUploadArtwork />
        </Typography>
        <hr style={{ width: "70%", color: "lightgray" }} />

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "80vh",
            padding: "2rem",
            textAlign: "left",
            overflowX: "scroll",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={3}
            justifyContent={"space-around"}
          >
            {opere.length>0 &&
            opere.map((op) => (
              <Grid item key={op.id}>
                <CardOpere
                  title={op.artworkName}
                  description={op.artworkDescription}
                  id={op.artworkId}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };

  const renderProfileSection = () => {
    return (
      <Box
        style={{
          height: "30rem",
          width: "40rem",
          padding: "2rem",
          backgroundColor: "#a0c4ff",
        }}
        className="center"
      >
        <div
          style={{
            backgroundColor: "#eaf4f4",
            height: "30rem",
            width: "40rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          <Typography variant="h4" style={{ marginBottom: "1em" }}>
            Profile
          </Typography>
          <Grid
            container
            direction={"row"}
            spacing={3}
            style={{ justifyContent: "center" }}
          >
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue={generals.name}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Surname"
                defaultValue={generals.surname}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Date of Birth"
                defaultValue={generals.birthDate}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue={generals.email}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="City"
                defaultValue={generals.city}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Address"
                defaultValue={generals.address}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Fiscal Code"
                defaultValue={generals.fiscalCode}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Role"
                defaultValue={role}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  };

  const listOptions = [
    {
      text: "Profile",
      icon: <AccountBoxIcon style={{ color: "white" }} />,
    },
    {
      text: "Tickets",
      icon: <ConfirmationNumberIcon style={{ color: "white" }} />,
    },
    {
      text: "Favorites",
      icon: <FavoriteIcon style={{ color: "white" }} />,
    },
    {
      text: "History of Events",
      icon: <HistoryIcon style={{ color: "white" }} />,
    },
    {
      text: "Artistic Works",
      icon: <PaletteIcon style={{ color: "white" }} />,
    },
    {
      text: "Attended Events",
      icon: <CalendarViewDayIcon style={{ color: "white" }} />,
    },
    {
      text: "Request Participation",
      icon: <ForwardToInboxIcon style={{ color: "white" }} />,
    },
    {
      text: "Artist Review",
      icon: <ReviewsIcon style={{ color: "white" }} />,
    },
  ];
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  return (
    <Box sx={{ display: isMobile ? "block" : "flex" }}>
      <CssBaseline />
      {isMobile ? (
        <AccountMenu
          currentSection={currentSection}
          listOptions={listOptions}
        />
      ) : (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "black",
              color: "white",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <Typography variant="h5">{"myprofile"}</Typography>
          <Typography variant="caption" style={{ marginTop: "0px" }}>
            {" "}
            For Artists{" "}
          </Typography>
          <Divider />
          <List>
            {[
              {
                text: "Profile",
                icon: <AccountBoxIcon style={{ color: "white" }} />,
              },
              {
                text: "Tickets",
                icon: <ConfirmationNumberIcon style={{ color: "white" }} />,
              },
              {
                text: "Favorites",
                icon: <FavoriteIcon style={{ color: "white" }} />,
              },
              {
                text: "History of Events",
                icon: <HistoryIcon style={{ color: "white" }} />,
              },
              {
                text: "Artistic Works",
                icon: <PaletteIcon style={{ color: "white" }} />,
              },
              {
                text: "Attended Events",
                icon: <CalendarViewDayIcon style={{ color: "white" }} />,
              },
              {
                text: "Request Participation",
                icon: <ForwardToInboxIcon style={{ color: "white" }} />,
              },
              {
                text: "Artist Review",
                icon: <ReviewsIcon style={{ color: "white" }} />,
              },
              {
                text: "Logout",
                icon: <LogoutIcon style={{ color: "white" }} />,
                action: () => {
                  localStorage.clear(); window.location.reload();
                  window.location.assign("/login");
                },
              },
            ].map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() =>
                  item.text === "Logout"
                    ? item.action()
                    : setCurrentSection(item.text)
                }
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
      {renderSection()}
    </Box>
  );
}

export function AccountAdmin() {
  const [currentSection, setCurrentSection] = useState("Profile");

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/public/events/get_all";

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
    fetchEvents();
  }, []);
  const theme = useTheme();

  const renderSection = () => {
    switch (currentSection) {
      case "Profile":
        return renderProfileSection();
      // Aggiungi altri casi per le sezioni aggiuntive
      case "Incoming Requests":
        return renderIncomingReqSection();
      case "Support":
        return renderSupportSection();
      default:
        return null;
    }
  };

  const renderIncomingReqSection = () => {
    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Incoming Requests <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "2rem",
            textAlign: "left",
            overflowX: "scroll",
          }}
        >
          no data found
        </Box>
      </Box>
    );
  };

  const renderSupportSection = () => {
    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Support <hr style={{ width: "70%", color: "lightgray" }} />
        </Typography>

        <Box
          style={{
            margin: "1rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "2rem",
            textAlign: "left",
            overflowX: "scroll",
          }}
        >
          no data found
        </Box>
      </Box>
    );
  };

  const renderProfileSection = () => {
    return (
      <Box
        style={{
          height: "30rem",
          width: "40rem",
          padding: "2rem",
          backgroundColor: "#a0c4ff",
        }}
        className="center"
      >
        <div
          style={{
            backgroundColor: "#eaf4f4",
            height: "30rem",
            width: "40rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          <Typography variant="h4" style={{ marginBottom: "1em" }}>
            Profile
          </Typography>
          <Grid
            container
            direction={"row"}
            spacing={3}
            style={{ justifyContent: "center" }}
          >
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue={generals.name}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Surname"
                defaultValue={generals.surname}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Date of Birth"
                defaultValue={generals.birthDate}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue={generals.email}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="City"
                defaultValue={generals.city}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Address"
                defaultValue={generals.address}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Fiscal Code"
                defaultValue={generals.fiscalCode}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Role"
                defaultValue={role}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  };

  const listOptions = [
    {
      text: "Profile",
      icon: <AccountBoxIcon style={{ color: "white" }} />,
    },
    {
      text: "Incoming Requests",
      icon: <InsertDriveFileIcon style={{ color: "white" }} />,
    },
    {
      text: "Support",
      icon: <HelpOutlineIcon style={{ color: "white" }} />,
    },
  ];
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  return (
    <Box sx={{ display: isMobile ? "block" : "flex" }}>
      <CssBaseline />
      {isMobile ? (
        <AccountMenu
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          listOptions={listOptions}
        />
      ) : (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "black",
              color: "white",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <Typography variant="h5">My Account</Typography>
          <Typography variant="caption" style={{ marginTop: "0px" }}>
            {" "}
            For Administrator{" "}
          </Typography>
          <Divider />
          <List>
            {[
              {
                text: "Profile",
                icon: <AccountBoxIcon style={{ color: "white" }} />,
              },
              {
                text: "Incoming Requests",
                icon: <InsertDriveFileIcon style={{ color: "white" }} />,
              },
              {
                text: "Support",
                icon: <HelpOutlineIcon style={{ color: "white" }} />,
              },
              {
                text: "Logout",
                icon: <LogoutIcon style={{ color: "white" }} />,
                action: () => {
                  localStorage.clear(); window.location.reload();
                  window.location.assign("/login");
                },
              },
            ].map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() =>
                  item.text === "Logout"
                    ? item.action()
                    : setCurrentSection(item.text)
                }
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
      {renderSection()}
    </Box>
  );
}
