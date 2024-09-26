import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import PersistentDrawerLeft from "../../sidebar/Sidebar";
import { useTheme } from "@mui/material/styles";
import Header from "../../dashboardHeader/Header";
import OutlinedCard from "../../targetcard/TargetCard";
import IncomeCard from "../../incomeCard/IncomeCard";
import ProfitCard from "../../profitCard/ProfitCard";
import ProducatCard from "../../productsCard/ProducatCard";

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
            width: isBelow869px ? "100%" : "calc(100% - 280px)",
            marginLeft: isBelow869px ? "0" : "310px",
          }}
        >
          <Box sx={DashboardStyles.content}>
            <Header />
          </Box>
          <Box sx={DashboardStyles.carddashboard}>
            <Box sx={DashboardStyles.fisrtcard}>
              <Box sx={DashboardStyles.cardsetting}>
                <Box>
                  <OutlinedCard />
                </Box>
                <Box>
                  <IncomeCard />
                </Box>
              </Box>
              <Box backgroundColor={"gray"} overflow={'hidden'} sx={{width:{xs:'320px',md:"1000px"}}}>
                <Box
                  sx={{
                    overflowX: "hidden", // Enable horizontal scrolling
                    whiteSpace: "nowrap", // Prevent wrapping to the next line
                   
                  }}
                >
                  <ProfitCard />
                </Box>
              </Box>
            </Box>

            <Box sx={DashboardStyles.producat}>
              <ProducatCard heading={"Best Selling Products"} />
            </Box>
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
    flexDirection: "column", // Ensure cards stack vertically on smaller screens
    alignItems: "center", // Center the cards horizontally
  },
  sidebar: {
    backgroundColor: "blue",
    // height: { xs: "auto", md: "100vh" },
  },
  contentArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    marginTop: "50px",
    height: "auto",

    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },
  content: {
    display: "flex",
    width: "100%",
    justifyContent: "center", // Center content horizontally
  },
  carddashboard: {
    display: "flex",

    alignItems: "center",
    flexWrap: "wrap",
    gap: "25px",
    width: "100%",
    marginTop: "58px",
    "@media (max-width: 900px)": {
      gap: "15px",
      // alignItems: "center",
    },
  },
  fisrtcard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    justifyContent: "start",
    // No need for overflowX or alignItems here since we handle that in ProfitCard container
    "@media (max-width: 900px)": {},
  },

  cardsetting: {
    width: "100%",
    display: "flex",

    gap: "21px",

    "@media (max-width: 900px)": {
      flexWrap: "wrap",
      width: "100%",
      justifyContent: "center", // Center cards on small screens
      gap: "10px",
    },
  },

  producat: {
    width: "285px",
    height: "auto",
    backgroundColor: "#fff",
    padding: "10px 16px",
    borderRadius: "10px",
    border: "0.75px solid #00000020",

    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
};
