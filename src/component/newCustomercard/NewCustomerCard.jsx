import { Box, Typography, Pagination, Divider } from "@mui/material";
import TableComponent from "../socialtable/Socialtable";

function NewCustomerCard() {
    const data = [
        { 
            id: 1, 
            date: '2024-01-01', 
            customer: 'John Doe', 
            status: 'Success', 
            total: '$100', 
            image: 'https://via.placeholder.com/50' // Replace with actual image URL
        },
        { 
            id: 2, 
            date: '2024-01-02', 
            customer: 'Jane Smith', 
            status: 'Success', 
            total: '$150', 
            image: 'https://via.placeholder.com/50' // Replace with actual image URL
        },
        { 
            id: 3, 
            date: '2024-01-03', 
            customer: 'David Johnson', 
            status: 'Pending', 
            total: '$200', 
            image: 'https://via.placeholder.com/50' // Replace with actual image URL
        },
        { 
            id: 3, 
            date: '2024-01-03', 
            customer: 'David Johnson', 
            status: 'Pending', 
            total: '$200', 
            image: 'https://via.placeholder.com/50' // Replace with actual image URL
        },
        { 
            id: 3, 
            date: '2024-01-03', 
            customer: 'David Johnson', 
            status: 'Pending', 
            total: '$200', 
            image: 'https://via.placeholder.com/50' // Replace with actual image URL
        },
        { 
            id: 3, 
            date: '2024-01-03', 
            customer: 'David Johnson', 
            status: 'Pending', 
            total: '$200', 
            image: 'https://via.placeholder.com/50' // Replace with actual image URL
        },
    ];

    return (
        <Box sx={styles.container}>
            <Box sx={styles.header}>
                <Typography sx={styles.heading}>New Customers</Typography>
                <Pagination count={5} variant="outlined" shape="rounded" />
            </Box>
            <Divider />
            <Box>
                <TableComponent tableData={data} />
            </Box>
        </Box>
    );
}

const styles = {
    container: {
        backgroundColor: "white",
        width: "790px",
        padding: "24px 16px",
        border: "0.75px solid #00000020",

        borderRadius: "10px",
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
};

export default NewCustomerCard;