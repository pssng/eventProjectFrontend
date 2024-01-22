import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState, useEffect } from "react";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Grid,
  TextField,
  Stack,
  CardActions,
  Button,
  IconButton,
  Alert,
  Snackbar,
} from "@mui/material";
import { EventCard } from "./Components/EventCard";
import event1 from "../Assets/event1.jpg";
import event2 from "../Assets/event2.jpg";
import event3 from "../Assets/event3.jpg";
import CardLarge from "./Components/CardFavorites";
import { Request } from "./Modules/Forms/Request";
import { useTheme } from "@mui/material/styles";
import { Logout } from "@mui/icons-material";
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
import axios from "axios";
import GenericReview from "./Components/GenericReview";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import PlaceIcon from "@mui/icons-material/Place";


const drawerWidth = 240;
const events = [
  {
    eventId: 4,
    eventName: "Sarà davvero una torta?",
    eventDescription:
      "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
    maximumCapacity: 70,
    startDate: "2024-05-20",
    endDate: "2024-05-20",
    eventCategory: "Cucina",
    eventRegion: "Lazio",
    eventPrice: "$ 23,54",
    eventPromoter: "Mark Datels",
    emailOrganizzatore: "Mark_Datels@exemple.xyz",
    img: event3,
  },
  {
    eventId: 4,
    eventName: "Sarà davvero una torta?",
    eventDescription:
      "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
    maximumCapacity: 70,
    startDate: "2024-05-20",
    endDate: "2024-05-20",
    eventCategory: "Cucina",
    eventRegion: "Lazio",
    eventPrice: "$ 23,54",
    eventPromoter: "Mark Datels",
    emailOrganizzatore: "Mark_Datels@exemple.xyz",
    img: event3,
  },
  {
    eventId: 4,
    eventName: "Sarà davvero una torta?",
    eventDescription:
      "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
    maximumCapacity: 70,
    startDate: "2024-05-20",
    endDate: "2024-05-20",
    eventCategory: "Cucina",
    eventRegion: "Lazio",
    eventPrice: "$ 23,54",
    eventPromoter: "Mark Datels",
    emailOrganizzatore: "Mark_Datels@exemple.xyz",
    img: event3,
  },
  {
    eventId: 4,
    eventName: "Sarà davvero una torta?",
    eventDescription:
      "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
    maximumCapacity: 70,
    startDate: "2024-05-20",
    endDate: "2024-05-20",
    eventCategory: "Cucina",
    eventRegion: "Lazio",
    eventPrice: "$ 23,54",
    eventPromoter: "Mark Datels",
    emailOrganizzatore: "Mark_Datels@exemple.xyz",
    img: event3,
  },
  {
    eventId: 4,
    eventName: "Sarà davvero una torta?",
    eventDescription:
      "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
    maximumCapacity: 70,
    startDate: "2024-05-20",
    endDate: "2024-05-20",
    eventCategory: "Cucina",
    eventRegion: "Lazio",
    eventPrice: "$ 23,54",
    eventPromoter: "Mark Datels",
    emailOrganizzatore: "Mark_Datels@exemple.xyz",
    img: event3,
  },
];
const opere = [
  {
    nome: "venere",
    organizzatore: "Marck jset",
    descrizione: "lorem impsWEEEjdhuceh",
    img: event1,
  },
  {
    nome: "Bacio",
    organizzatore: "Marck jset",

    descrizione: "lorem impsWEEEjdhuceh",
    img: event2,
  },
  {
    nome: "Infinito",
    organizzatore: "Marck jset",

    descrizione: "lorem impsWEEEjdhuceh",
    img: event3,
  },
];

export function AccountClient() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState("Profile");
  const theme = useTheme();
  var location = useLocation();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const renderSection = () => {
    switch (currentSection) {
      case "Profile":
        return renderProfileSection();
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
              <Grid item>
                <EventCard
                  emailOrganizzatore={event.emailOrganizzatore}
                  luogo={event.eventRegion}
                  categoria={event.eventCategory}
                  nome={event.eventName}
                  organizzatore={event.eventPromoter}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  prezzo={event.eventPrice}
                  descrizione={event.eventDescription}
                  img={event.img}
                  location={location.pathname}
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
              <Grid item>
                <EventCard
                  emailOrganizzatore={event.emailOrganizzatore}
                  luogo={event.eventRegion}
                  categoria={event.eventCategory}
                  nome={event.eventName}
                  organizzatore={event.eventPromoter}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  prezzo={event.eventPrice}
                  descrizione={event.eventDescription}
                  img={event.img}
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
                  nome={event.nome}
                  organizzatore={event.organizzatore}
                  data={event.data}
                  prezzo={event.prezzo}
                  descrizione={event.descrizione}
                  img={event.img}
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
                defaultValue={localStorage.getItem("name")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Surname"
                defaultValue={localStorage.getItem("surname")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Date of Birth"
                defaultValue={localStorage.getItem("birthDate")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue={localStorage.getItem("email")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="City"
                defaultValue={localStorage.getItem("city")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Address"
                defaultValue={localStorage.getItem("address")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Fiscal Code"
                defaultValue={localStorage.getItem("fiscalCode")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Role"
                defaultValue={localStorage.getItem("userRole")}
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

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
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
            For Admin{" "}
          </Typography>
          <Divider />
          <List>
            {[
                 {
                text: "Profile",
                icon: <AccountBoxIcon style={{ color: "gray" }} />,
              },
              {
                text: "Tickets",
                icon: <ConfirmationNumberIcon style={{ color: "gray" }} />,
              },
              {
                text: "Favorites",
                icon: <FavoriteIcon style={{ color: "gray" }} />,
              },
              {
                text: "History of Events",
                icon: <HistoryIcon style={{ color: "gray" }} />,
              },
            ].map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() => setCurrentSection(item.text)}
                style={{
                  color: currentSection === item.text ? "black" : "white",
                }}
              >
                <ListItemButton
                  style={{
                    background:
                      currentSection === item.text ? "white" : "black",
                    color: currentSection === item.text ? "black" : "white",
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/*LOGOUT SECTION */}
          <React.Fragment>
            <Box mt="auto" p={2}>
              <Button
                fullWidth
                variant="outlined"
                style={{ color: "black", backgroundColor: "white" }}
                onClick={handleClickOpen}
              >
                <Typography variant="button" fontWeight="bold">
                  Logout
                </Typography>
              </Button>
            </Box>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to log out?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  If you choose to log out you will be redirected to the home
                  page.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    handleClose();
                    navigate("/Home?loggedOut=true");
                    setIsLoggedOut(true);
                    navigate("/Home?loggedOut=true");
                  }}
                  autoFocus
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </Drawer>
      )}
      {renderSection()}
    </Box>
  );
}
export function AccountPromoters(props) {
  const [currentSection, setCurrentSection] = useState("Profile");
  const theme = useTheme();
  const navigate = useNavigate();
  var location = useLocation();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderSection = (data) => {
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
        return renderProposedEventsSection(data);
      case "Incoming Requests":
        return renderIncomingReqSection();
      case "Send a Request":
        return <Request onSubmit={props.receiveFormData} />;
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
              <Grid item>
                <EventCard
                  emailOrganizzatore={event.emailOrganizzatore}
                  luogo={event.eventRegion}
                  categoria={event.eventCategory}
                  nome={event.eventName}
                  organizzatore={event.eventPromoter}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  prezzo={event.eventPrice}
                  descrizione={event.eventDescription}
                  img={event.img}
                  location={location.pathname}
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
              <Grid item>
                <EventCard
                  emailOrganizzatore={event.emailOrganizzatore}
                  luogo={event.eventRegion}
                  categoria={event.eventCategory}
                  nome={event.eventName}
                  organizzatore={event.eventPromoter}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  prezzo={event.eventPrice}
                  descrizione={event.eventDescription}
                  img={event.img}
                  location={location.pathname}

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
                  nome={event.nome}
                  organizzatore={event.organizzatore}
                  data={event.data}
                  prezzo={event.prezzo}
                  descrizione={event.descrizione}
                  img={event.img}
                  location={location.pathname}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };
   const renderProposedEventsSection = (data) => {
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
          {console.log(props.formDataList)}
          {props.formDataList?.length > 0 ? (
            <Grid
              container
              direction={"row"}
              spacing={1}
              style={{ justifyContent: "space-evenly" }}
            >
              {props.formDataList?.map((formData, index) => (
                <div key={index}>
                  <Card style={{ width: "15rem", textAlign: "center" }}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={event1}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {formData.eventName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {formData.describe}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Grid>
          ) : (
            "No Events Proposed"
          )}
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
                defaultValue={localStorage.getItem("name")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Surname"
                defaultValue={localStorage.getItem("surname")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Date of Birth"
                defaultValue={localStorage.getItem("birthDate")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue={localStorage.getItem("email")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="City"
                defaultValue={localStorage.getItem("city")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Address"
                defaultValue={localStorage.getItem("address")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Fiscal Code"
                defaultValue={localStorage.getItem("fiscalCode")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Role"
                defaultValue={localStorage.getItem("userRole")}
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
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
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
                icon: <AccountBoxIcon style={{ color: "gray" }} />,
              },
              {
                text: "Tickets",
                icon: <ConfirmationNumberIcon style={{ color: "gray" }} />,
              },
              {
                text: "Favorites",
                icon: <FavoriteIcon style={{ color: "gray" }} />,
              },
              {
                text: "History of Events",
                icon: <HistoryIcon style={{ color: "gray" }} />,
              },
              {
                text: "Proposed Events",
                icon: <CalendarViewDayIcon style={{ color: "gray" }} />,
              },
              {
                text: "Incoming Requests",
                icon: <InsertDriveFileIcon style={{ color: "gray" }} />,
              },
              {
                text: "Send a Request",
                icon: <ForwardToInboxIcon style={{ color: "gray" }} />,
              },
            ].map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() => setCurrentSection(item.text)}
                style={{
                  color: currentSection === item.text ? "black" : "white",
                }}
              >
                <ListItemButton
                  style={{
                    background:
                      currentSection === item.text ? "white" : "black",
                    color: currentSection === item.text ? "black" : "white",
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/*LOGOUT SECTION */}
          <React.Fragment>
            <Box mt="auto" p={2}>
              <Button
                fullWidth
                variant="outlined"
                style={{ color: "black", backgroundColor: "white" }}
                onClick={handleClickOpen}
              >
                <Typography variant="button" fontWeight="bold">
                  Logout
                </Typography>
              </Button>
            </Box>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to log out?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  If you choose to log out you will be redirected to the home
                  page.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    handleClose();
                    navigate("/Home?loggedOut=true");
                    setIsLoggedOut(true);
                    navigate("/Home?loggedOut=true");
                  }}
                  autoFocus
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </Drawer>
      )}
            {renderSection(props.formDataList)}

    </Box>
  );
}

export function AccountArtist(
  eventName,
  eventDescription,
  startDate,
  endDate,
  eventCategory,
  eventRegion,
  eventPrice,
  eventPromoter,
  emailOrganizzatore,
  img
) {
  const events = [
    {
      eventId: 4,
      eventName: "Sarà davvero una torta?",
      eventDescription:
        "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
      maximumCapacity: 70,
      startDate: "2024-05-20",
      endDate: "2024-05-20",
      eventCategory: "Cucina",
      eventRegion: "Lazio",
      eventPrice: "$ 23,54",
      eventPromoter: "Mark Datels",
      emailOrganizzatore: "Mark_Datels@exemple.xyz",
      img: event3,
    },
    {
      eventId: 4,
      eventName: "Sarà davvero una torta?",
      eventDescription:
        "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
      maximumCapacity: 70,
      startDate: "2024-05-20",
      endDate: "2024-05-20",
      eventCategory: "Cucina",
      eventRegion: "Lazio",
      eventPrice: "$ 23,54",
      eventPromoter: "Mark Datels",
      emailOrganizzatore: "Mark_Datels@exemple.xyz",
      img: event3,
    },
    {
      eventId: 4,
      eventName: "Sarà davvero una torta?",
      eventDescription:
        "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
      maximumCapacity: 70,
      startDate: "2024-05-20",
      endDate: "2024-05-20",
      eventCategory: "Cucina",
      eventRegion: "Lazio",
      eventPrice: "$ 23,54",
      eventPromoter: "Mark Datels",
      emailOrganizzatore: "Mark_Datels@exemple.xyz",
      img: event3,
    },
    {
      eventId: 4,
      eventName: "Sarà davvero una torta?",
      eventDescription:
        "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
      maximumCapacity: 70,
      startDate: "2024-05-20",
      endDate: "2024-05-20",
      eventCategory: "Cucina",
      eventRegion: "Lazio",
      eventPrice: "$ 23,54",
      eventPromoter: "Mark Datels",
      emailOrganizzatore: "Mark_Datels@exemple.xyz",
      img: event3,
    },
    {
      eventId: 4,
      eventName: "Sarà davvero una torta?",
      eventDescription:
        "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
      maximumCapacity: 70,
      startDate: "2024-05-20",
      endDate: "2024-05-20",
      eventCategory: "Cucina",
      eventRegion: "Lazio",
      eventPrice: "$ 23,54",
      eventPromoter: "Mark Datels",
      emailOrganizzatore: "Mark_Datels@exemple.xyz",
      img: event3,
    },
  ];
  //aggiunto qui opere
  const [currentSection, setCurrentSection] = useState("Profile");
  const theme = useTheme();
  const navigate = useNavigate();
  var location = useLocation();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsLoggedOut(false);
  };
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get("loggedIn")) {
      // Se la query string contiene "loggedOut=true", mostra la Snackbar
      setIsLoggedOut(true);
    }
  }, [location.search]);

  const [opere, setOpere] = useState([
    {
      nome: "venere",
      organizzatore: "Marck jset",
      descrizione: "lorem impsWEEEjdhuceh",
      id: 1,
      img: event1,
    },
    {
      nome: "Bacio",
      organizzatore: "Marck jset",

      descrizione: "lorem impsWEEEjdhuceh",
      id: 2,
      img: event2,
    },
    {
      nome: "Infinito",
      organizzatore: "Marck jset",

      descrizione: "lorem impsWEEEjdhuceh",
      id: 3,
      img: event3,
    },
  ]);
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
  const handleUploadArtwork = (newArtwork) => {
    setOpere([...opere, newArtwork]);
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
      case "Artworks":
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
              <Grid item>
                <EventCard
                  emailOrganizzatore={event.emailOrganizzatore}
                  luogo={event.eventRegion}
                  categoria={event.eventCategory}
                  nome={event.eventName}
                  organizzatore={event.eventPromoter}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  prezzo={event.eventPrice}
                  descrizione={event.eventDescription}
                  img={event.img}
                  location={location.pathname}

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
              <Grid item>
                <Stack
                  margin={"1rem"}
                  spacing={1}
                  style={{
                    width: "15rem",
                    wordWrap: "breakWord",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={event.img}
                    style={{
                      border: "1px solid #ddd",
                      bordeRadius: "4px",
                      padding: "5px",
                      width: "14rem",
                      height: "7rem",
                    }}
                  ></img>
                  <Typography component={"i"} variant="h6">
                    <b>{event.eventName}</b>
                  </Typography>
                  <Typography variant="subtitle">
                    <i>On:</i>
                    {`  ${event.startDate} to ${event.endDate}`}
                  </Typography>
                  <Typography>
                    <PlaceIcon />
                    {`  ${event.eventRegion} `}
                  </Typography>
                  <Typography component={"subtitle"}>
                    <i>Category:</i>
                    {`  ${event.eventCategory} `}
                  </Typography>
                  {/* <Typography component={'div'} variant="body1" sx ={{ textOverflow: 'ellipsis', overflow: 'hidden',
            whiteSpace: 'nowrap'}}>{descrizione}</Typography>
        */}
                  <Typography align="right" variant="caption">
                    <i>By:</i>
                    {`   ${event.eventPromoter}`}
                  </Typography>
                  {<hr />}

                  {
                    <Button
                      onClick={() => {
                        navigate("/EventPageAccount", {
                          replace: true,
                          state: {
                            eventName: event.eventName,
                            eventDescription: event.eventDescription, 
                            startDate: event.startDate,
                            endDate: event.endDate,
                            eventCategory: event.eventCategory,
                            eventRegion: event.eventRegion,
                            eventPromoter: event.eventPromoter,
                            emailOrganizzatore: event.emailOrganizzatore,
                            img: event.img,
                          },
                        });
                      }}
                    >
                      {" "}
                      Show More
                    </Button>
                  }
                </Stack>
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
                  emailOrganizzatore={event.emailOrganizzatore}
                  luogo={event.eventRegion}
                  categoria={event.eventCategory}
                  nome={event.eventName}
                  organizzatore={event.eventPromoter}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  prezzo={event.eventPrice}
                  descrizione={event.eventDescription}
                  img={event.img}
                                    location={location.pathname}

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
              <Grid item>
                <EventCard
                  emailOrganizzatore={event.emailOrganizzatore}
                  luogo={event.eventRegion}
                  categoria={event.eventCategory}
                  nome={event.eventName}
                  organizzatore={event.eventPromoter}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  prezzo={event.eventPrice}
                  descrizione={event.eventDescription}
                  img={event.img}
                  location={location.pathname}

                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };

  const renderOpereSection = () => {
    const handleUpdateOpere = (id, updatedTitle, updatedDescription) => {
      // Implementa la logica per l'aggiornamento dell'opera con l'id specifico
      const updatedOpere = opere.map((op) =>
        op.id === id
          ? { ...op, nome: updatedTitle, descrizione: updatedDescription }
          : op
      );

      // Aggiorna lo stato delle opere con i nuovi dati
      setOpere(updatedOpere);

      onInsert(id, updatedTitle, updatedDescription);
    };

    const handleDeleteOpere = (id) => {
      // Implementa la logica per l'eliminazione dell'opera con l'id specifico
      const updatedOpere = opere.filter((op) => op.id !== id);

      // Aggiorna lo stato delle opere rimuovendo l'opera eliminata
      setOpere(updatedOpere);
    };

    // Aggiungi questa funzione che aggiunge title e description a un'opera specifica
    const onInsert = (id, newTitle, newDescription) => {
      // Trova l'opera con l'id specifico
      const updatedOpere = opere.map((op) =>
        op.id === id
          ? {
              ...op,
              title: op.title + newTitle,
              description: op.description + newDescription,
            }
          : op
      );

      // Aggiorna lo stato delle opere con i nuovi dati
      setOpere(updatedOpere);
    };

    const handleInsertOpere = (id, newTitle, newDescription) => {
      // Aggiungi la nuova opera allo stato delle opere
      const newOpere = [
        ...opere,
        { id, nome: newTitle, descrizione: newDescription },
      ];
      setOpere(newOpere);
    };

    return (
      <Box style={{ display: "block", width: "100%" }}>
        <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
          Artworks
          <ModalUploadArtwork
            onUploadArtwork={(newArtwork) =>
              handleInsertOpere(
                newArtwork.id,
                newArtwork.title,
                newArtwork.description
              )
            }
          />
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
            {opere.map((op) => (
              <Grid item key={op.id}>
                {/* Passa la prop onUpdate correttamente a CardOpere */}
                <CardOpere
                  title={op.nome}
                  description={op.descrizione}
                  id={op.id}
                  onUpdate={handleUpdateOpere}
                  onDelete={handleDeleteOpere}
                  onInsert={onInsert}
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
      <div>
        {isLoggedIn && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={isLoggedIn}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="success"
              variant="filled"
            >
              Welcome back {localStorage.getItem("name")} +{" "}
              {localStorage.getItem("surname")}
            </Alert>
          </Snackbar>
        )}
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
                  defaultValue={localStorage.getItem("name")}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-read-only-input"
                  label="Surname"
                  defaultValue={localStorage.getItem("surname")}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-read-only-input"
                  label="Date of Birth"
                  defaultValue={localStorage.getItem("birthDate")}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-read-only-input"
                  label="Email"
                  defaultValue={localStorage.getItem("email")}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-read-only-input"
                  label="City"
                  defaultValue={localStorage.getItem("city")}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-read-only-input"
                  label="Address"
                  defaultValue={localStorage.getItem("address")}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-read-only-input"
                  label="Fiscal Code"
                  defaultValue={localStorage.getItem("fiscalCode")}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-read-only-input"
                  label="Role"
                  defaultValue={localStorage.getItem("userRole")}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </Box>
      </div>
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
      text: "Artworks",
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
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
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
            For Artists{" "}
          </Typography>
          <Divider />
          <List>
            {[
              {
                text: "Profile",
                icon: <AccountBoxIcon style={{ color: "gray" }} />,
              },
              {
                text: "Tickets",
                icon: <ConfirmationNumberIcon style={{ color: "gray" }} />,
              },
              {
                text: "Favorites",
                icon: <FavoriteIcon style={{ color: "gray" }} />,
              },
              {
                text: "History of Events",
                icon: <HistoryIcon style={{ color: "gray" }} />,
              },
              {
                text: "Artworks",
                icon: <PaletteIcon style={{ color: "gray" }} />,
              },
              {
                text: "Attended Events",
                icon: <CalendarViewDayIcon style={{ color: "gray" }} />,
              },
              {
                text: "Request Participation",
                icon: <ForwardToInboxIcon style={{ color: "gray" }} />,
              },
              {
                text: "Artist Review",
                icon: <ReviewsIcon style={{ color: "gray" }} />,
              },
            ].map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() => setCurrentSection(item.text)}
                style={{
                  color: currentSection === item.text ? "black" : "white",
                }}
              >
                <ListItemButton
                  style={{
                    background:
                      currentSection === item.text ? "white" : "black",
                    color: currentSection === item.text ? "black" : "white",
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/*LOGOUT SECTION */}
          <React.Fragment>
            <Box mt="auto" p={2}>
              <Button
                fullWidth
                variant="outlined"
                style={{ color: "black", backgroundColor: "white" }}
                onClick={handleClickOpen}
              >
                <Typography variant="button" fontWeight="bold">
                  Logout
                </Typography>
              </Button>
            </Box>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to log out?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  If you choose to log out you will be redirected to the home
                  page.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    handleClose();
                    navigate("/Home?loggedOut=true");
                    setIsLoggedOut(true);
                    navigate("/Home?loggedOut=true");
                  }}
                  autoFocus
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </Drawer>
      )}
      {renderSection()}
    </Box>
  );
}
export function AccountAdmin(props) {
  const [currentSection, setCurrentSection] = useState("Profile");
  const theme = useTheme();
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderSection = (data) => {
    switch (currentSection) {
      case "Profile":
        return renderProfileSection();
      // Aggiungi altri casi per le sezioni aggiuntive
      case "Incoming Requests":
        return renderIncomingReqSection(data);
      case "Support":
        return renderSupportSection();

      default:
        return null;
    }
  };

  const renderIncomingReqSection = (data) => {
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
          {console.log(props.formDataList)}
          {props.formDataList?.length > 0 ? (
            <Grid
              container
              direction={"row"}
              spacing={1}
              style={{ justifyContent: "space-evenly" }}
            >
              {props.formDataList?.map((formData, index) => (
                <div key={index}>
                  <Card style={{ width: "15rem", textAlign: "center" }}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={event1}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {formData.eventName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {formData.describe}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Grid>
          ) : (
            "No Requests"
          )}
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
                defaultValue={localStorage.getItem("name")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Surname"
                defaultValue={localStorage.getItem("surname")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Date of Birth"
                defaultValue={localStorage.getItem("birthDate")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue={localStorage.getItem("email")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="City"
                defaultValue={localStorage.getItem("city")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Address"
                defaultValue={localStorage.getItem("address")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Fiscal Code"
                defaultValue={localStorage.getItem("fiscalCode")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-read-only-input"
                label="Role"
                defaultValue={localStorage.getItem("userRole")}
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
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
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
                icon: <AccountBoxIcon style={{ color: "gray" }} />,
              },
              {
                text: "Incoming Requests",
                icon: <InsertDriveFileIcon style={{ color: "gray" }} />,
              },
              {
                text: "Support",
                icon: <HelpOutlineIcon style={{ color: "gray" }} />,
              },
        ].map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() => setCurrentSection(item.text)}
                style={{
                  color: currentSection === item.text ? "black" : "white",
                }}
              >
                <ListItemButton
                  style={{
                    background:
                      currentSection === item.text ? "white" : "black",
                    color: currentSection === item.text ? "black" : "white",
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/*LOGOUT SECTION */}
          <React.Fragment>
            <Box mt="auto" p={2}>
              <Button
                fullWidth
                variant="outlined"
                style={{ color: "black", backgroundColor: "white" }}
                onClick={handleClickOpen}
              >
                <Typography variant="button" fontWeight="bold">
                  Logout
                </Typography>
              </Button>
            </Box>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to log out?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  If you choose to log out you will be redirected to the home
                  page.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    handleClose();
                    navigate("/Home?loggedOut=true");
                    setIsLoggedOut(true);
                    navigate("/Home?loggedOut=true");
                  }}
                  autoFocus
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </Drawer>
      )}
      {renderSection(props.formDataList)}
    </Box>
  );
}
