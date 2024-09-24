import React from "react";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput() {
  return (
    <Box sx={styles.searchContainer}>
      {/* Search Input */}
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={styles.searchInput}
      />

      {/* Search Button */}
      <Button
        variant="contained"
        color="primary"
        sx={styles.searchButton}
        startIcon={<SearchIcon />} 
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchInput;

const styles = {
  searchContainer: {
    display: "flex",
    alignItems: "center",
   
  },
  searchInput: {
    width: "300px", 
    height: "38px",
  },
  searchButton: {
    height: "38px", // Adjust height to match input
    textTransform: "none", // Ensures 'Search' text is not all uppercase
  },
};
