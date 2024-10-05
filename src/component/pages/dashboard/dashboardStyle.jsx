export const DashboardStyles = {
  wrapper: {
    display: "flex",
    width: "100%",
    gap: "29px",
    flexDirection: "column",
    "@media (max-width: 1194px)": {
      gap: "10px",
    },
  },
  sidebar: {
    backgroundColor: "blue",
    zIndex: "0",
    // height: { xs: "auto", md: "100vh" },
  },
  contentArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    marginTop: "50px",
    height: "auto",
    gap: "21px",

    "@media (max-width: 900px)": {
      justifyContent: "center",
    },
  },
  content: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    "@media (max-width: 560px)": {
      justifyContent: "center",
      marginLeft: "11px",
    },
  },
  carddashboard: {
    display: "flex",

    alignItems: "center",
    // flexWrap: "wrap",
    gap: "25px",

    marginTop: "58px",
    "@media (max-width:1194px)": {
      gap: "15px",
      alignItems: "center",
    },
    "@media (max-width:900px)": {
      flexDirection: "column",
      gap: "15px",
      alignItems: "center",
    },
    "@media (max-width:560px)": {
      gap: "15px",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  fisrtcard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    // overflow: "hidden",
    justifyContent: "start",

    "@media (max-width: 900px)": {},
  },

  cardsetting: {
    width: "100%",
    display: "flex",
    gap: "21px",
    alignItems: "start",

    "@media (max-width: 900px)": {
      // flexWrap: "wrap",
      width: "100%",
      justifyContent: "center",
      gap: "10px",
    },
    "@media (max-width: 670px)": {
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",

      gap: "10px",
    },
  },
  out:{
    width:'auto',
backgroundColor:'red',
"@media (max-width: 670px)": {
      width: "100%",
     
    },
  },

  producat: {},
  second: {
    width: "100%",
    display: "flex",
  
    gap: "25px",
    alignItems: "start",
    "@media (max-width: 1194px)": {
      gap: "15px",
      alignItems: "center",
    },
    "@media (max-width: 994px)": {
      gap: "15px",
     
      alignItems: "center",
    },
  },
};
