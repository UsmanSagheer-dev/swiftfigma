import { Box } from "@mui/material";
import React from "react";
import PersistentDrawerRight from "../../sidebar/Sidebar";

function Dashboard() {
  return (
    <>
    <Box sx={{ width:'100%',backgroundColor:'red',height:"100vh" }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "flex-start",
        padding: {md: "40px 72px" },
        background: "black",
        flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on large screens
   
        height: "100vh", // Full viewport height
      
        overflow: "hidden", // Disable scrolling
      }}
    >
      {/* Sidebar */}
      <Box 
        sx={{
          width: { xs: '100%', md: '15%' }, // 100% width on small screens, 15% on large screens
          backgroundColor: "red",
        }}
      >
        <PersistentDrawerRight />
      </Box>

      {/* Content Area */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: '100%', md: "100%" }, // 100% width on small screens, remaining space on large screens
          marginLeft: { xs: 0, md: "20px" }, // Margin on larger screens to create space from sidebar
          backgroundColor: 'blue',
          height: "100%", // Full height for the content area
          overflowY: "auto", // Allow vertical scroll within the content area if content overflows
        }}
      >
        <h1>Content for Dashboard</h1>
        <p>
          This is the content area. It will be displayed to the right of the
          sidebar on larger screens, and below the sidebar on smaller screens.
        </p>
      </Box>
    </Box>
    </Box>

   
    </>
  );
}

export default Dashboard;
