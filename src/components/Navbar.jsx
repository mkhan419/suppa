import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 32px",
        backgroundColor: "rgba(26, 11, 30, 1)",
        color: "rgba(155, 105, 193, 1)",
        marginTop: "200px",
        marginLeft: "100px",
      }}
    >

      {/* Navigation Links */}
      <Box sx={{ display: "flex", gap: "50px" }}>
        <Button color="inherit" sx={{ textTransform: "none", fontSize: "20px" }}>
          Home
        </Button>
        <Button color="inherit" sx={{ textTransform: "none", fontSize: "20px" }}>
          About
        </Button>
        <Button color="inherit" sx={{ textTransform: "none", fontSize: "20px" }}>
          Services
        </Button>
        <Button color="inherit" sx={{ textTransform: "none", fontSize: "20px" }}>
          Contact
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
