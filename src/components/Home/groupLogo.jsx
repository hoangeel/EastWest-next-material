"use client"
import Image from 'next/image'
import { styled, useTheme } from '@mui/material/styles';
import { Box, Container, } from '@mui/material';


import logo1 from "../../assets/imgs/logo1.png"
import logo2 from "../../assets/imgs/logo2.png"
import logo2s from "../../assets/imgs/logo2s.png"
import logo3 from "../../assets/imgs/logo3.png"
import logo4 from "../../assets/imgs/logo4.png"

const BgGroupLogo = styled(Box)(({theme}) => ({
  background: "#fff",
  width:"100%",
  ".container": {
    maxWidth:"1920px",
    padding:"67px 249px 79px 70px",
    [theme.breakpoints.down('xl')]: {
      padding:"67px 100px 79px 50px",
    },
    [theme.breakpoints.down('md')]: {
      padding:"50px",
    },
    ".box": {
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      [theme.breakpoints.down('md')]: {
        flexDirection:"column",
      },
      ".logo1": {
        margin:"0",
        "&:hover": {
          cursor: "pointer",
          opacity:'0.7',
        },
        [theme.breakpoints.down('xl')]: {
          width: "300px",
          height: "auto",
        },
      },
      ".groupLogo2": {
        display:"flex",
        flexDirection:"column",
        margin:"0 auto",
        "&:hover": {
          cursor: "pointer",
          opacity:'0.7',
        },
        [theme.breakpoints.down('md')]: {
          margin:"20px 0",
        },
        ".logo2": {
          margin:"0 auto",
          [theme.breakpoints.down('xl')]: {
            width: "180px",
            height: "auto",
          },
        },
        ".logo2s": {
          margin:"14px auto 0",
          [theme.breakpoints.down('xl')]: {
            width: "90px",
            height: "auto",
          },
        },
      },
      ".logo3": {
        margin:"0 auto",
        "&:hover": {
          cursor: "pointer",
          opacity:'0.7',
        },
        [theme.breakpoints.down('xl')]: {
          width: "150px",
          height: "auto",
        },
      },
      ".logo4": {
        margin:"0",
        "&:hover": {
          cursor: "pointer",
          opacity:'0.7',
        },
        [theme.breakpoints.down('xl')]: {
          width: "200px",
          height: "auto",
        },
        [theme.breakpoints.down('md')]: {
          margin:"20px 0 0",
        },
      },
    },
  },
}));

export default function GroupLogo() {
  return (
    <BgGroupLogo>
      <Container className='container'>
        <Box className='box'>
          <Image className='logo1' src={logo1} alt=""/>
          <Box className='groupLogo2'>
            <Image src={logo2} alt="" className='logo2'/>
            <Image src={logo2s} alt="" className='logo2s'/>
          </Box>
          <Image src={logo3} alt="" className='logo3'/>
          <Image src={logo4} alt="" className='logo4'/>
        </Box>
      </Container>
    </BgGroupLogo>
  )
}


