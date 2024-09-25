import { Box } from "@mui/material";
import IncomeFirstCard from "../incomefirstcard/IncomeFirstCard";
import BarChart from "../barchart/Barchart";
import CustomBarChart from "../barchart/Barchart";

export default function IncomeCard() {
  return (
    <Box sx={Styles.container}>
      <Box sx={Styles.first}>
        <IncomeFirstCard />
      </Box>
      <Box sx={Styles.second}>
       <CustomBarChart/>
      </Box>
    </Box>
  );
}
const Styles = {
  container: {
    width: "561px",
    height: "240px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 16px",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
    gap: "12px",
  },
  first: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    gap: { xs: "10px", md: "22px" },
    width: "50%",

    height: "100%",
  },
  second: {
    width: "50%",

    height: "100%",
  },
};
