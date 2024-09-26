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
            <Box sx={DashboardStyles.fisrtcard} >
              <Box sx={DashboardStyles.cardsetting}>
                <Box>
                  <OutlinedCard />
                </Box>
                <Box>
                  <IncomeCard />
                </Box>
              </Box>
              <Box sx={{width:'100%'}}>
                <ProfitCard />
              </Box>
            </Box>
            <Box>
           <ProducatCard/>
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
    backgroundColor:'red'
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
    overFlow: "scroll",
  },
  content: {
    display: "flex",

    height: "100%",
  },
  carddashboard:{
    display: "flex",
  
    width: "100%",

    marginTop: '58px',
    
  },
  fisrtcard:{

    display: "flex",
    flexDirection: "column",
    gap:"20px",
    justifyContent: "center",

  },
  cardsetting: {
    display: "flex",
    alignItems: "center",
    gap: "21px",
  },
};
