import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import Rating from "./Rating";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from "axios";
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

export default function ModalReview(reviewRating) {
  const [open, setOpen] = React.useState(false);
  const apiUrl = "http://localhost:8080/auth/reviews";
  const generals = JSON.parse(localStorage.getItem("userGenerals"));
  const [reviewData, setReviewData] = useState({
    reviewTitle: "",
    reviewText: "",
    reviewRating: null,
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleReviewSubmit = async () => {
    // Validazione dei dati
    if (
      reviewData.reviewTitle.trim() === "" ||
      reviewData.reviewText.trim() === ""
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const token = localStorage.getItem("authKey");
    const actorFiscalCode = generals.fiscalCode;

    try {
      // Creazione dell'oggetto JSON con i dati della recensione
      const reviewDto = {
        reviewData: {
          reviewTitle: reviewData.reviewTitle,
          reviewText: reviewData.reviewText,
          reviewRating: reviewData.reviewRating,
        },
        actorFiscalCode: actorFiscalCode,
      };

      console.log("Review data:", reviewDto);

      // Invio della richiesta POST all'endpoint dell'API utilizzando axios
      const response = await axios.post(apiUrl + "/to_artist", reviewDto, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response data:", response.data);

      if (response.data && response.data.reviewRating) {
        // Se la richiesta ha avuto successo, reimposta il modulo e chiudi il modal
        setReviewData({
          reviewTitle: "",
          reviewText: "",
          reviewRating: 0,
        });
        handleClose();

        // Mostra un messaggio di successo
        alert("Review submitted successfully!");
      } else {
        throw new Error("Failed to submit the review.");
      }
    } catch (error) {
      console.error(error);
      // Mostra un messaggio di errore
      alert("Failed to submit the review. Please try again later.");
    }
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
            value={reviewData.reviewTitle}
            onChange={(e) =>
              setReviewData({ ...reviewData, reviewTitle: e.target.value })
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
            value={reviewData.reviewText}
            onChange={(e) =>
              setReviewData({ ...reviewData, reviewText: e.target.value })
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
              value={reviewData.reviewRating}
              onChange={(newValue) =>
                setReviewData({ ...reviewData, reviewRating: newValue })
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
