import * as React from "react";
import { Box, TextField, Grid, Divider } from "@mui/material";
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

  const handleChange = event => {
    const { target: { value } } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleToggle = value => () => {
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
          <Divider />
          <h4 style={{ color: "gray" }}>
            Your request has been successfully forwarded to the promoter's
            email.
          </h4>

          {/*BOTTONE */}
          <Button
            onClick={handleClose}
            style={{ margin: "auto", display: "block" }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default ModalRequestPromoterForArtist;
