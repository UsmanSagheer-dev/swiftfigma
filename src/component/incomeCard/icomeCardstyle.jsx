export const Styles = {
  container: {
    width: "565px",
    height: "240px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 22px",
    borderRadius: "4px",
    gap: "15px",
    border: "0.75px solid #00000020",
    cursor: "pointer",
    backgroundColor: "#FFFFFF",
    gap: "12px",

    "@media (max-width: 1194px)": {
      width: "458px",
      height: "196px",
      padding: "19px 13px",
      alignItems: "start",

      height: "auto",
    },
    "@media (max-width:570px)": {
      flexDirection: "column",
      width: "90%",
    },
    "@media (max-width:400px)": {
      margin: "15px",
      flexDirection: "column",
      width: "auto",
    },
  },
  first: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    gap: { xs: "10px", md: "22px" },
    width: "50%",
    height: "100%",
    "@media (max-width: 1194px)": {
      width: "100%",
      height: "auto",
    },
  },
  second: {
    width: "50%",
    height: "100%",
    "@media (max-width: 900px)": {
      width: "90%",
    },
  },
};
