import * as React from "react";
import { Box, TextField, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import FormControl from "@mui/material/FormControl";

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

function ModalRequestPromoterForArtist() {
  const [event, setEvent] = React.useState("");
  const [describe, setDescribe] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setEvent(event.target.value);
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
            sx={{ ...centerStyle, m: 1, minWidth: 120, width: "100%", marginBottom: "16px" }}
          >
            <TextField
              required
              multiline
              rows={3}
              id="outlined-multiline-static"
              label="Describe Request"
              onChange={(e) => setDescribe(e.target.value)}
              style={{ width: "100%" }}
            />
          </FormControl>
          <FormControl
            sx={{ ...centerStyle, m: 1, minWidth: 120, width: "100%", marginBottom: "16px" }}
          >
            <InputLabel id="demo-simple-select-helper-label">Event</InputLabel>
            <Select
              required
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={event}
              label="Event"
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Cuore di gesù"}>Cuore di gesù</MenuItem>
              <MenuItem value={"Pssng collettivo"}>Pssng collettivo</MenuItem>
              <MenuItem value={"Visita al colon magica"}>
                Visita al colon magica
              </MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={2} justifyContent="space-between" style={{ marginTop: "16px" }}>
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
