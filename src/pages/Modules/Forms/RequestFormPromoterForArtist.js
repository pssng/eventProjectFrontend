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

export const RequestFormPromoterForArtist = () => {
  const [event, setEvent] = React.useState("");
  const [describe, setDescribe] = useState("");
  const [end, setEnd] = React.useState(dayjs());
  const [buttonText, setButtonText] = useState("Send");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleClick() {
    setButtonText("Sent!");
  }
  const handleChange = (event) => {
    setEvent(event.target.value);
  };

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
          <h1>{"Collaborate"}</h1>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction={"column"}
              spacing={2}
              style={{ justifyContent: "center" }}
            >
              <Grid item md="4">
                <TextField
                  required
                  multiline
                  rows={3}
                  id="outlined-multiline-static"
                  label="Describe Request"
                  onChange={(e) => setDescribe(e.target.value)}
                  style={{ width: "70%" }}
                />
              </Grid>
              <Grid item md="4">
                <FormControl sx={{ m: 1, width: "70%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Event
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={event}
                    label="Event"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Cuore di gesù"}>Cuore di gesù</MenuItem>
                    <MenuItem value={"Pssng collettivo"}>
                      Pssng collettivo
                    </MenuItem>
                    <MenuItem value={"Visita al colon magica"}>
                      Visita al colon magica
                    </MenuItem>
                  </Select>
                </FormControl>
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
            </Grid>
          </form>
        </div>
      </Box>
    </>
  );
};
