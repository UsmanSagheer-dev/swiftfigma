import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IMAGES } from "../../assets/images/index"; // Ensure the path is correct
import FONTS from "../constant/Constant";

const drawerWidth = 220; // Set width to 220px
const drawerHeight = 750; // Set height to 750px

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

  const handleDrawerToggle = () => {
    setOpen(!open); // Toggle open/close state
  };

  const isLargeScreen = window.innerWidth >= 900;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      {/* Header visible only on small screens */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "5px 10px",
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Adjust the shadow to be visible on the bottom
        }}
      >
        <DrawerHeader
          sx={{
            fontFamily: FONTS.ALBERT,
            width: "142px",
            height: "36px",
            padding: "16px",
          }}
        >
          {" "}
          {/* Corrected usage */}
          <h1 style={{ fontSize: "24px" }}>
            swift<span style={{ color: "blue" }}>CRM</span>
          </h1>
        </DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Sidebar Drawer */}
      <Drawer
  sx={{
    width: { xs: '190px', md: '220px' }, // Set 190px on small screens, 220px on larger screens
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: { xs: '190px', md: '220px' }, // Apply the same logic to the Drawer paper
      height: "775px",
      padding: "16px 32px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.14)", 
    },
    display: { xs: "block", md: "block" },
  }}
  variant={isLargeScreen ? "persistent" : "temporary"}
  anchor="left"
  open={open || isLargeScreen}
  onClose={handleDrawerToggle}
>

        <DrawerHeader
          sx={{
            fontFamily: FONTS.ALBERT,
            width: "142px",
            height: "36px",
            padding: "16px",
          }}
        >
          {" "}
          {/* Corrected usage */}
          <h1 style={{ fontSize: "24px" }}>
            swift<span style={{ color: "#9a55ff" }}>CRM</span>
          </h1>
        </DrawerHeader>

        <List
          sx={{
            width: drawerWidth,
            display: "flex",
            gap: "16px",
            flexDirection: "column",
            justifyContent: "center",
            border: "none",
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
            {" "}
            {/* Corrected usage */}
            <p>GENERAL</p>
          </DrawerHeader>

          {[
            "Dashboard",
            "Notifications",
            "Customers",
            "Order Overview",
            "Analytics",
            "Documents",
          ].map((text, index) => (
            <ListItem key={text} sx={{ display: "flex", padding: "0" }}>
              <ListItemButton
                sx={{
                  width: "200px",
                  height: "44px",
                  display: "flex",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  gap: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    minWidth: "14px",
                    width: "14px",
                  }}
                >
                  {index === 0 && (
                    <img
                      src={IMAGES.dashboard}
                      alt="Dashboard"
                      style={{ width: 14, height: 14 }}
                    />
                  )}
                  {index === 1 && (
                    <img
                      src={IMAGES.notification}
                      alt="Notifications"
                      style={{ width: 14, height: 14 }}
                    />
                  )}
                  {index === 2 && (
                    <img
                      src={IMAGES.customer}
                      alt="Customers"
                      style={{ width: 14, height: 14 }}
                    />
                  )}
                  {index === 3 && (
                    <img
                      src={IMAGES.order}
                      alt="Order Overview"
                      style={{ width: 14, height: 14 }}
                    />
                  )}
                  {index === 4 && (
                    <img
                      src={IMAGES.analytics}
                      alt="Analytics"
                      style={{ width: 14, height: 14 }}
                    />
                  )}
                  {index === 5 && (
                    <img
                      src={IMAGES.document}
                      alt="Documents"
                      style={{ width: 14, height: 14 }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
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

  
        <List
          sx={{
            width: drawerWidth,
            display: "flex",
            gap: "16px",
            flexDirection: "column",
            justifyContent: "center",
            border: "none",
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
            {" "}
            {/* Corrected usage */}
            <p>GENERAL</p>
          </DrawerHeader>

          {[
            "Dashboard",
            "Notifications",
            "Customers",
            "Order Overview",
            "Analytics",
            "Documents",
          ].map((text, index) => (
            <ListItem key={text} sx={{ display: "flex", padding: "0" }}>
              <ListItemButton
                sx={{
                  width: "200px",
                  height: "44px",
                  display: "flex",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  gap: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    minWidth: "14px",
                    width: "14px",
                  }}
                >
                  {index === 0 && (
                    <img
                      src={IMAGES.dashboard}
                      alt="Dashboard"
                      style={{ width: 14, height: 14 }}
                    />
                  )}
                  {index === 1 && (
                    <img
                      src={IMAGES.notification}
                      alt="Notifications"
                      style={{ width: 14, height: 14 }}
                    />
                  )}
                  {index === 2 && (
                    <img
                      src={IMAGES.customer}
                      alt="Customers"
                      style={{ width: 14, height: 14 }}
                    />
                  )}
                  {index === 3 && (
                    <img
                      src={IMAGES.order}
                      alt="Order Overview"
                      style={{ width: 14, height: 14 }}
                    />
                  )}
                  {index === 4 && (
                    <img
                      src={IMAGES.analytics}
                      alt="Analytics"
                      style={{ width: 14, height: 14 }}
                    />
                  )}
                  {index === 5 && (
                    <img
                      src={IMAGES.document}
                      alt="Documents"
                      style={{ width: 14, height: 14 }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
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
      </Drawer>
    </Box>
  );
}
