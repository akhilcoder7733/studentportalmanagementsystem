import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `url('https://source.unsplash.com/1600x900/?education,students')`, // Replace with a relevant image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{ fontWeight: "bold", mb: 2, color:"black" }}
      >
        Welcome to the Student Portal
      </Typography>
      <Typography
        variant="h6"
        sx={{ mb: 4, maxWidth: "600px", lineHeight: "1.6", color:"black" }}
      >
        Manage your academic journey effortlessly. Log in to access your
        dashboard or register to get started!
      </Typography>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mr: 2, px: 4 }}
          href="/login"
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          sx={{
            px: 4,
            borderColor: "white",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
          href="/register"
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
