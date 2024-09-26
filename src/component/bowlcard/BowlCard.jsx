import { Box, Typography } from "@mui/material";
import { IMAGES } from "../../assets/images/index";

export default function BowlCard({ image, bowlinfo, para, price }) {
  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.imageContainer}>
          <img src={image} alt="Bowl" style={styles.image} />
        </Box>
        <Box sx={styles.infoContainer}>
          <Typography
            sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <p style={{ height: "18px", margin: 0 }}>{bowlinfo}</p>
            <p style={{ height: "18px", margin: 0 }}>{para}</p>
          </Typography>
        </Box>
        <Typography>
          <p style={{ margin: 0 }}>{price}</p>
        </Typography>
      </Box>
    </>
  );
}

const styles = {
  container: {
    width: "253px",
    background: "#F8F9FA",
    height: "83px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    borderRadius: "8px",
    // Media query for responsive design
    "@media (max-width: 900px)": {
   
    },
  },
  imageContainer: {
    width: "60px",
    height: "60px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  infoContainer: {
    marginLeft: "10px",
    flex: 1,
  },
};
