"use client"
import Image from 'next/image'
import { styled, useTheme } from '@mui/material/styles';
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, } from '@mui/material';


import logo1 from "../../assets/imgs/logo1.png"
import logo2 from "../../assets/imgs/logo2.png"
import logo2s from "../../assets/imgs/logo2s.png"
import logo3 from "../../assets/imgs/logo3.png"
import logo4 from "../../assets/imgs/logo4.png"

const BgHour = styled(Box)(({theme}) => ({
  background: "#2D2A29",
  width:"100%",
  position:"relative",
  ".container": {
    maxWidth:"1920px",
    padding:"185px 50px 126px ",
    [theme.breakpoints.down('md')]: {
      padding:"200px 50px 50px",
    },
  },
  ".our": {
    position:"absolute",
    top:"250px",
    left:"90px", 
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '25px',
    lineHeight: '153%',
    color: '#FFFFFF',
    mixBlendMode: 'normal',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    transform: 'rotate(90deg)',
    width:"201px",
    borderBottom: "#A2B3CC 15px solid",
    paddingBottom: "20px",
    [theme.breakpoints.down('xl')]: {
      transform: 'rotate(0deg)',
      top:"50px",
    },
    [theme.breakpoints.down('md')]: {
      left:"50px", 
    },
  },
}));
const CardLeft = styled(Box)(({theme}) => ({
  maxWidth: 580 , 
  position:"relative",
  [theme.breakpoints.down('md')]: {
    margin:"0 auto 40px"
  },
  ":hover":{
    cursor: "pointer",
    opacity:'0.7',
  },
  ".content": {
    ".img": {
      [theme.breakpoints.down('lg')]: {
        height: "400px",
      },
      [theme.breakpoints.down('sm')]: {
        height: "200px",
      },
    },
    ".text": {
      fontFamily: 'Work Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '25px',
      lineHeight: '153%',
      textAlign: 'center',
      color: '#FFFFFF',
      padding:"62px 50px 0",
      [theme.breakpoints.down('md')]: {
        padding:"30px 30px 0",
      },
      [theme.breakpoints.down('sm')]: {
        padding:"20px 10px 0",
        fontSize: '16px',
        lineHeight: '153%', 
      },
    },
    ".title": {
      position:"absolute",
      top: "160px",
      width: "100%",
      [theme.breakpoints.down('lg')]: {
        top: "100px",
      },
      [theme.breakpoints.down('sm')]: {
        top: "50px",
      },
      "p":{
        maxWidth:"414px",
        margin:"0 auto",
        textAlign:"center",
        fontWeight: "100",
        fontSize: '58px',
        lineHeight: '107%',
        [theme.breakpoints.down('sm')]: {
          fontSize: '30px',
          lineHeight: '107%',
          maxWidth:"250px",
        },
      },
    },
  },
}));

export default function Hour() {
  return (
    <BgHour>
      <Container className='container'>
        <Grid container >
          <Grid item md={6} sx={{width:"100%"}}>
            <CardLeft sx={{ maxWidth: 580 , margin:"0 46px 0 auto"}}>
              <CardActionArea className='content'>
                <CardMedia
                  component="img"
                  height="532"
                  image="./img/bg200.png"
                  alt="green iguana"
                  className='img'
                />
                <CardContent className='text'>
                  New(ish) to yoga? Want to go deeper into your practice, and possibly teach? Join our 200 Hour Teacher training.
                </CardContent>
                <Box className="title"><p>200 Hour Teacher Training</p></Box>
              </CardActionArea>
            </CardLeft>
          </Grid>
          <Grid item md={6} sx={{width:"100%"}}>
            <CardLeft sx={{ maxWidth: 580 , margin:"0 0 0 46px"}}>
              <CardActionArea className='content'>
                <CardMedia
                  component="img"
                  height="532"
                  image="./img/bg300.png"
                  alt="green iguana"
                  className='img'
                />
                <CardContent className='text'>
                Already finished your 200 hour? Want to hone your teaching craft, and go deeper into the subtle nature of yoga? Join our 300 hour.
                </CardContent>
                <Box className="title"><p>300 Hour Teacher Training</p></Box>
              </CardActionArea>
            </CardLeft>
          </Grid>
        </Grid>
      </Container>
      <Box className="our">OUR TRAININGS</Box>
    </BgHour>
  )
}


