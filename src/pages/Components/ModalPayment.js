import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Rating from "./Rating";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Link } from "react-router-dom";

// ... (import rimanenti)

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

export default function ModalPayment({ eventName, quantity, setQuantity, id }) {
  const [open, setOpen] = React.useState(false);
  const [paymentData, setPaymentData] = useState({
    eventName: eventName,
    ticketNumber: 0,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    console.log("Sending data:", paymentData);

    handleClose();
  };
  const handleTicketNumberChange = e => {
    const newValue = Math.max(0, parseInt(e.target.value, 10));
    setPaymentData({ ...paymentData, ticketNumber: newValue });
  };
  return (
    <div>
      <IconButton aria-label="buy now" onClick={handleOpen} color={"white"}>
        <PaymentsIcon style={{ fontSize: 30, color: "white" }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2>Summary</h2>
          <TextField
            id="outlined-read-only-input"
            multiline
            maxRows={4}
            variant="standard"
            required
            label="Event Name"
            value={paymentData.eventName}
            InputProps={{
              readOnly: true,
            }}
            onChange={e =>
              setPaymentData({ ...paymentData, eventName: e.target.value })}
            style={{ width: "100%", marginBottom: 16 }}
          />
          <TextField
            required
            id="standard-number"
            label="Quantity"
            type="number"
            value={paymentData.ticketNumber}
            onChange={handleTicketNumberChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <Grid container spacing={2} justifyContent="space-between" mt={2}>
            <Grid item>
              <Button onClick={handleClose}>Close</Button>
            </Grid>
            <Grid item>
              <a href="https://www.facebook.com" target="_blank">
                <Button
                  variant="contained"
                  size="small"
                  endIcon={<SendIcon />}
                  onClick={handleSend}
                >
                  Send
                </Button>
              </a>
            </Grid>
          </Grid>
          <Typography
            style={{
              fontStyle: "italic",
              color: "grey",
              textAlign: "center",
            }}
            marginTop={"1rem"}
          >
            Payment Service provided by{" "}
            <a href="https://stripe.com/it?" target="_blank">
              Stripe
            </a>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
