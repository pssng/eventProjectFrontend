import * as React from "react";
import Divider from "@mui/material/Divider";
import {
  Grid,
  TextField,
  Stack,
  CardActions,
  Button,
  CardContent,
  Card,
} from "@mui/material";
import StaticRating from "./StaticRating";
import Typography from "@mui/material/Typography";

function Review({ yourName, reviewArtist, rating }) {
  return (
    <Card
      style={{
        width: "20rem",
        textAlign: "center",
        height: "20rem",
        position: "relative",
        border: "1px solid black",
      }}
    >
      <Grid container direction={"row"} justifyContent={"space-around"}>
        <Grid item style={{ height: "100%" }}>
          <CardContent style={{ width: "100%" }}>
            <Typography gutterBottom variant="h5" component="div">
              {yourName}
            </Typography>
            <Grid container alignItems="center">
              <Grid item xs={12}>
                <Divider
                  orientation="horizontal"
                  style={{ backgroundColor: "black" }}
                />
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ overflowWrap: "break-word", width: "100%" }}
            >
              {reviewArtist}
            </Typography>
          </CardContent>

          {/* DIVIDER IN POI */}

          <Stack
            direction={"column"}
            spacing={1}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              marginBottom: "auto",
            }}
          >
            <Divider
              orientation="horizontal"
              style={{ backgroundColor: "gray" }}
            />

            <Typography variant={"h5"} component={"i"}>
              Rating
            </Typography>
            <div style={{ margin: "auto" }}>
              <StaticRating value={rating} />{" "}
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Review;
