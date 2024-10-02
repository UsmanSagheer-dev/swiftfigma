import { Box } from "@mui/material";

function Footer() {
  return (
    <Box sx={styles.container}>
      <Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
}

export default Footer;

const styles={
    container:{
        backgroundColor:'black',
        width:"100%",
        height:"50px",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',

    }
}
