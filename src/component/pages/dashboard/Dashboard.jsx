import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import PersistentDrawerLeft from "../../sidebar/Sidebar";
import { useTheme } from "@mui/material/styles";
import Header from "../../dashboardHeader/Header";

function Dashboard() {
  const theme = useTheme();
  const isBelow869px = useMediaQuery("(max-width:869px)");

  return (
    <>
      <Box sx={DashboardStyles.mainContainer}>
        <Box
          sx={{
            ...DashboardStyles.wrapper,
            flexDirection: isBelow869px ? "column" : "row",
          }}
        >
          {/* Sidebar */}
          <Box
            sx={{
              ...DashboardStyles.sidebar,
              width: isBelow869px ? "100%" : "280px",
              display: isBelow869px ? "block" : "flex", // Ensures the sidebar shows properly below 869px
            }}
          >
            <PersistentDrawerLeft />
          </Box>

          {/* Content Area */}
          <Box
            sx={{
              ...DashboardStyles.contentArea,
              width: isBelow869px ? "100%" : "82%",
              marginTop: isBelow869px ? 0 : "0", // Ensure content does not move down before sidebar is shown
            }}
          >
            <Box sx={DashboardStyles.content}>
              <Header />
            </Box>
            <Box>
              <Box>Content Area</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;

export const DashboardStyles = {
  mainContainer: {
    width: "100%",
    height: "auto",
    backgroundColor: "blue",
    margingTop: "100px",
  },
  wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
    gap: "29px",
  },
  sidebar: {
    
    height: "100%", 
  },
  contentArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    height: "auto",

  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
};
