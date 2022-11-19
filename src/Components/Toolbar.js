import React, { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Menu,
  Divider
} from "@mui/material";
import { Settings } from "@mui/icons-material";


const modes = ["Start", "Reset"];
const settings = ["Fast Sorting", "Lazy Sorting", "Sorting 3"];

const ToolBar = (props) => {
  const [modeElelement, setModeElelement] = useState(null);
  const open = Boolean(modeElelement);

  const handleOpenModeMenu = (event) => {
    setModeElelement(event.currentTarget);
    console.log(event.currentTarget)
  };

  const handleCloseModeMenu = () => {
    setModeElelement(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sorting ToolBar
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            justifyContent: "end",
          }}>
          <IconButton
            onClick={handleOpenModeMenu}
            color="inherit"
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "option-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}>
            <Settings />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            textAlign: "center",
          }}>
          {modes.map((elements) => (
            <Button
              key={elements}
              sx={{ my: 2, color: "white", display: "block" }}>
              {elements}
            </Button>
          ))}
          <Tooltip title="Mode settings">
            <IconButton
              onClick={handleOpenModeMenu}
              color="inherit"
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "option-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}>
              <Settings />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={modeElelement}
          id="option-menu"
          open={open}
          onClose={handleCloseModeMenu}
          onClick={handleCloseModeMenu}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
          {modes.map((el) => (
            <MenuItem key={el} sx={{ display: { xs: "flex", md: "none" } }}>
              <Button>{el} </Button>
            </MenuItem>
          ))}
          <Divider sx={{ display: { xs: "flex", md: "none" } }} />
          {settings.map((el) => (
            <MenuItem key={el}>
              <Button>{el}</Button>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default ToolBar;
