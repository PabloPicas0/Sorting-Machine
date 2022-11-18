import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import React, { useState } from "react";

const modes = ["Start", "Reset", "Modes"];
const settings = ["Fast Sorting", "Lazy Sorting", "Sorting 3"];

const ToolBar = (props) => {
  const [navElement, setNavElement] = useState(null);
  const [modeElelement, setModeElelement] = useState(null);

  const handleOpenNavMenu = (event) => {
    setNavElement(event.currentTarget);
  };

  const handleOpenModeMenu = (event) => {
    setModeElelement(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavElement(null);
  };

  const handleCloseModeMenu = () => {
    setModeElelement(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sorting ToolBar
          </Typography>

          <Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current users"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {modes.map((elements) => (
                <Button
                  key={elements}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  {elements}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ToolBar;
