import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const AppMenuBar = () => {
  const navigator = useNavigate();
  const navigateHome = () => {
    navigator("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' onClick={navigateHome}>
        <Toolbar>
          <Typography>Project Scheduler</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppMenuBar;
