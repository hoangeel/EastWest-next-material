"use client"
import Image from 'next/image'
import { styled, useTheme } from '@mui/material/styles';
import { Box, } from '@mui/material';

import icon from "../../assets/imgs/Vector.png"
import iconPlay from "../../assets/imgs/iconPlay.png"
import { textAlign, width } from '@mui/system';

const BgBali = styled(Box)(({theme}) => ({
  background: 'url(./img/bgBali.png)',
  backgroundSize:"100% 100%",  
  width:"100%", marginTop:"319px", 
  padding:"490px 0 150px",
  textAlign:"right",
  [theme.breakpoints.down("md")]: {
    padding:"300px 0 150px",
  },
  [theme.breakpoints.down("sm")]: {
    padding:"150px 0 100px",
  }
}));
const Text = styled("p")(({theme}) => ({
  fontWeight: '100',
  fontSize: '28px',
  lineHeight: '116%',
  textTransform: 'uppercase',
  color: "#ECDBAE",
  paddingRight:"170px",
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    lineHeight: '116%',
    paddingRight:"50px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '16px',
    lineHeight: '116%',
  }
}));
const Title = styled(Box)(({theme}) => ({
  fontFamily: 'Aguafina Script',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '157px',
  lineHeight: '97%',
  color: '#FFFFFF',
  mixBlendMode: "normal",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  margin:"70px 0",
  paddingRight:"170px",
  [theme.breakpoints.down('md')]: {
    fontSize: '80px',
    lineHeight: '97%',
    paddingRight:"50px",
    margin:"30px 0 0",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '40px',
    lineHeight: '97%',
    margin:"10px 0 0",
  }
}));
const Play = styled(Box)(({theme}) => ({
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  fontFamily: 'Work Sans',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '130%',
  color: '#FFFFFF',  
  marginTop: "50px",
  "&:hover": {
    cursor: "pointer",
    opacity:'0.7',
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '14px',
    lineHeight: '130%',
    marginTop: "20px",
  },
  ".img": {
    margin:"0 40px 0 auto",
    [theme.breakpoints.down('md')]: {
      marginRight:"20px",
      width:"50px",
      height:"auto",
    },
  },
  ".text": {
    maxWidth: "430px",
    textAlign: "left",
    paddingRight:"170px",
    [theme.breakpoints.down('md')]: {
      paddingRight:"50px"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "200px",
    },
  }
}));
export default function Bali() {
  return (
      <BgBali>
        <Box>
          <Box>
            <Text>Bamboo & rice Fields</Text>
            <Title>Ubud, Bali</Title>
          </Box>
          <Image src={icon} alt=""/>
        </Box>
        <Box sx={{width:"100%"}}>
          <Play>
            <Image className='img' src={iconPlay} alt=''/>
            <Box className='text'>Watch The Video (seriously, don’t skip this)</Box>
          </Play>
        </Box>
      </BgBali>
  )
}


