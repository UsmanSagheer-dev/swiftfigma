import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import PersistentDrawerLeft from "../../sidebar/Sidebar";
import { useTheme } from "@mui/material/styles";
import Header from "../../dashboardHeader/Header";
import OutlinedCard from "../../targetcard/TargetCard";
import IncomeCard from "../../incomeCard/IncomeCard";
import ProfitCard from "../../profitCard/ProfitCard";
import ProducatCard from "../../productsCard/ProducatCard";
import { DashboardStyles } from "./dashboardStyle";
import Footer from "../../footer/Footer";
import NewCustomerCard from "../../newCustomercard/NewCustomerCard";
import MyComponent from "../../googlemap/googleMap";
import googleMap from "../../googlemap/googleMap";
import GoogleMap from "../../googlemap/googleMap";
import OrderCard from "../../orderCard/OrderCard";

function Dashboard() {
  const theme = useTheme();
  const isBelow869px = useMediaQuery("(max-width:1194px)");
  const isBelow850px = useMediaQuery("(max-width:900px)");

  return (
    <>
      <Box
        sx={{
          ...DashboardStyles.wrapper,
          flexDirection: isBelow869px ? "column" : "row",
        }}
      >
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
            marginLeft: isBelow850px ? "px" : isBelow869px ? "280px" : "310px",
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
                <Box overflow={"hidden"} width={"100%"}>
                  <IncomeCard />
                </Box>
              </Box>

              <Box>
                <ProfitCard />
              </Box>
            </Box>
            <Box sx={DashboardStyles.producat}>
              <ProducatCard heading={"Best Selling Products"} />
            </Box>
          </Box>
          <Box sx={DashboardStyles.second}>
            <Box>
              <NewCustomerCard />
            </Box>
            <Box >
              <OrderCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
