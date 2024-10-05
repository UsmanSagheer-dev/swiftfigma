import { Box, Typography, Pagination, Divider } from "@mui/material";
import TableComponent from "../socialtable/Socialtable";
import {styles} from '../newCustomercard/newCustomerStyles'
function NewCustomerCard() {
  const data = [
    {
      id: 1,
      date: "2024-01-01",
      customer: "John Doe",
      status: "Success",
      total: "$100",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      date: "2024-01-02",
      customer: "Jane Smith",
      status: "Success",
      total: "$150",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      date: "2024-01-03",
      customer: "David Johnson",
      status: "Pending",
      total: "$200",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      date: "2024-01-04",
      customer: "Emily Davis",
      status: "Pending",
      total: "$250",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      date: "2024-01-03",
      customer: "David Johnson",
      status: "Pending",
      total: "$200",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      date: "2024-01-04",
      customer: "Emily Davis",
      status: "Pending",
      total: "$250",
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography sx={styles.heading}>New Customers</Typography>
        <Pagination count={5} variant="outlined" shape="rounded" sx={styles.pagination} />
      </Box>
      <Divider />
      <Box sx={styles.tableContainer}>
        <TableComponent tableData={data} />
      </Box>
    </Box>
  );
}


export default NewCustomerCard;
