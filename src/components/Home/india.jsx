"use client"
import Image from 'next/image'
import { styled, useTheme } from '@mui/material/styles';
import { Box, Container, Grid, } from '@mui/material';

import bg from "../../assets/imgs/bgIndia.png"
import img from "../../assets/imgs/imgIndia.png"
import { textAlign, width } from '@mui/system';

const BgBali = styled(Box)(({theme}) => ({
  background: '#fff',
  width:"100%",
  ".container": {
    maxWidth:"1920px",
    padding:"150px 160px 284px",
    [theme.breakpoints.down("lg")]: {
      padding:"100px 50px",
    },
    [theme.breakpoints.down("lg")]: {
      padding:"50px",
    },
  },
}));
const Title = styled('p')(({theme}) => ({
  fontFamily: 'PP Eiko',
  fontStyle: 'normal',
  fontWeight: '100',
  fontSize: '58px',
  lineHeight: '107%',
  letterSpacing: '0.03em',
  textTransform: 'uppercase',
  color: '#2D2A29',  
  maxWidth:"538px",
  marginBottom: "150px",
  [theme.breakpoints.down("lg")]: {
    marginBottom: "100px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: '28px',
    lineHeight: '107%',
    marginBottom: "50px",
    textAlign:"center",
    margin:"0 auto 30px"
  }
}));
const Text = styled(Box)(({theme}) => ({
  fontFamily: 'Work Sans',
  fontStyle: 'normal',
  fontWeight: '300',
  fontSize: '29px',
  lineHeight: '157%',
  color: '#3E3830',  
  maxWidth:"585px",
  [theme.breakpoints.down("md")]: {
    fontSize: '17px',
    lineHeight: '157%',
    textAlign:"center",
    margin:"0 auto 30px"
  }
}));
const GroupImg = styled(Box)(({theme}) => ({
  maxWidth:"603px",
  height:"200px",
  position:"relative",
  justifyItems:"center",
  marginLeft:"50px",
  [theme.breakpoints.down("md")]: {
    margin:"0 auto",
    maxWidth:"300px",
  },
  ".bg": {
    width:"100%",
    height: "auto",
    position:"absolute",
    top:"0",
  },
  ".img": {
    position:"absolute",
    top:"0",
    left:"15%",
    margin:"0 auto",
    width:"70%",
    height: "auto",
  },
}));

export default function India() {
  return (
    <BgBali>
      <Container className='container'>
        <Grid container >
          <Grid item md={6} sx={{width:"100%"}}>
            <Box>
              <Title>For The Love of India</Title>
              <Text>Many of our teachers were born from India, but all of us are from there. We love diving deep into the authentic traditions of yoga.</Text>
            </Box>
          </Grid>
          <Grid item md={6} sx={{width:"100%"}}>
            <GroupImg>
              <Image className='bg' src={bg} alt=''/>
              <Image className='img' src={img} alt=''/>
            </GroupImg>
          </Grid>
        </Grid>

      </Container>
    </BgBali>
  )
}


