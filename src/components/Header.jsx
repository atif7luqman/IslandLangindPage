import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar} from '@material-ui/core';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' ,
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar:{
    background: 'none',
  },
  appbarWrapper:{
    width:'80%',
    margin: '0 auto',
  },
  appbarTitle:{
    flexGrow:'1',
  },
  icon:{
    color:'#fff',
    fontSize: '2rem',
  },
  colorText:{
    color: '#5AFF3D'
  },
  title:{
    color:'#fff',
    fontSize: '4.5rem',
  },
  container:{
    textAlign: 'center',
  },
  goDown:{
    color: '#5AFF3D',
    fontSize: '4rem',
  }
}));

export default function Header(){
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon}></SortIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            My<span className={classes.colorText}>Island.</span>
          </h1>
          <Scroll to='place-to-visit' smooth={true}>
          <IconButton 
            style={{
              fontSize: '6rem',
            }}>
              
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>

          </Scroll>
        </div>
      </Collapse>
    </div>
  )
}
