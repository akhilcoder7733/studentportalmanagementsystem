import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  variant = "contained", // Default to "contained"
  color = "primary",    // Default to "primary"
  size = "medium",      // Default size
  onClick,              // Function to handle click events
  href,                 // Optional link for the button
  children,             // Text or elements inside the button
  sx = {},              // Custom styles
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      href={href}
      sx={{
        ...sx, // Allow passing additional custom styles
        px: 3, // Default padding
        py: 1, // Default padding
        fontWeight: "bold",
        textTransform: "none", // No capitalization
        borderRadius: "8px",  // Slightly rounded corners
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
