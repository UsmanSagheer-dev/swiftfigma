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
import useMediaQuery from "@mui/material/useMediaQuery";
import { IMAGES } from "../../assets/images/index";
import {FONTS} from "../constant/Constant"; 
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
    <Box sx={DrawerStyles.container}>
      {/* Header visible only on small screens */}
      <Box sx={DrawerStyles.header(theme)}>
        <DrawerHeader sx={DrawerStyles.headerTitle}>
          <h1 style={DrawerStyles.logoText}>
            swift<span style={{ color: "blue" }}>CRM</span>
          </h1>
        </DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Sidebar Drawer */}
      <Drawer
        sx={DrawerStyles.drawer(theme)}
        variant={isLargeScreen ? "persistent" : "temporary"}
        anchor="left"
        open={open || isLargeScreen}
        onClose={handleDrawerToggle}
      >
        <DrawerHeader sx={DrawerStyles.headerTitle}>
          <h1 style={DrawerStyles.logoText}>
            swift<span style={{ color: "#9a55ff" }}>CRM</span>
          </h1>
        </DrawerHeader>
        <List sx={DrawerStyles.generalList}>
          <DrawerHeader sx={DrawerStyles.sectionTitle}>
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
            <ListItem key={item.text} sx={DrawerStyles.listItem}>
              <ListItemButton sx={DrawerStyles.listItemButton}>
                <ListItemIcon sx={DrawerStyles.listItemIcon}>
                  <img
                    src={item.icon}
                    alt={item.text}
                    style={DrawerStyles.iconImage}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={DrawerStyles.listItemText}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List sx={DrawerStyles.supportList}>
          <DrawerHeader sx={DrawerStyles.sectionTitle}>
            <p>SUPPORT</p>
          </DrawerHeader>
          {[
            { text: "Help", icon: IMAGES.helpingimg },
            { text: "Settings", icon: IMAGES.settingimg },
          ].map((item) => (
            <ListItem key={item.text} sx={DrawerStyles.listItem}>
              <ListItemButton sx={DrawerStyles.listItemButton}>
                <ListItemIcon sx={DrawerStyles.listItemIcon}>
                  <img
                    src={item.icon}
                    alt={item.text}
                    style={DrawerStyles.iconImage}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={DrawerStyles.listItemText}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List sx={DrawerStyles.logoutList}>
          <ListItem sx={DrawerStyles.listItem}>
            <ListItemButton sx={DrawerStyles.listItemButton}>
              <ListItemIcon sx={DrawerStyles.listItemIcon}>
                <img
                  src={IMAGES.logout}
                  alt="Logout"
                  style={DrawerStyles.iconImage}
                />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                primaryTypographyProps={DrawerStyles.listItemText}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export const DrawerStyles = {
  container: {
    display: "flex",
    backgroundColor:'gray',
  },
  header: (theme) => ({
    display: { xs: "flex", md: "none" },
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "5px 25px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  }),
  headerTitle: {
    fontFamily: FONTS.ALBERT,
  },
  logoText: {
    fontSize: "24px",
  },
  drawer: (theme) => ({
    width: { xs: "190px", md: "150px" },
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: { xs: "auto", md: "220px" },
      height: { xs: "100vh", md: "100vh" },
      padding: "16px 30px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.14)",
      overflowY: "auto",
      "::-webkit-scrollbar": { display: "none" },
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
      // marginLeft: { xs: "0px", md: "20px" },
      // marginTop: { xs: "0px", md: "40px" },
    },
  }),
  generalList: {
    display: "flex",
    gap: "16px",
    flexDirection: "column",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: "12px",
    fontWeight: "700",
    fontFamily: FONTS.ALBERT,
    color: "#6C757D",
  },
  listItem: {
    display: "flex",
    padding: 0,
  },
  listItemButton: {
    width: "200px",
    height: "44px",
    padding: "8px 16px",
    borderRadius: "4px",
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },
  listItemIcon: {
    minWidth: "14px",
  },
  iconImage: {
    width: 14,
    height: 14,
  },
  listItemText: {
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: FONTS.BARLOW,
    color: "#282c2f",
  },
  supportList: {
    marginTop: "30px",
  },
  logoutList: {
    marginTop: "auto",
    paddingBottom: "40px",
  },
};
