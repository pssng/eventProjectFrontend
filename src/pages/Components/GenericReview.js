import { Box, Typography, Grid, Button } from "@mui/material";
import ModalReview from "./ModalReview";
import Review from "./Review";
import { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Link, useLocation } from "react-router-dom";

const GenericReview = () => {
  const [recensioniArtisti, setRecensioniArtisti] = useState([
    {
      yourName: "Mario Rossi",
      reviewArtist:
        "Beyond the technical prowess, there's a sense of authenticity in his creations. Each piece feels like a window into the artist's soul, offering a glimpse of their thoughts, feelings, and unique perspective on the world. It's this personal touch that makes their art not only visually stunning but also emotionally resonant.",
      ratingArtist: 5,
    },
    {
      yourName: "Francesco Bianchi",
      reviewArtist:
        "The use of color and texture in their pieces is nothing short of masterful, contributing to a vibrant and dynamic atmosphere that invites exploration. Every stroke seems purposeful, weaving together a narrative that unfolds with each gaze.",
    },
  ]);

  const handleReviewSubmit = (newReview) => {
    setRecensioniArtisti([...recensioniArtisti, newReview]);
  };
  const locationA = useLocation();
  return (
    <Box style={{ width: "100%" }}>
      <Typography variant="h4" component={"div"} style={{ margin: "1rem" }}>
        Review
        <ModalReview onReviewSubmit={handleReviewSubmit} />
      </Typography>
      <hr style={{ width: "70%", color: "lightgray" }} />

      <Box
        style={{
          margin: "1rem",
          border: "groove 1px gray",
          borderRadius: "10px",
          height: "80vh",
          padding: "2rem",
          textAlign: "left",
          overflowX: "scroll",
        }}
      >
        <Grid container direction={"row"} spacing={3}>
          {recensioniArtisti.map((rec, index) => (
            <Grid item key={index}>
              <Review yourName={rec.yourName} reviewArtist={rec.reviewArtist} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default GenericReview;
