import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Mik Skarpety
          </Typography>
          <Button color="primary" component={RouterLink} to="/">
            Strona główna
          </Button>
          <Button color="primary" component={RouterLink} to="socks">
            Oferta
          </Button>
          <Button color="primary" component={RouterLink} to="about">
            O Firmie
          </Button>
          <Button color="primary" component={RouterLink} to="contact">
            Kontakt
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
