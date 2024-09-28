import React from "react";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { COLOR } from '../constant/Constant';

function SearchInput() {
  return (
    <Box sx={styles.searchContainer}>
     
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={styles.searchInput}
      />

      <Button
        variant="contained"
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
    width: { xs: "auto", md: "auto" }, 
    height: "38px",
  },
  searchButton: {
    height: "38px",
    backgroundColor: COLOR.TEXT,
    textTransform: "none",
  },
};
