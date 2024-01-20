import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import Rating from "./Rating";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
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

export default function ModalReview({ onReviewSubmit }) {
  const [open, setOpen] = React.useState(false);
  const [reviewData, setReviewData] = useState({
    yourName: "",
    reviewArtist: "",
    ratingArtist: 0,
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleReviewSubmit = () => {
    // Chiamare la funzione di aggiornamento passata come prop
    onReviewSubmit(reviewData);
    // Resetta i dati della recensione nel modulo
    setReviewData({
      yourName: "",
      reviewArtist: "",
      ratingArtist: 0,
    });
    // Chiudi il modulo
    handleClose();
  };
  return (
    <div style={{ float: "right" }}>
      <IconButton
        onClick={handleOpen}
        color="success"
        aria-label="addReview"
        size="large"
      >
        <AddCircleOutlineIcon fontSize="inherit" />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2>Write your review!</h2>
          <TextField
            id="standard-multiline-flexible"
            multiline
            maxRows={4}
            variant="standard"
            required
            label="Your name"
            value={reviewData.yourName}
            onChange={(e) =>
              setReviewData({ ...reviewData, yourName: e.target.value })
            }
            style={{ width: "100%" }}
          />{" "}
          <TextField
            id="standard-multiline-static"
            multiline
            variant="standard"
            required
            label="Talk about your experience"
            rows={5}
            value={reviewData.reviewArtist}
            onChange={(e) =>
              setReviewData({ ...reviewData, reviewArtist: e.target.value })
            }
            style={{ width: "100%" }}
          />
          <Grid
            container
            direction={"column"}
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
            gap={"1rem"}
          >
            <Rating
              value={reviewData.ratingArtist}
              onChange={(event, newValue) =>
                setReviewData({ ...reviewData, ratingArtist: newValue })
              }
            />

            <Button
              variant="contained"
              size="small"
              endIcon={<SendIcon />}
              onClick={handleReviewSubmit}
            >
              Send
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
