import * as React from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import im3 from "../../../Assets/background.jpg";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const themes = [
  "Music",
  "Photography",
  "Design",
  "Horror",
  "Visual Art",
  "Sculpture",
  "Digital Art",
];

function getStyles(name, ourThemes, themeEvent) {
  return {
    fontWeight:
      ourThemes.indexOf(name) === -1
        ? themeEvent.typography.fontWeightRegular
        : themeEvent.typography.fontWeightMedium,
  };
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const Request = () => {
  var data = new Date();
  var gg, mm, aaaa;
  gg = data.getDate() + "-";
  mm = data.getMonth() + 1 + "-";
  aaaa = data.getFullYear();
  let today = gg + mm + aaaa;

  const themeEvent = useTheme();
  const [ourThemes, setOurThemes] = React.useState([]);
  const [locationAddress, setLocationAddress] = useState("");
  const [eventRegion, setRegion] = useState("");
  const [eventRequestDate, setReqDate] = useState(today);
  const [pic, setPic] = useState("");
  const [promoterCf, setPromoterCf] = useState("");
  const [describe, setDescribe] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationDescribe, setLocationDescribe] = useState("");
  const [maxCustomers, setMaxCustomers] = useState("");
  const [eventPrice, setEventPrice] = useState("");
  const [eventName, setEventName] = useState("");
  const [begin, setBegin] = React.useState(dayjs());
  const [permissionDocumentPath, setPermissionDocumentPath] = useState("");
  const [promoterIdCardPath, setPromoterIdCardPath] = useState("");
  const [end, setEnd] = React.useState(dayjs());

  const [buttonText, setButtonText] = useState("Send");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOurThemes(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendTicket();
  };
  const handleSendTicket = () => {
    alert("Sended! Check your email!");
    setButtonDisabled(true);
  };
  function handleClick() {
    setButtonText("Sended!");
  }

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background-image: url(${im3});
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}
      </style>
      <Box
        marginTop={"35px"}
        style={{
          border: "groove 3px black",
          borderRadius: "30px",
          width: "40rem",
          padding: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          margin: "2rem auto",
        }}
      >
        <div>
          <h1>{"Event Request"}</h1>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction={"row"}
              spacing={2}
              style={{ justifyContent: "center" }}
            >
              <Grid item md="4">
                <TextField
                  required
                  id="outlined-required"
                  label="Event Name"
                  onChange={(e) => setEventName(e.target.value)}
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item md="4">
                <TextField
                  required
                  id="outlined-required"
                  label="Describe Event"
                  onChange={(e) => setDescribe(e.target.value)}
                  style={{ width: "90%" }}
                />
              </Grid>

              <Grid item md="4">
                <TextField
                  required
                  id="outlined-required"
                  label="Location Name"
                  onChange={(e) => setLocationName(e.target.value)}
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item md="4">
                <TextField
                  required
                  id="outlined-required"
                  label="Location Address"
                  onChange={(e) => setLocationAddress(e.target.value)}
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item md="4">
                <TextField
                  required
                  id="outlined-required"
                  label="Region"
                  onChange={(e) => setRegion(e.target.value)}
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item md="4">
                <TextField
                  required
                  id="outlined-required"
                  label="Describe Location"
                  onChange={(e) => setLocationDescribe(e.target.value)}
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item md="4">
                <TextField
                  required
                  id="outlined-required"
                  label="Event Price"
                  onChange={(e) => setEventPrice(e.target.value)}
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item md="4">
                <TextField
                  required
                  id="outlined-required"
                  label="Promoter Fiscal Code"
                  onChange={(e) => setPromoterCf(e.target.value)}
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item md="4">
                <TextField
                  required
                  id="outlined-required"
                  label="Max Customer"
                  onChange={(e) => setMaxCustomers(e.target.value)}
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item md="4">
                <FormControl sx={{ width: "90%" }}>
                  <InputLabel id="demo-multiple-name-label">Theme</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={ourThemes}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {themes.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, ourThemes, themeEvent)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md="12">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DateTimePicker", "DateTimePicker"]}
                  >
                    <DateTimePicker
                      label="Start Event"
                      value={begin}
                      onChange={(newValue) => setBegin(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>

              <Grid item md="12">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DateTimePicker", "DateTimePicker"]}
                  >
                    <DateTimePicker
                      label="End Event"
                      value={end}
                      onChange={(newValue) => setEnd(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item md="4">
                <Typography fontStyle={"italic"}>Event Image</Typography>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(e) => setPic(e.target.files[0])}
                  />
                </Button>
              </Grid>
              <Grid item md="4">
                <Typography fontStyle={"italic"}>
                  Permission Document
                </Typography>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(e) =>
                      setPermissionDocumentPath(e.target.files[0])
                    }
                  />
                </Button>
              </Grid>
              <Grid item md="4">
                <Typography fontStyle={"italic"}>Id Card</Typography>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(e) => setPromoterIdCardPath(e.target.files[0])}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid item md="4" margin={2}>
              <Typography variant="h6">Why should we pick you?</Typography>
              <TextField
                required
                multiline
                rows={3}
                id="outlined-multiline-static"
                label="Describe your Event"
                style={{ width: "90%" }}
                onChange={(e) => setDescribe(e.target.value)}
              />
            </Grid>
            <Grid item md="4">
              <Button
                type="submit"
                variant="outlined"
                size="large"
                disabled={buttonDisabled}
              >
                {buttonText}
              </Button>
            </Grid>
          </form>
        </div>
      </Box>
    </>
  );
};
