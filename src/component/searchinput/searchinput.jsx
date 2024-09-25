import React from "react";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { COLOR } from '../constant/Constant';

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
    width: { xs: "300px", md: "auto" }, // 300px for small screens, auto for md and larger
    height: "38px",
  },
  searchButton: {
    height: "38px",
    backgroundColor: COLOR.TEXT,
    textTransform: "none",
  },
};
