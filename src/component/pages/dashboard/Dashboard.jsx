import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import PersistentDrawerLeft from "../../sidebar/Sidebar";
import { useTheme } from "@mui/material/styles";
import Header from "../../dashboardHeader/Header";
import OutlinedCard from "../../targetcard/TargetCard";
import IncomeCard from "../../incomeCard/IncomeCard";

function Dashboard() {
  const theme = useTheme();
  const isBelow869px = useMediaQuery("(max-width:900px)");

  return (
    <>
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
            display: isBelow869px ? "block" : "flex",
            position: isBelow869px ? "relative" : "fixed",
          }}
        >
          <PersistentDrawerLeft />
        </Box>

        <Box
          sx={{
            ...DashboardStyles.contentArea,
            width: isBelow869px ? "100%" : "calc(100% - 280px)", // Full width on smaller screens, minus sidebar width on larger screens
            marginLeft: isBelow869px ? "0" : "310px", // Avoid content going behind the sidebar
          }}
        >
          <Box sx={DashboardStyles.content}>
            <Header />
          </Box>
          <Box >
            <Box  sx={DashboardStyles.cardsetting}>
              <Box>
                <OutlinedCard/>
              </Box>
              <Box>
                <IncomeCard/>
              </Box>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;

export const DashboardStyles = {
  wrapper: {
    display: "flex",
    width: "100%",
    gap: "29px",
  },
  sidebar: {
    backgroundColor: "blue",
    height: { xs: "auto", md: "100vh" },
  },
  contentArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    marginTop: "50px",
    height: "auto",
    overFlow: "scroll",
  },
  content: {
    display: "flex",

    height: "100%",
  },
  cardsetting:{
display:'flex',
alignItems: 'center',
gap:'21px'
  }
};
