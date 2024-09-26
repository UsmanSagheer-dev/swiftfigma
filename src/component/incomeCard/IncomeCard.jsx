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
    width: "565px",
    height: "240px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 22px",

    borderRadius: "4px",
    border:" 0.75px solid #00000020",
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
