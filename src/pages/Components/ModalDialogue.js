// ModalDialogue.jsx
import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalDialogue({
  open,
  handleClose,
  onUpdate,
  title,
  description,
  id,
  handleDelete,
  showDeleteButton,
}) {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const handleDeleteClick = () => {
    handleDelete(id);
    handleClose();
  };
  const handleUpdateButtonClick = () => {
    console.log("editedTitle:", editedTitle);
    console.log("editedDescription:", editedDescription);

    if (typeof onUpdate === "function") {
      // Passa i dati corretti a onUpdate
      onUpdate(editedTitle, editedDescription, id);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
    >
      <Fade in={open}>
        <Box sx={style}>
          {!showDeleteButton && (
            <React.Fragment>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <Grid
                container
                direction="column"
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginBottom: "0.5rem" }}
                  onClick={handleUpdateButtonClick}
                >
                  <SaveAsIcon />
                  Save Changes
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Grid>
            </React.Fragment>
          )}
          {showDeleteButton && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <Typography variant="body1">Are you sure?</Typography>
              <div>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDeleteClick}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}
