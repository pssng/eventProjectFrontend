//modificato tutto
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Stack, Grid, IconButton, Divider } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ModalDialogue from "./ModalDialogue"; // Importa il tuo componente ModalDialogue
import eventImage from "../../Assets/event3.jpg";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState, useEffect } from "react";

function CardOpere({ description, title, id, onUpdate, onDelete }) {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardData, setCardData] = useState({ title, description });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenDeleteModal = () => setIsDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);

  const handleDelete = () => {
    // Implementa la logica per l'eliminazione dell'elemento
    console.log(`Eliminazione dell'elemento con id: ${id}`);

    if (typeof onDelete === "function") {
      // Passa l'id alla funzione onDelete
      onDelete(id);
    }

    // Aggiorna la UI o esegui azioni necessarie
    // Chiudi il modal dopo l'eliminazione o esegui altre azioni
    handleCloseDeleteModal();
  };
  useEffect(() => {
    // Questo effetto collaterale si attiverà ogni volta che cardData cambierà
    console.log("Dati della card aggiornati:", cardData);
  }, [cardData]); // Assicurati di specificare cardData come dipendenza

  const handleUpdate = (updatedTitle, updatedDescription) => {
    // Aggiorna lo stato con i nuovi dati
    setCardData({
      title: updatedTitle,
      description: updatedDescription,
      id: id,
    });

    // Chiudi il modal
    handleCloseModal();

    // Stampa i dati aggiornati nella console
    console.log("Dati della card aggiornati:", cardData);

    if (typeof onUpdate === "function") {
      onUpdate(updatedTitle, updatedDescription, id);
    }
  };
  return (
    <Card style={{ width: "15rem", textAlign: "left" }}>
      <CardMedia
        component="img"
        height="100"
        image={eventImage}
        alt="green iguana"
      />
      <Grid container direction={"row"} justifyContent={"space-around"}>
        <Grid item>
          {" "}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardData.description}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item>
          {" "}
          <Stack
            direction={"column"}
            spacing={2}
            justifyContent={"space-around"}
          >
            <IconButton
              aria-label="edit"
              color="primary"
              onClick={handleOpenModal}
            >
              <BorderColorIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={handleOpenDeleteModal}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
      <ModalDialogue
        open={isModalOpen}
        handleClose={handleCloseModal}
        title={cardData.title}
        description={cardData.description}
        id={id}
        onUpdate={handleUpdate}
      />
      <ModalDialogue
        open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        handleDelete={handleDelete}
        showDeleteButton
      />
    </Card>
  );
}
export default CardOpere;
