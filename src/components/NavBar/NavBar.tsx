import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  Drawer,
  IconButton,
  List,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration: 'none',
    color: 'inherit',
    flexGrow: 1,
  },
  paperAnchorLeft: {
    right: 0,
  },
}));

export const NavBar: FC = (props) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const matches = useMediaQuery('(min-width: 900px)');

  const menu = (
    <>
      <Button color="inherit" component={RouterLink} to="/">
        Strona główna
      </Button>
      <Button color="inherit" component={RouterLink} to="/socks">
        Oferta
      </Button>
      <Button color="inherit" component={RouterLink} to="/about">
        O Firmie
      </Button>
      <Button color="inherit" component={RouterLink} to="/kontakt">
        Kontakt
      </Button>
    </>
  );

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          {!matches && (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            className={classes.title}
            component={RouterLink}
            to="/"
          >
            Mik Skarpety
          </Typography>
          {matches && menu}
        </Toolbar>
      </AppBar>

      {!matches && (
        <Drawer
          classes={{
            paperAnchorLeft: classes.paperAnchorLeft,
          }}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <List
            style={{ display: 'flex', flexDirection: 'column' }}
            onClick={() => setDrawerOpen(false)}
          >
            {menu}
          </List>
        </Drawer>
      )}
    </div>
  );
};
