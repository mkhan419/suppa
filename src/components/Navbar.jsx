import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(26, 11, 30, 1)",
        color: "rgba(155, 105, 193, 1)",
      }}
    >

      {/* Navigation Links */}
      <Box sx={{ display: "flex", gap: "50px" }}>
        <Button 
        component={Link} 
        to="/"
        color="inherit" sx={{ textTransform: "none", fontSize: "20px", fontFamily: "'Times New Roman', Times, serif", }} >
          about us
        </Button>
        <Button 
          component={Link}
          to="/menu" 
          color="inherit" 
          sx={{ textTransform: "none", fontSize: "20px", fontFamily: "'Times New Roman', Times, serif", }}
        >
          cuisine
        </Button>
        <Button color="inherit" sx={{ textTransform: "none", fontSize: "20px", fontFamily: "'Times New Roman', Times, serif", }}>
          reservations & order
        </Button>
        <Button color="inherit" sx={{ textTransform: "none", fontSize: "20px", fontFamily: "'Times New Roman', Times, serif", }}>
          events
        </Button>
      </Box>
    </Box>
  );
};
