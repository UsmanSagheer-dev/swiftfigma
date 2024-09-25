import { Box } from '@mui/material'


export default function IncomeCard() {
  return (
   <Box sx={Styles.container}>
<Box sx={Styles.first}>
<h1>sldfjk</h1>
</Box>
<Box sx={Styles.second}>
    skdfjh
</Box>

   </Box>
  )
}
const Styles={
    container:{
        width:"561px",
        height:"240px",
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'24px 16px',
        backgroundColor:'#f5f5f5',
        borderRadius:'4px',
        boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.1)',
        cursor:'pointer',
        transition:'background-color 0.3s ease-in-out',
        gap:'12px'
     
    },
    first:{
        width:"50%",
        backgroundColor:'#e5e5e5',
        height:"100%"
    },
    second:{
        width:"50%",
        backgroundColor:'#e5e5e5',
        height:"100%"
    }
}
