 export const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "15px",
      backgroundColor: "white",
      width: "782px",
      padding: "24px 16px 10px 24px",
      border: "0.75px solid #00000020",
      borderRadius: "10px",
      "@media (max-width: 1194px)": {
        width: "623px",
        gap: "15px",
      },
      "@media (max-width: 658px)": {
        width: "630px",
      },
    },
    header: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    heading: {
      fontSize: "14px",
      fontWeight: "600",
    },
    pagination: {
      '& .MuiPaginationItem-root': {
        color: '#9A55FF',
        margin: 0,
      },
      '& .Mui-selected': {
        color: 'white',
        backgroundColor: 'blue',
      },
    },
    tableContainer: {
      overflow: "hidden",
      width: "100%",
      overflowX: "auto",
      "@media (max-width: 768px)": {
        width: "100%",
      },
      "@media (max-width: 480px)": {
        fontSize: "12px",
      },
    },
  };
  