import React from "react";
import { AppBar, Box, Container, Stack, Toolbar, Typography, Grid, Button } from "@mui/material";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { Link } from "react-router-dom";

export const PaymentError = () => {
  return (
    <Box style={{ position: 'relative', minHeight: '100vh' }}>    
    <AppBar
      position="static"
      style={{ background: "black" }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters
                    >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500.000000 500.000000"
              preserveAspectRatio="xMidYMid meet"
              width="15rem"
              style={{ margin: "auto" , padding:"1rem"}}

            >
              <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" stroke="none" fill="whitesmoke" width="100px" borderRadius="16px">
              <path
            d="M0 2500 l0 -2500 2500 0 2500 0 0 2500 0 2500 -2500 0 -2500 0 0
            -2500z m2580 1331 c0 -5 -29 -12 -65 -16 -40 -4 -76 -15 -97 -29 -65 -44 -63
            -11 -66 -773 l-3 -693 -139 0 -139 0 -3 703 c-3 658 -4 704 -21 729 -24 35
            -68 54 -144 63 -35 4 -63 11 -63 16 0 5 157 9 370 9 207 0 370 -4 370 -9z
            m888 -1119 c78 -208 142 -381 142 -385 0 -4 -62 -7 -139 -7 l-138 0 -69 193
            c-38 105 -83 239 -100 297 -18 58 -35 98 -38 90 -3 -8 -48 -138 -101 -289 -90
            -262 -107 -302 -121 -289 -4 5 192 574 257 746 8 20 15 22 86 22 l78 0 143
            -378z m-2118 -521 c0 -102 4 -114 45 -124 15 -3 13 -5 -8 -6 -24 -1 -27 -4
            -22 -21 10 -32 -5 -23 -16 10 -8 22 -19 31 -43 35 -28 6 -37 2 -68 -29 -42
            -42 -56 -44 -123 -12 -46 21 -115 84 -115 105 0 37 73 34 194 -8 33 -12 63
            -21 68 -21 11 0 53 92 63 138 13 62 25 31 25 -67z m295 -19 l-6 -38 37 4 c25
            3 35 1 30 -7 -4 -6 -23 -11 -41 -11 -29 0 -36 -4 -41 -27 -8 -29 5 -56 28 -61
            8 -1 31 9 51 22 20 14 37 21 37 16 0 -15 -61 -50 -87 -50 -12 0 -28 9 -36 20
            -13 19 -16 19 -43 5 -44 -22 -95 -20 -101 6 -3 11 -11 18 -19 15 -16 -6 -38
            19 -29 34 9 15 25 12 25 -5 0 -8 9 -15 19 -15 14 0 18 -5 14 -20 -4 -16 0 -20
            22 -20 46 0 95 29 95 56 0 20 -5 24 -32 26 l-33 1 33 4 c20 3 35 11 38 21 14
            42 24 62 35 62 7 0 9 -13 4 -38z m545 -67 c-18 -29 -18 -33 -4 -39 24 -9 54
            -7 92 6 29 11 35 10 47 -5 22 -31 81 -19 96 19 4 13 14 24 20 24 6 0 9 -7 5
            -15 -4 -11 1 -15 18 -15 19 0 23 -4 19 -20 -4 -17 0 -20 23 -20 16 0 42 7 58
            15 16 9 31 13 33 11 10 -10 -58 -36 -92 -36 -28 0 -35 4 -35 20 0 16 -5 19
            -24 16 -13 -2 -33 -9 -44 -15 -12 -6 -34 -11 -49 -11 -16 0 -34 -5 -40 -11 -7
            -7 -15 -6 -25 4 -8 9 -39 16 -72 18 l-58 4 6 -42 c6 -48 -8 -98 -25 -87 -21
            13 11 173 42 211 22 26 29 1 9 -32z m-204 0 c-3 -9 0 -26 7 -38 6 -12 13 -24
            14 -26 1 -2 18 6 38 17 19 12 35 17 35 12 0 -11 -44 -35 -81 -43 -16 -4 -33
            -1 -45 8 -18 14 -17 15 9 9 28 -6 35 4 16 23 -8 8 -23 3 -57 -18 -66 -42 -113
            -38 -111 10 2 22 2 23 6 4 9 -47 61 -38 128 21 45 40 49 42 41 21z m-156 1 c0
            -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m1376
            -11 c-4 -11 1 -15 18 -15 20 0 23 -4 18 -22 -5 -20 -2 -21 37 -15 23 3 50 12
            60 21 24 22 34 20 26 -4 -5 -15 -2 -20 10 -20 9 0 19 8 21 18 4 14 17 17 81
            17 52 0 78 -4 80 -12 6 -18 54 -16 83 4 14 10 25 13 27 6 2 -5 14 -8 26 -6 14
            3 29 -2 36 -11 20 -24 54 -19 96 14 38 31 55 34 63 12 2 -6 -8 -14 -22 -18
            -31 -7 -34 -20 -6 -29 26 -8 78 2 108 22 13 8 26 12 29 9 3 -2 -13 -14 -36
            -25 -46 -24 -104 -27 -123 -7 -11 11 -18 11 -47 -1 -32 -13 -36 -13 -63 7
            l-30 22 -24 -23 -24 -22 0 22 c0 18 -3 20 -19 11 -11 -5 -33 -10 -50 -10 -16
            0 -32 -4 -36 -10 -8 -12 -35 -1 -35 14 0 15 -60 18 -77 3 -7 -5 -18 -28 -24
            -51 -11 -43 -25 -66 -40 -66 -15 0 -10 34 11 68 25 40 25 41 -1 35 -12 -3 -25
            0 -29 7 -6 9 -13 9 -28 1 -11 -6 -37 -11 -56 -11 -29 0 -36 4 -36 20 0 24 -16
            22 -80 -8 -52 -25 -98 -28 -125 -8 -14 10 -25 11 -39 4 -10 -6 -36 -8 -57 -5
            -21 3 -42 0 -49 -7 -9 -8 -15 -6 -26 10 -15 21 -15 21 -51 3 -56 -28 -133 -21
            -133 13 0 17 31 48 47 48 23 0 10 -35 -15 -38 -34 -5 -26 -20 13 -28 27 -5 47
            0 85 18 53 26 60 26 60 -5 0 -28 25 -15 28 16 4 33 19 36 24 5 5 -35 45 -34
            100 2 26 17 52 29 58 25 14 -9 -6 -35 -26 -35 -24 0 -15 -19 11 -26 38 -9 114
            23 125 52 5 13 15 24 21 24 6 0 9 -7 5 -15z m-896 -272 c0 -23 -64 -114 -109
            -156 -63 -59 -150 -101 -253 -121 -81 -17 -228 -22 -228 -8 0 4 34 13 74 19
            128 18 205 81 241 196 9 29 18 58 20 65 3 9 38 12 130 12 69 0 125 -3 125 -7z
            m435 -10 c-3 -10 -26 -76 -51 -147 -43 -127 -53 -190 -34 -225 15 -29 77 -48
            183 -56 188 -14 98 -25 -198 -25 -285 0 -376 10 -220 25 130 12 154 41 244
            295 36 102 58 150 68 150 10 0 13 -6 8 -17z m1119 -153 c34 -91 70 -179 79
            -197 21 -40 63 -73 93 -73 29 0 54 -10 54 -21 0 -5 -151 -9 -350 -9 -227 0
            -350 4 -350 10 0 12 -10 10 85 17 168 10 179 49 87 306 l-50 138 145 -3 145
            -3 62 -165z"
          />                <path d="M1308 2177 l-27 -68 26 -10 c14 -5 28 -8 30 -5 2 2 3 37 1 77 l-3 74 -27 -68z" />
                <path d="M1020 2146 c0 -30 80 -90 146 -110 24 -7 84 35 84 59 0 8 -33 24 -78 39 -86 29 -152 34 -152 12z" />
                <path d="M1627 2186 c-4 -10 -7 -25 -6 -34 0 -11 4 -9 10 7 5 13 8 29 6 35 -2 5 -6 2 -10 -8z" />
                <path d="M2290 2050 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z" />
                <path d="M2142 1960 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
                <path d="M3045 2080 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z" />
                <path d="M3520 2050 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z" />
                <path d="M3380 1979 c-6 -11 -10 -25 -7 -32 2 -6 9 3 15 21 12 36 8 42 -8 11z" />
              </g>
            </svg>
        </Toolbar>  
      </Container>
    </AppBar>
    <Box
      style={{
        margin: "2rem auto",
        textAlign: "center",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <ReportGmailerrorredIcon fontSize="large" sx={{ color: "#E41C00" }} />
        </Grid>
        <Grid item>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#E41C00" }}>
            AN ERROR OCCURRED
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ fontWeight: "bold", color:"gray", marginTop:"2rem" }}>
         We're sorry to inform you that an error has been detected during the purchase of tickets.     
       </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold", color:"gray", marginTop:"2rem" }}>        
        Please try again or return to our site.
      </Typography>

      <Grid container justifyContent="center" alignItems="center" marginTop={"2rem"}>
       
        <Grid item sx={{ marginRight: "1rem" }}>
          <Link style={{ textDecoration: "none" }}
              to={`/Events`}
              key={"Events"} >
          <Button variant="contained">Try again</Button>
          </Link>
        </Grid>
        <Grid item sx={{ marginLeft: "1rem" }}>
          <Link style={{ textDecoration: "none" }}
              to={`/Home`}
              key={"Home"} >
          <Button variant="contained">Just Art</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>

    <footer style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: "black", textAlign: "center" }}>
       <Stack>
       <Typography sx={{ fontWeight: "bold", color:"gray"}}>
        JustArt is not a real platform. Payments, Events and their bookings are
        only a simulation for Educational purposes.
      </Typography>
      <Typography sx={{ fontWeight: "bold", color:"gray", marginTop:"1rem" }}>
        This is an University Project at Università degli Studi di Napoli
        "Parthenope"
      </Typography>
      <Typography sx={{ fontWeight: "bold", color:"gray" }}>Powered By</Typography>
      <Typography sx={{ fontWeight: "bold", color:"gray" }}>
        Coletta Paolo - Danila Dawid Adrian - Di Giorgio Maria Grazia - Fiore
        Carmela Pia
      </Typography>
      </Stack>
      </footer>
  </Box>
  );
};
