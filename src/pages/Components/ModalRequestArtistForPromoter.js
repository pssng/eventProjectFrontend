import * as React from "react";
import { Box, TextField, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const centerStyle = {
  margin: "auto",
};

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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function ModalRequestPromoterForArtist() {
  const [event, setEvent] = React.useState("");
  const [describe, setDescribe] = useState("");
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState([0]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Collaborate</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 style={{ textAlign: "center" }}>Collaborate Request</h2>
          <FormControl
            sx={{
              ...centerStyle,
              m: 1,
              minWidth: 120,
              width: "100%",
              marginBottom: "16px",
            }}
          >
            <TextField
              id="outlined-read-only-input"
              label="Name"
              defaultValue={localStorage.getItem("name")}
              InputProps={{
                readOnly: true,
              }}
            />
          </FormControl>

          <FormControl
            sx={{
              ...centerStyle,
              m: 1,
              minWidth: 120,
              width: "100%",
              marginBottom: "16px",
            }}
          >
            <TextField
              id="outlined-read-only-input"
              label="Surname"
              defaultValue={localStorage.getItem("surname")}
              InputProps={{
                readOnly: true,
              }}
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Choose Artworks
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Choose Artworks" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/*BOTTONI */}
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            style={{ marginTop: "16px" }}
          >
            <Grid item>
              <Button onClick={handleClose}>Close</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" size="small" endIcon={<SendIcon />}>
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default ModalRequestPromoterForArtist;
