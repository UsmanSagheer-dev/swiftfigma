import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery"; // For screen size detection

import { IMAGES } from "../../assets/images/index"; // Image paths
import FONTS from "../constant/Constant"; // Font constants

const drawerWidth = 220;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  justifyContent: "space-between",
  width: "100%",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex",  }}>
      {/* Header visible only on small screens */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "5px 10px",
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          backgroundColor:"red"
        }}
      >
        {/* <DrawerHeader sx={{ fontFamily: FONTS.ALBERT }}>
          <h1 style={{ fontSize: "24px" }}>
            swift<span style={{ color: "blue" }}>CRM</span>
          </h1>
        </DrawerHeader> */}
        <IconButton onClick={handleDrawerToggle}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Sidebar Drawer */}
      <Drawer
        sx={{
          width: { xs: "190px", md: "220px" },
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: { xs: "190px", md: "220px" },
            height: { xs: "100%", md: "720px" },
            padding: "16px 30px",
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.14)",
            overflowY: "auto", 
            "::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none", 
          },
        }}
        variant={isLargeScreen ? "persistent" : "temporary"}
        anchor="left"
        open={open || isLargeScreen}
        onClose={handleDrawerToggle}
      >
        <DrawerHeader sx={{ fontFamily: FONTS.ALBERT }}>
          <h1 style={{ fontSize: "24px" }}>
            swift<span style={{ color: "#9a55ff" }}>CRM</span>
          </h1>
        </DrawerHeader>

        <List
          sx={{
            display: "flex",
            gap: "16px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <DrawerHeader
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              fontFamily: FONTS.ALBERT,
              color: "#6C757D",
            }}
          >
            <p>GENERAL</p>
          </DrawerHeader>

      
          {[
            { text: "Dashboard", icon: IMAGES.dashboard },
            { text: "Notifications", icon: IMAGES.notification },
            { text: "Customers", icon: IMAGES.customer },
            { text: "Order Overview", icon: IMAGES.order },
            { text: "Analytics", icon: IMAGES.analytics },
            { text: "Documents", icon: IMAGES.document },
          ].map((item) => (
            <ListItem key={item.text} sx={{ display: "flex", padding: 0 }}>
              <ListItemButton
                sx={{
                  width: "200px",
                  height: "44px",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <ListItemIcon sx={{ minWidth: "14px" }}>
                  <img
                    src={item.icon}
                    alt={item.text}
                    style={{ width: 14, height: 14 }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: FONTS.BARLOW,
                    color: "#282c2f",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

   
        <List sx={{ marginTop: "30px" }}>
          <DrawerHeader
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              fontFamily: FONTS.ALBERT,
              color: "#6C757D",
              paddingBottom: "16px",
            }}
          >
            <p>SUPPORT</p>
          </DrawerHeader>

          {[
            { text: "Help", icon: IMAGES.helpingimg },
            { text: "Settings", icon: IMAGES.settingimg },
          ].map((item) => (
            <ListItem key={item.text} sx={{ display: "flex", padding: 0 }}>
              <ListItemButton
                sx={{
                  width: "200px",
                  height: "44px",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <ListItemIcon sx={{ minWidth: "14px" }}>
                  <img
                    src={item.icon}
                    alt={item.text}
                    style={{ width: 14, height: 14 }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: FONTS.BARLOW,
                    color: "#282c2f",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

     
        <List sx={{ marginTop: "auto", paddingBottom: "40px" }}>
          <ListItem sx={{ display: "flex", padding: 0 }}>
            <ListItemButton
              sx={{
                width: "200px",
                height: "44px",
                padding: "8px 16px",
                borderRadius: "4px",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <ListItemIcon sx={{ minWidth: "14px" }}>
                <img
                  src={IMAGES.logout}
                  alt="Logout"
                  style={{ width: 14, height: 14 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                primaryTypographyProps={{
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: FONTS.BARLOW,
                  color: "#282c2f",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
