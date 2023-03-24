"use client"
import Image from 'next/image'
import { styled } from '@mui/material/styles';

import iconPlay from "../../assets/imgs/iconPlay.png"
import { Box, Button, Container } from '@mui/material';

const SectionBg = styled(Box)(({theme}) => ({
  background: 'url(./img/bgSectionHome.png)',
  backgroundSize:"100% 117%",
  width: "100%",
  height: "1205px",
  [theme.breakpoints.down('lg')]: {
    height: "900px",
  },
  [theme.breakpoints.down('sm')]: {
    height: "621px",
    background: 'url(./img/mobileSectionHome.png)',
    backgroundSize:"100% 117%",
  },
}));
const BgSection = styled(Box)(({theme}) => ({
  background: '#272626',
  opacity: '0.6',
  width: "100%",
  height: "100%",
}));
const ContainerContent = styled(Container)(({theme}) => ({
  maxWidth:"1920px",
  padding:"456px 250px 0 !important",
  position:"absolute",
  top:"0",
  [theme.breakpoints.down('xl')]: {
    padding:"456px 100px 0 !important",
  },
  [theme.breakpoints.down('lg')]: {
    padding:"300px 50px 0 !important",
  },
  [theme.breakpoints.down('sm')]: {
    padding:"155px 50px 0 !important",
  },
}));
const Content = styled(Box)(({theme}) => ({
  maxWidth:"480px",
  [theme.breakpoints.down('lg')]: {
    maxWidth:"380px",
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth:"286px",
  },
}));
const Title = styled("p")(({theme}) => ({
  marginBottom:"30px",
  [theme.breakpoints.down('sm')]: {
    fontSize: "41px",
  },
}));
const Text = styled(Box)(({theme}) => ({
  marginBottom:"30px",
  [theme.breakpoints.down('sm')]: {
    fontSize: "17px",
    lineHeight: "147%",
  },
}));
const Learn = styled(Button)(({theme}) => ({
  padding: "19px 18px",
  border: "2px solid #BFA988",
  borderRadius: '2px',
  fontFamily: 'Work Sans',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '19px',
  lineHeight: '29px',
  textTransform: 'uppercase',
  color: '#FFFFFF',
  "&:hover": {
    cursor: "pointer",
    opacity:'0.7',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "19px",
    margin:"0 auto",
  },
}));

const BoxPlay = styled(Box)(({theme}) => ({
  width: "100%",
  position:"absolute",
  top:"572px",
  [theme.breakpoints.down('lg')]: {
    top:"400px",
  },
  [theme.breakpoints.down('md')]: {
    position:"static",
    background:"#231F1F"
  },
}));
const Play = styled(Box)(({theme}) => ({
  maxWidth:"176px", 
  textAlign:"center",
  margin:"0 auto",
  "&:hover": {
    cursor: "pointer",
    opacity:'0.7',
  },
  [theme.breakpoints.down('md')]: {
    display:"flex",
    flexDirection: "row-reverse",
    maxWidth:"100%",
    alignItems:"center",
    padding:"27px 0"
  },
  ".text":{
    [theme.breakpoints.down('md')]: {
      color:"#fff",
      margin: "0 20px 0 auto"
    },
  },
  ".img":{
    [theme.breakpoints.down('md')]: {
      margin: "0 auto 0 0"
    },
    [theme.breakpoints.down('sm')]: {
      width:"40px",
      height: "auto",
    },
  }
}));

export default function Section() {
  return (
    <Box sx={{width:"100%"}}>
      <SectionBg>
        <BgSection />
      </SectionBg>
      <Box sx={{maxWidth:"1920px", margin:"0px auto"}}>
        <ContainerContent >
          <Content>
            <Title >Learn The Ancient Art of Yoga</Title>
            <Text>Transform your life with the world’s leading yoga & meditation training community.</Text>
            <Learn>Learn More {">"} </Learn> 
          </Content>
        </ContainerContent>
      </Box>
      <BoxPlay>
        <Play>
          <Image className='img' src={iconPlay} alt=''/>
          <Text className="text" sx={{fontSize:"20px",fontWeight: '700',}}>Watch The Video</Text>
        </Play>
      </BoxPlay>
    </Box>
  )
}


