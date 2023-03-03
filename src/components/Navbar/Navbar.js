import React from "react";

import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#5F073A", borderRadius: "10px" }}
    >
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Card Game
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
