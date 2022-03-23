import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Appbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          aria-label="menu"
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
          Notes App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
