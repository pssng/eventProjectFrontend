import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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

export default function ModalUploadArtwork({ onUploadArtwork }) {
  const [open, setOpen] = React.useState(false);
  const [uploadImage, setUploadImage] = useState("");
  const [theme, setTheme] = useState("");
  const [artworkData, setArtworkData] = useState({
    artworkName: "",
    artworkDescription: "",
    artworkImage: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleUploadArtwork = () => {
    // Chiamare la funzione di aggiornamento passata come prop
    onUploadArtwork(artworkData);
    // Resetta i dati della recensione nel modulo
    setArtworkData({
      artworkName: "",
      artworkDescription: "",
      artworkImage: "",
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
          <h2>Upload your artwork</h2>
          <TextField
            id="standard-multiline-flexible"
            multiline
            maxRows={4}
            variant="standard"
            required
            label="Artwork's name"
            value={artworkData.artworkName}
            onChange={(e) =>
              setArtworkData({ ...artworkData, artworkName: e.target.value })
            }
            style={{ width: "100%" }}
          />{" "}
          <TextField
            id="standard-multiline-static"
            multiline
            variant="standard"
            required
            label="Talk about your artwork"
            rows={5}
            value={artworkData.artworkDescription}
            onChange={(e) =>
              setArtworkData({
                ...artworkData,
                artworkDescription: e.target.value,
              })
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
            <Grid container item md="10" spacing={2}>
              <Grid item md="6">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Artwork's date" />
                </LocalizationProvider>
              </Grid>
              <Grid item md="6">
                <TextField
                  required
                  id="outlined-required"
                  label="Theme"
                  onChange={(e) => setTheme(e.target.value)}
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>

            <Grid item md="10">
              <Typography fontStyle={"italic"}>Upload Your Images</Typography>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload Image
                <VisuallyHiddenInput
                  type="file"
                  onChange={(e) => setUploadImage(e.target.files[0])}
                />
              </Button>
            </Grid>

            <Button
              variant="contained"
              size="small"
              endIcon={<SendIcon />}
              onClick={handleUploadArtwork}
            >
              Send
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
