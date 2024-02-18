import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import im3 from "../Assets/background.jpg";
import Alert from "@mui/material/Alert";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [describe, setDescribe] = useState("");
  const [confermaEmail, setConfermaEmail] = useState("");
  const [buttonText, setButtonText] = useState("Send Ticket!");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = () => {
    
    const apiUrl = "http://127.0.0.1:8080/public/support/new_ticket"

    let jsonData = {
      userRealName: name,
      userRealSurname: surname,
      userEmail: email,
      ticketDescription:describe,
  };

  var jsonString = JSON.stringify(jsonData);

  var httpRequest = new XMLHttpRequest();

  httpRequest.open("POST",apiUrl,true);
  httpRequest.setRequestHeader("Content-Type", "application/json");

  httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState === 4){
      if(httpRequest.status === 200){
        console.log("ok");
      }
    }
  }

  httpRequest.send(jsonString);

  };
  const handleSendTicket = () => {
    <Alert severity="success">Sent! Check your email..</Alert>;
    handleSubmit();
    setButtonDisabled(true);
  };
  function handleClick() {
    setButtonText("Sent!");
  }

  return (
    <>
      <style>
        {`
        body {
          margin: 0;
          padding: 0;
          background-image: url(${im3});
          background-size: cover;
          background-repeat: no-repeat;
        }
      `}
      </style>
      <Box
        style={{
          border: "groove 3px black",
          borderRadius: "30px",
          width: "30rem",
          padding: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
        className={"center"}
        bgcolor={"aliceblue"}
      >
        <form onSubmit={handleSubmit}>
          <Box style={{ padding: "1rem" }}>
            <Typography variant={"h4"} component={"i"}>
              {"Need help?"}
            </Typography>
            <Typography variant={"subtitle"} component={"div"}>
              {" Contact Us!"}
            </Typography>
          </Box>
          <Grid
            container
            direction={"column"}
            spacing={3}
            style={{ justifyContent: "center" }}
          >
            <Grid item md="10">
              <TextField
                required
                id="outlined-required"
                label="Name"
                onChange={(e) => setName(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="10">
              <TextField
                required
                id="outlined-required"
                label="Surname"
                onChange={(e) => setSurname(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="10">
              <TextField
                required
                id="outlined-required"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="10">
              <TextField
                required
                id="outlined-required"
                label="Confirm Your Email"
                onChange={(e) => setConfermaEmail(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="10">
              <TextField
                required
                id="outlined-multiline-static"
                label="Describe your problem"
                multiline
                rows={5}
                style={{ width: "90%" }}
                onChange={(e) => setDescribe(e.target.value)}
              />
            </Grid>
            <Grid item md="10">
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  handleSendTicket();
                  handleClick();
                }}
                disabled={buttonDisabled}
              >
                {buttonText}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};
