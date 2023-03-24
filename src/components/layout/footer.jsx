"use client"
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { styled, useTheme } from '@mui/material/styles';
import icon from "../../assets/imgs/iconFooter.png"
import img from "../../assets/imgs/imgFooter.png"
import logo from "../../assets/imgs/logoFooter.png"
import iconInstagram from "../../assets/imgs/iconInstagram.png"

import { width } from '@mui/system';

const BgSchedule = styled(Box)(({theme}) => ({
  background: 'url(./img/bgFooter.png)',
  backgroundSize:"100% 100%",
  padding: "242px 0 108px",
  ".schedule": {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    maxWidth:"1397px",
    margin:"0 auto",
    background: '#E9DFD3',
    border: '2px solid #3B3535',
    borderRadius: '6px',
    padding:"83px 142px 88px",
    [theme.breakpoints.down('lg')]: {
      padding:"50px",
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
    },
    ".img": {
      maxWidth:"387px",
      height:"auto",
      [theme.breakpoints.down('md')]: {
        maxWidth:"60%",
        height:"auto",
      },
    },
  },
}));
const Content = styled(Box)(({theme}) => ({
  textAlign:"center",
  marginLeft:"102px",
  [theme.breakpoints.down('md')]: {
    margin:"50px 0 0",
  },
  "p": {
    maxWidth:"526px",
    fontFamily: 'PP Eiko',
    fontStyle: 'normal',
    fontWeight: '100',
    fontSize: '44px',
    lineHeight: '97%',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#2D2A29',
    [theme.breakpoints.down('sm')]: {
      fontSize: '29px',
      lineHeight: '97%',
      maxWidth:"100%",
    },
  },
  ".icon": {
    margin:"25px 0 41.5px",
    [theme.breakpoints.down('sm')]: {
      margin:"25px 0",
      width:"100%",
    },
  },
  ".text": {
    maxWidth:"526px",
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '28px',
    lineHeight: '147%',
    textAlign: 'center',
    color: '#2D2A29',  
    [theme.breakpoints.down('sm')]: {
      fontSize: '17px',
      lineHeight: '147%',
      maxWidth:"100%",
    },  
  },
  ".button": {
    background: '#FFFFFF',
    border: '1px solid #E7DDCC',
    borderRadius: '2px',
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '21px',
    lineHeight: '29px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#000000',
    width: '310px',
    height: '71px',
    padding:"0",
    marginTop:"19px",
    "&:hover": {
      cursor: "pointer",
      opacity:'0.7',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '50px',
      fontSize: '16px',
      lineHeight: '29px',
    },
  },
}));

const BgFooter = styled(Box)(({theme}) => ({
  background: "#231F1F",
  backgroundSize:"100% 100%",
  padding: "200px 153px 0px ",
  [theme.breakpoints.down('lg')]: {
    padding: "100px 50px 0px ",
  },
  [theme.breakpoints.down('md')]: {
    padding: "50px 50px 0px ",
  },
  ".contentEnd": {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    [theme.breakpoints.down('md')]: {
      flexDirection:"column",
    },
    ".img": {
      height:"28px",
      width:"auto",
      "&:hover": {
        cursor: "pointer",
        opacity:'0.7',
      },
    },
    ".groupList": {
      marginLeft:"258px",
      [theme.breakpoints.down('md')]: {
        margin:"30px auto 0",
        width:"100%",
      },
      ".textList":{
        fontFamily: 'Work Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '27px ',
        lineHeight: '146%',
        color: '#AD9E98',
        mixBlendMode: 'normal',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding:"0",
        marginBottom:"50px",
        width:"100%",
        "&:hover": {
          cursor: "pointer",
          opacity:'0.7',
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '17px',
          lineHeight: '146%',
          margin:"0 auto 20px",
          display:"block",
          textAlign:"center",
        },
      },
    },
  },
  ".end": {
    ".groupFollow": {
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      marginTop:"100px",
      marginBottom:"48px",
      [theme.breakpoints.down('md')]: {
        marginTop:"20px",
        marginBottom:"20px",
      },
      "&:hover": {
        cursor: "pointer",
        opacity:'0.7',
      },
      ".follow": {
        margin:"0 20px 0 auto",
        fontFamily: 'Work Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '23px',
        lineHeight: '147%',
        textAlign: 'right',     
        color: '#FFFFFF',
        mixBlendMode: 'normal',
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        [theme.breakpoints.down('md')]: {
          fontSize: '16px',
          lineHeight: '147%',
        },
      },
      ".iconInstagram": {
        marginRight:"20px",
        [theme.breakpoints.down('md')]: {
          marginRight:"10px",
          width:"30px",
          height:"auto",
        },
      },
    },
    ".groupText": {
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      padding:"34px 80px 50px",
      [theme.breakpoints.down('lg')]: {
        padding: "34px 0px 50px ",
      },
      [theme.breakpoints.down('md')]: {
        padding: "10px 0px 30px ",
        flexDirection:"column",
      },
      ".textFooter": {
        fontFamily: 'Work Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '23px',
        lineHeight: '147%',
        color: '#AD9E98',
        mixBlendMode: 'normal',
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        [theme.breakpoints.down('md')]: {
          fontSize: '16px',
          lineHeight: '147%',
          marginBottom:"10px",
        },
      },
      ".Privacy": {
        margin: "0 50px 0 auto",
        [theme.breakpoints.down('md')]: {
          margin: "0 auto 10px",
        },
        "&:hover": {
          cursor: "pointer",
          opacity:'0.7',
        },
      },
      ".Terms": {
        "&:hover": {
          cursor: "pointer",
          opacity:'0.7',
        },
      },
    },
  },
}));
export default function Footer() {
  return (
    <>
      <BgSchedule>
        <Box className="schedule">
          <Image src={img} alt="" className='img'/>
          <Content>
            <p>Schedule a Free Zoom Info Call</p>
            <Image src={icon} alt="" className='icon'/>
            <Box className="text">Overwhelmed with options? Questions about Yoga Alliance? Let’s schedule a free zoom info call.</Box>
            <Button className='button'>Schedule a Call {">"}</Button>
          </Content>
        </Box>
      </BgSchedule>
      <BgFooter>
        <Box className="contentEnd">
          <Image src={logo} alt="" className='img'/>
          <Box className="groupList">
            <List>
              <Box>
                <ListItem className='textList'>
                  BLOG & RESOURCES
                </ListItem>
              </Box>
              <ListItem className='textList'>
                E+W ON YOGA ALLIANCE
              </ListItem>
              <ListItem className='textList'>
                CONTACT US
              </ListItem>
              <ListItem className='textList'>
                BALI TEACHER TRAINING
              </ListItem>
              <ListItem className='textList'>
                COSTA RICA TEACHER TRAINING
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box className="end">
          <Box className="groupFollow">
            <Box className="follow">Follow Us On Instagram {'>'}</Box>
            <Image className="iconInstagram" src={iconInstagram} alt=""/>
          </Box>
          <Divider sx={{height:"2px", width:"100%", background:"#AD9D98",}} />
          <Box className="groupText">
            <Box className="textFooter">© 2023 EAST+WEST All rights reserved.</Box>
            <Box className="textFooter Privacy">Privacy Policy</Box>
            <Box className="textFooter  Terms">Terms & Conditions</Box>
          </Box>
        </Box>
      </BgFooter>
    </>
  )
}









