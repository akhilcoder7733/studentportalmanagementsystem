import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#f5f5f5",
        minHeight: "60vh",
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        flexDirection:"column"
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to the Student Portal
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Access all your academic resources and manage your profile seamlessly.
      </Typography>
      <Box sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
          sx={{ marginRight: "10px", textTransform: "none" }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/register"
          sx={{ textTransform: "none" }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
