import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom/";
import { useNavigate, useLocation } from "react-router-dom/";

function ResponsiveAppBar(props) {
  const navigate = useNavigate();
  const pages = [
    { name: "Home" },
    { name: "Events" },
    { name: "Contacts" },
    { name: "Artists" },
    { name: "Support"}
  ];

  const logins = [
    { name: "Promoters", action: "/loginPromoters" },
    { name: "Customer", action: "/loginClients" },
    { name: "Artist", action: "/loginArtist" },
    { name: "Admin", action: "/loginAdmin" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEllogin, setAnchorEllogin] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenloginMenu = (event) => {
    setAnchorEllogin(event.currentTarget);
  };

  const handleCloseloginMenu = () => {
    setAnchorEllogin(null);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  let location = useLocation();

  const pathName = window.location.pathname;
  return (
    <AppBar
      position="static"
      style={{ background: "#22223B" }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="i"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Art is for Everyone.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                //  {page.RoleAccess.map((e)=>{log === e ? setVisible(true) : setVisible(false)}) }

                return (
                  <Link
                    key={page.name}
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/${page.name}`}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography>{page.name}</Typography>
                    </MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="i"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Art is <br></br>for Everyone.
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/${page.name}`}
                key={page.name}
              >
                <Button
                  style={{
                    background:
                      pathName === `/${page.name}` ? "#F2E9E4" : "#22223B",
                    color: pathName === `/${page.name}` ? "black" : "white",
                    textDecoration: "none",
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          {props.isAuth ? (
            <Link
              style={{ textDecoration: "none" }}
              to={`/Account`}
              key={"Account"}
            >
              <Button
                onClick={() => {
                  navigate("/auth/account");
                  window.location.reload();
                }}
                style={{
                  background: pathName === "/auth/account" ? "#F2E9E4" : "#22223B",
                  color: pathName === "/auth/account" ? "black" : "white",
                  textDecoration: "none",
                  display: "block",
                }}
                sx={{ my: 2, display: "block" }}
              >
                {"Account"}
              </Button>
            </Link>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open login">
                <IconButton onClick={() => navigate("/login")} sx={{ p: 0 }}>
                  <LoginIcon style={{ color: "white" }} alt="Your logins" />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
