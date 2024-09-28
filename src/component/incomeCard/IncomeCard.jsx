import { Box } from "@mui/material";
import IncomeFirstCard from "../incomefirstcard/IncomeFirstCard";
import CustomBarChart from "../barchart/Barchart";
import { Styles } from "./icomeCardstyle";
export default function IncomeCard() {
  return (
    <Box sx={Styles.container}>
      <Box sx={Styles.first}>
        <IncomeFirstCard />
      </Box>
      <Box sx={Styles.second}>
        <CustomBarChart />
      </Box>
    </Box>
  );
}


