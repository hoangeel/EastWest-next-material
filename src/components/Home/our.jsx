"use client"
import Image from 'next/image'
import { styled, useTheme } from '@mui/material/styles';
import { Box, Card, CardMedia, Container, Divider, Grid, ImageList, ImageListItem, Typography, } from '@mui/material';

import iconIndia from "../../assets/imgs/iconIndia.png"
import iconInstagram from "../../assets/imgs/iconInstagram.png"
import img1 from "../../assets/imgs/img1.png"
import img2 from "../../assets/imgs/img2.png"
import img3 from "../../assets/imgs/img3.png"
import img4 from "../../assets/imgs/img4.png"
import { textAlign, width } from '@mui/system';

const Title = styled('p')(({theme}) => ({
  fontFamily: 'PP Eiko',
  fontStyle: 'normal',
  fontWeight: '100',
  fontSize: '58px',
  lineHeight: '107%',
  letterSpacing: '0.03em',
  textTransform: 'uppercase',
  color: '#2D2A29',  
  [theme.breakpoints.down("md")]: {
    fontSize: '27px',
    lineHeight: '107%',
    textAlign:"center",
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
  [theme.breakpoints.down("lg")]: {
    maxWidth:"100%",
  },
  [theme.breakpoints.down("md")]: {
    textAlign:"center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '17px',
    lineHeight: '157%',
    textAlign:"center",
    margin:"0 auto 30px"
  },
}));
const BgBali = styled(Box)(({theme}) => ({
  background: '#fff',
  width:"100%",
  ".container": {
    maxWidth:"1920px",
    padding:"200px 100px 83px 160px",
    [theme.breakpoints.down("lg")]: {
      padding:"100px 50px",
    },
    [theme.breakpoints.down("md")]: {
      padding:"150px 50px 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding:"50px",
    },
    ".content": {
      marginRight:"30px",
      borderRight:"1px solid #D5CEB7",
      paddingRight:"124px",
      maxWidth:"710px",
      [theme.breakpoints.down('lg')]: {
        borderRight:"none",
        marginBottom:"100px",
        paddingRight:"0",
        marginRight:"0",
        maxWidth:"100%",
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom:"50px",
      },
      ".peter":{
        fontSize: '30px',
        lineHeight: '116%',
        margin:"171px 0 10px",
        [theme.breakpoints.down("md")]: {
          margin:"50px auto 40px",
        },
        [theme.breakpoints.down("md")]: {
          fontSize: '26px',
          lineHeight: '116%',
        },
        
      },
      ".mastery":{
        fontWeight: '700',
        fontSize: '23px',
        lineHeight: "152%",
        color: '#D2B384',
        [theme.breakpoints.down("md")]: {
          fontSize: '18px',
          lineHeight: "152%",
        },
      },
      ".textPeter":{
        fontWeight: '300',
        fontSize: '22px',
        margin:"50px 0 40px",
        [theme.breakpoints.down("md")]: {
          margin:"50px auto 40px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: '16px',
          margin:"20px auto",
        },
      },
      ".follow":{
        fontSize: '22px',
        fontWeight: '500',
        marginLeft:"16px",
        [theme.breakpoints.down("md")]: {
          margin:"0 0 0 10px ",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: '16px',
          margin:"0 0 0 10px ",
        },
        
      },
    },
  },
}));
const GroupIcon = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection:"row",
  alignItems:"center",
  margin:"32px 0 56px",
  ".divider": {
    background:"#D5CEB7",
    height:"2px",
    width: "90%",
    marginRight:"11px",
  },
  [theme.breakpoints.down("sm")]: {
    margin:"20px 0 ",
    ".icon": {
      height:"auto",
      width: "30px",
    },
  },
}));
const GroupInstagram = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection:"row",
  alignItems:"center",
  "&:hover": {
    cursor: "pointer",
    opacity:'0.7',
  },
  [theme.breakpoints.down("sm")]: {
    ".iconInstagram": {
      height:"auto",
      width: "30px",
    },
  },
}));
const GroupImg = styled(Grid)(({theme}) => ({

}));
const CardImg = styled(Card)(({theme}) => ({
  margin:"0 auto",
  maxWidth: "100%",
  textAlign: "center",
  boxShadow: "none",
  position: 'relative',
  [theme.breakpoints.down("sm")]: {
    maxWidth: "250px",
  },
  ".text":{
    position: 'absolute',
    bottom: '100px',
    color:"red",
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '45px',
    lineHeight: '107%',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    maxWidth:"80%",
    margin: "0 auto",
    left:"10%",
    [theme.breakpoints.down("md")]: {
      fontSize: '30px',
      lineHeight: '107%',
    },
    [theme.breakpoints.down("sm")]: {
      bottom: '80px',
      fontSize: '20px',
      lineHeight: '107%',
      maxWidth:"80%",
      left:"15%",
      right:"15%",
    },
  },
  ".img": {
    height: 567,
    [theme.breakpoints.down("md")]: {
      height: 450,
      "img": {
        width:"50%",
        height:"auto",
      },
    },
    [theme.breakpoints.down("sm")]: {
      height: 350,
      "img": {
        width:"50%",
        height:"auto",
      },
    },
  }
}));

export default function Our() {
  return (
    <BgBali>
      <Container className='container'>
        <Grid container >
          <Grid item lg={6} sx={{width:"100%"}}>
            <Box className="content">
              <Title>OUR TEACHERS</Title>
              <GroupIcon>
                <Box className='divider'/>
                <Image src={iconIndia} alt="" className='icon'/>
              </GroupIcon>
              <Text>East+West is a the worldwide leader in yoga teacher training. We co-create beautiful, miraculous, yoga and meditation trainings with master teachers from India.</Text>
              <Title className='peter'>Peter Walters</Title>
              <Text className='mastery'>MASTERY: YOGA ASANA & TEACHING PRACTICE Teaches in: Costa Rica</Text>
              <Text className='textPeter'>Peter is a teacher for East+West. He teaches in costa rica. Peter is know for playing the harmonium during his classes and singing funny songs. He’s also a great yoga teacher. Peter is a teacher for East+West. He teaches in costa rica. Peter is know for playing the harmonium during his classes and singing funny songs. He’s also a great yoga teacher.Peter is a teacher for East+West. He teaches in costa rica. Peter is know for playing the harmonium during his classes and singing funny songs. He’s also a great yoga teacher.</Text>
              <GroupInstagram>
                <Image src={iconInstagram} alt="" className='iconInstagram'/>
                <Text className='follow'>Follow Peter</Text>
              </GroupInstagram>
            </Box>
          </Grid>
          <Grid item lg={6} sx={{width:"100%"}}>
            <Grid container spacing={"30px"}>
              <Grid item xs={12} sm={6}>
                <CardImg>
                  <CardMedia
                    image="./img/img1.png"
                    className='img'
                  />
                  <Typography variant="body2" className='text'>
                    PETER WALTERS
                  </Typography>
                </CardImg>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardImg>
                  <CardMedia
                    image="./img/img2.png"
                    className='img'
                  />
                  <Typography variant="body2" className='text'>
                    PETER WALTERS
                  </Typography>
                </CardImg>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardImg>
                  <CardMedia
                    image="./img/img3.png"
                    className='img'
                  />
                  <Typography variant="body2" className='text'>
                    PETER WALTERS
                  </Typography>
                </CardImg>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardImg>
                  <CardMedia
                    image="./img/img4.png"
                    className='img'
                  />
                  <Typography variant="body2" className='text'>
                    PETER WALTERS
                  </Typography>
                </CardImg>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Container>
    </BgBali>
  )
}


