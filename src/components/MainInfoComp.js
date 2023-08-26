import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import { React, useState, useEffect } from "react";
import Map from "../Assets/Map.png";
const width = "330px";
function MainInfoComp() {
  const [selectedUserData, setSelectedUserData] = useState({});

  useEffect(() => {
    const storedSelectedUserData = localStorage.getItem("selectedUserData");
    if (storedSelectedUserData) {
      setSelectedUserData(JSON.parse(storedSelectedUserData));
    }
  }, []);

  return (
    <Box sx={{}}>
      <Grid container sx={{ width: `calc(100% - ${width})`, ml: 16, mt: 18 }}>
        <Grid item md={5} sx={{ borderRight: "1px solid #e5e5e5", pr: 12 }}>
          <Box sx={{}}>
            <Avatar
              sx={{ width: 200, height: 200, ml: 10 }}
              src={selectedUserData.profilepicture}
            />
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "#555",
                fontWeight: "600",
                ml: 11,
                my: 2,
              }}
            >
              {selectedUserData.name}
            </Typography>
          </Box>
          <Grid container sx={{ mb: 1,}}>
            <Grid
              item
              md={6}
              sx={{ textAlign: "right", fontSize: "1.2rem", color: "#999" }}
            >
              Username{" :"}{" "}
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                textAlign: "left",
                pl: 1,
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {" "}
              {selectedUserData.name}
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 1 }}>
            <Grid
              item
              md={6}
              sx={{ textAlign: "right", fontSize: "1.2rem", color: "#999" }}
            >
              e-mail{" :"}{" "}
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                textAlign: "left",
                pl: 1,
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {" "}
              {selectedUserData.email}
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 1 }}>
            <Grid
              item
              md={6}
              sx={{ textAlign: "right", fontSize: "1.2rem", color: "#999" }}
            >
              Phone{" :"}{" "}
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                textAlign: "left",
                pl: 1,
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {" "}
              {selectedUserData.phone}
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 1 }}>
            <Grid
              item
              md={6}
              sx={{ textAlign: "right", fontSize: "1.2rem", color: "#999" }}
            >
              Website{" :"}{" "}
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                textAlign: "left",
                pl: 1,
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {" "}
              {selectedUserData.website}
            </Grid>
          </Grid>
          <Divider sx={{ my: 2, ml: 6 }} />
          <Grid
            item
            md={12}
            sx={{
              textAlign: "center",
              mb: 2,
              fontSize: "1.2rem",
              color: "#999",
            }}
          >
            Company{" "}
          </Grid>
          {/* <Grid container sx={{ mb: 1 }}>
            <Grid
              item
              md={6}
              sx={{ textAlign: "right", fontSize: "1.2rem", color: "#999" }}
            >
              Name{" :"}{" "}
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                textAlign: "left",
                pl: 1,
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {" "}
              {selectedUserData.company.name}
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 1 }}>
            <Grid
              item
              md={6}
              sx={{ textAlign: "right", fontSize: "1.2rem", color: "#999" }}
            >
              catchphrase{" :"}{" "}
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                textAlign: "left",
                pl: 1,
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {" "}
              {selectedUserData.company.catchPhrase}
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 1 }}>
            <Grid
              item
              md={6}
              sx={{ textAlign: "right", fontSize: "1.2rem", color: "#999" }}
            >
              bs{" :"}{" "}
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                textAlign: "left",
                pl: 1,
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {" "}
              {selectedUserData.company.bs}
            </Grid>
          </Grid> */}
        </Grid>
        <Grid item md={7} sx={{ pl: 6 }}>
          <Grid
            item
            md={12}
            sx={{ textAlign: "left", fontSize: "1.2rem", mb: 2, color: "#999" }}
          >
            Address{" :"}{" "}
          </Grid>
          {/* <Grid container sx={{ mb: 1 }}>
            <Grid
              item
              md={2}
              sx={{ textAlign: "right", fontSize: "1.2rem", color: "#999" }}
            >
              Street{" :"}{" "}
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                textAlign: "left",
                pl: 1,
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {" "}
              {selectedUserData.address.street}
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 1 }}>
            <Grid
              item
              md={2}
              sx={{ textAlign: "right", fontSize: "1.2rem", color: "#999" }}
            >
              Suite{" :"}{" "}
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                textAlign: "left",
                pl: 1,
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {" "}
              {selectedUserData.address.suite}
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 1 }}>
            <Grid
              item
              md={2}
              sx={{ textAlign: "right", fontSize: "1.2rem", color: "#999" }}
            >
              City{" :"}{" "}
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                textAlign: "left",
                pl: 1,
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {" "}
              {selectedUserData.address.city}
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 2 }}>
            <Grid
              item
              md={2}
              sx={{ textAlign: "right", fontSize: "1.2rem", color: "#999" }}
            >
              Zipcode{" :"}{" "}
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                textAlign: "left",
                pl: 1,
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#555",
              }}
            >
              {" "}
              {selectedUserData.address.zipcode}
            </Grid>
          </Grid> */}
          <Box>
            <img
              style={{ maxWidth: "35rem", borderRadius: "30px" }}
              src={Map}
              alt="map"
            />
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 2,
              width: "100%",
              mt: 1,
            }}
          >
            <Typography sx={{ fontSize: "1rem", color: "#999" }}>
              Lat:{" "}
              <span
                style={{ color: "#000", fontSize: "1.1rem", fontWeight: "600" }}
              >
                {selectedUserData.address.geo.lat}
              </span>
            </Typography>
            <Typography sx={{ fontSize: "1rem", color: "#999" }}>
              Long:{" "}
              <span
                style={{ color: "#000", fontSize: "1.1rem", fontWeight: "600" }}
              >
                {selectedUserData.address.geo.lng}
              </span>
            </Typography>
          </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainInfoComp;
