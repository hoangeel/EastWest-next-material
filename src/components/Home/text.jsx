"use client"
import Image from 'next/image'
import { styled, useTheme } from '@mui/material/styles';

import icon from "../../assets/imgs/icon.png"
import vector1 from "../../assets/imgs/vector1.png"
import vecter2 from "../../assets/imgs/vector2.png"
import { Box, Typography} from '@mui/material';

const BgText = styled(Box)(({theme}) => ({
  background: 'url(./img/bg.png)',
  backgroundSize:"100% 100%",   
  position:"absolute"
}));
const ContentText = styled(Box)(({theme}) => ({
  padding:"132px 50px 50px ",
  maxWidth:"671px",
  margin:"0 auto",
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding:"50px ",
  },
  ".text": {
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '29px',
    lineHeight: '157%',
    color: '#3E3830',
    [theme.breakpoints.down('sm')]: {
      fontSize: '19px',
    },
  },
  }));
const GroupImage = styled(Box)(({theme}) => ({
  maxWidth:"1920px",
  margin:"0 auto",
  padding:"0 64px 98px 107px",
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  position:"relative",
  [theme.breakpoints.down('md')]: {
    padding:"0 50px 50px",
  },
  [theme.breakpoints.down('sm')]: {
    width:"100%",
  },
  ".img":{
    margin:"0 30px 0",
    [theme.breakpoints.down('sm')]: {
      width:"40px",
      height:"auto",
      margin:"-30px auto 0",
    },
  },
  ".vector1": {
    width:"calc(50% - 138px) ",
    height:"auto",
    [theme.breakpoints.down('md')]: {
      width:"calc(50% - 80px) ",
    },
    [theme.breakpoints.down('sm')]: {
      display:"none"
    },
  },
  ".vector2": {
    width:"calc(50% - 145px)",
    height:"auto",
    position:"absolute",
    bottom:"140px",
    right:"107px",
    [theme.breakpoints.down('md')]: {
      bottom:"92px",
      width:"calc(50% - 110px)",
      right:"50px",
    },
    [theme.breakpoints.down('sm')]: {
      display:"none"
    },
  },
}));

export default function Text() {
  return (
      <BgText sx={{width:"100%"}}>
        <ContentText>
          <Box className='text'>East+West is the worldwide leader in yoga teacher training. We co-create beautiful, miraculous, yoga trainings featuring master teachers from India.</Box>
        </ContentText>
        <GroupImage>
          <Image className='vector1' src={vector1} alt=""/>
          <Image className='img' src={icon} alt=""/>
          <Image className='vector2' src={vecter2} alt=""/>
        </GroupImage>
      </BgText>
  )
}


