import { makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavBar } from './components';
import { About, Contact, Details, Home, Socks } from './pages';
import { theme } from './Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    margin: theme.spacing(1),
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.root}>
          <NavBar />
          <main className={classes.main}>
            <Switch>
              <Route path="/kontakt" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/socks" component={Socks} />
              <Route path="/skarpeta/:id" component={Details} />
              <Route path="/" component={Home} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
