import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url('/assets/bg.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // Corrected property name
    backgroundPosition: 'center',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit></PlaceToVisit>
    </div>
    </>
  );
}