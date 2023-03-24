"use client"
import Image from 'next/image'
import { styled, useTheme } from '@mui/material/styles';
import { Box, } from '@mui/material';

import icon from "../../assets/imgs/Vector.png"
import iconPlay from "../../assets/imgs/iconPlay.png"
import { textAlign, width } from '@mui/system';

const BgBali = styled(Box)(({theme}) => ({
  background: 'url(./img/bgcostaRica.png)',
  backgroundSize:"100% 100%",  
  width:"100%", 
  padding:"315px 0 281px",
  marginTop:"30px",
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
  paddingLeft:"170px",
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    lineHeight: '116%',
    paddingLeft:"50px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '16px',
    lineHeight: '116%',
  }
}));
const Title = styled(Box)(({theme}) => ({
  fontFamily: 'Akronim',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '157px',
  lineHeight: '97%',
  color: '#FFFFFF',
  mixBlendMode: "normal",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  margin:"40px 0 0",
  paddingLeft:"170px",
  [theme.breakpoints.down('md')]: {
    fontSize: '80px',
    lineHeight: '97%',
    paddingLeft:"50px",
    margin:"30px 0 0",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '40px',
    lineHeight: '97%',
    margin:"10px 0 0",
  }
}));
export default function CostaRica() {
  return (
      <BgBali>
        <Box>
          <Box>
            <Text>Beach & Surf</Text>
            <Title>Costa Rica</Title>
          </Box>
          <Image src={icon} alt=""/>
        </Box>
      </BgBali>
  )
}


