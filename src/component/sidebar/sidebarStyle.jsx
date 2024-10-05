import { FONTS } from "../constant/Constant";
export const DrawerStyles = {
    container: {
      display: "flex",

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
        width: "220px",
        height: { xs: "100vh", md: "100vh" },
        padding: "16px 30px",
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.14)",
        overflowY: "auto",
        "::-webkit-scrollbar": { display: "none" },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
        "@media  (max-width:1194px)": {
          width: "190px",
        },
      },
    }),
    generalList: {
      display: "flex",
      gap: "16px",
      flexDirection: "column",
      justifyContent: "center",
      zIndex:0
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
      paddingBottom: "40px",
    },
  };
  