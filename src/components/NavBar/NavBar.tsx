import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration: 'none',
    color: 'inherit',
    flexGrow: 1,
  },
}));

export const NavBar: FC = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            component={RouterLink}
            to="/"
          >
            Mik Skarpety
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Strona główna
          </Button>
          <Button color="inherit" component={RouterLink} to="socks">
            Oferta
          </Button>
          <Button color="inherit" component={RouterLink} to="about">
            O Firmie
          </Button>
          <Button color="inherit" component={RouterLink} to="kontakt">
            Kontakt
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
