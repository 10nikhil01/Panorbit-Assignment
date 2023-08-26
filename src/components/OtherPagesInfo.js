import { Box, Typography } from "@mui/material";
import React from "react";
import FooterComp from "./FooterComp";
function OtherPagesInfo() {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 42,
            mr: 10,
          }}
        >
          <Typography
            sx={{ color: "#e9e9e9", fontSize: "5.2rem", fontWeight: "700" }}
          >
            Coming Soon
          </Typography>
       </Box>
      
      
      </Box>
    </>
  );
}

export default OtherPagesInfo;
