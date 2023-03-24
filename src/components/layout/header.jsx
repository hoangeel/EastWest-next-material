"use client"
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Container, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import Image from 'next/image'
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


import logo from "../../assets/imgs/logo.png"
import logoMini from "../../assets/imgs/logoMini.png"
import { margin } from '@mui/system';
import { useState } from 'react';


export default function Header() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    background:"#FFFFFF",
    height:"75px",
  }));
  const [expanded, setExpanded] = useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  const Headers = styled(AppBar)({
    maxWidth: "100%",
    margin: "0px auto",
    left:"0",
    background:'none',
    boxShadow:"none !important",
  });
  const Logo = styled(Image)(({theme}) => ({
    marginLeft:"26px",
    ":hover": {
      opacity:'0.7',
      cursor: "pointer",
    },
    [theme.breakpoints.down('md')]: {
      width:"100px",
      height: "auto",
      margin: "0"
    },
  }));
  const Contact = styled(Button)(({theme}) => ({
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '19px',
    lineHeight:'153%',    
    textTransform: 'uppercase',
    color: '#FFFFFF',
    borderRadius: '0',
    ":hover": {
      opacity:'0.7',
    },
    [theme.breakpoints.down('md')]: {
      display: "none"
    },
  }));
  const APPLY = styled(Button)(({theme}) => ({
    width: '236px',
    height: '54px',
    background: '#E7D0AD',
    padding: "0",
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '19px',
    lineHeight:'153%',    
    textTransform: 'uppercase',
    color: '#FFFFFF',
    borderRadius: '0',
    cursor: 'pointer',
    margin: '27px 16px 27px 72px',
    ":hover": {
      background: '#E7D0AD',
      opacity:'0.7',
    },
    [theme.breakpoints.down('md')]: {
      display: "none"
    },
  }));
  const ToolbarBottom = styled(Toolbar)(({theme}) => ({
    [theme.breakpoints.down('md')]: {
      display:"none",
    },
  }));
  const Text = styled(Box)(({theme}) => ({
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '22px',
    lineHeight:'153%',    
    textTransform: 'uppercase',
    color: '#FFFFFF',
    borderRadius: '0',
    margin:"0px 340px 0px 170px",
    "&:hover": {
      cursor: "pointer",
      opacity:'0.7',
    },
    [theme.breakpoints.down('lg')]: {
      margin:"0px 140px 0px 0px",
    },
  }));
  const ButtonMenu = styled(IconButton)(({theme}) => ({
    [theme.breakpoints.up('md')]: {
      display:"none"
    },
  }));
  const DrawerCustom=styled(Drawer)(() => ({
    width: "100%",
    ".MuiDrawer-paper": {
      width: "100%",
      background:"#FBF8F4",
    }
  }))
  const AccordionMenu= styled(AccordionSummary)(({theme}) => ({
    height: "59px",
    background: "#FFFFFF",
    border: "1px solid #000000",
    textAlign:"center",
    ":hover": {
      cursor: "pointer",
      opacity:'0.7',
    },
    ".typography": {
      fontFamily: 'Work Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '17px',
      lineHeight: '157%',
      textTransform: 'uppercase',
      color: '#2D2A29',
      margin:"0px auto",
    }
  }));
  const ListMenu = styled('div')(({button}) => ({
    background: "#2D2A29",
    border: "1px solid #000000",
    textAlign:"center",
    marginBottom: "15px",
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '157%',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    padding:"15px 0px",
    ":hover": {
      cursor: "pointer",
      opacity:'0.7',
    },
  }));
  
  return (
    <Box sx={{width:"100%"}}>
      <Headers position="absolute">
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Logo src={logo} alt=''/>
          </Typography>
          <Contact color="inherit">Contact us on WhatsApp</Contact>
          <APPLY color="inherit">APPLY FOR TRAINING</APPLY>
          <ButtonMenu
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            size="large"
            edge="start"
            sx={{width: '48px', height: '48px', background: "#FFFFFF", borderRadius: "0", padding:"0", margin:"13px 0"}}
          >
            <MenuIcon sx={{width:"20px", height:"auto",}}/>
          </ButtonMenu>
        </Toolbar>
        <Divider sx={{backgroundColor:'#FFFFFF'}}/>
        <ToolbarBottom>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}/>
          <Text color="inherit" sx={{margin:"0px"}}>Trainings</Text>
          <Text color="inherit" >ABOUT US</Text>
        </ToolbarBottom>
      </Headers>
      <DrawerCustom
        variant="persistent"
        anchor="right"
        open={open}
      >
          <DrawerHeader onClick={handleDrawerClose}>
            <IconButton sx={{margin: "0px auto", padding:"0", width:"132px", height:"31px"}}>
              <Logo src={logoMini} alt=''/>
            </IconButton>
          </DrawerHeader>
          <Divider sx={{ marginBottom:"15px",}}/>
          <Box sx={{padding:"0px 26px 100px",}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{marginBottom:"15px", boxShadow:"none !important"}}>
              <AccordionMenu aria-controls="panel1d-content" id="panel1d-header">
                <Typography className='typography'>Trainings</Typography>
              </AccordionMenu>
              <AccordionDetails sx={{background:"#FBF8F4", padding:"13px 40px", }}>
                <List>
                  <ListMenu underline="none">Bali 200 Hour</ListMenu>
                  <ListMenu underline="none">Costa Rica 200 Hour</ListMenu>
                  <ListMenu underline="none">Advanced 300 Hour</ListMenu>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{marginBottom:"15px" }}>
              <AccordionMenu aria-controls="panel1d-content" id="panel1d-header">
                <Typography className='typography'>About Us</Typography>
              </AccordionMenu>
            </Accordion>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionMenu aria-controls="panel1d-content" id="panel1d-header">
                <Typography className='typography'>Message Us</Typography>
              </AccordionMenu>
            </Accordion>
        </Box>
      </DrawerCustom>
    </Box>
  )
}


