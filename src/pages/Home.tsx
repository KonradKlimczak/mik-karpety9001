import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import f01 from '../images/home/f01.jpg';
import k04 from '../images/home/k04.jpg';
import m02 from '../images/home/m02.jpg';
import m05 from '../images/home/m05.jpg';
import m08 from '../images/home/m08.jpg';
import w01 from '../images/home/w01.jpg';
import logo from '../images/mik.jpg';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoInfo: {
    margin: theme.spacing(2),
  },
  socks: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: theme.spacing(1),
  },
  summary: {
    display: 'flex',
  },
  card: {
    margin: theme.spacing(1),
    flex: 1,
  },
}));

export const Home: FC = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.logoInfo}>
          <img src={logo} alt="logo" />
          <Typography>Skarpety od A do Z</Typography>
        </div>
        <div className={classes.socks}>
          <RouterLink to="contacts">
            <Card>
              <img src={m08} alt="Super Mikołaj" />
            </Card>
          </RouterLink>
          <Card>
            <img src={k04} alt="logo" />
          </Card>
          <Card>
            <img src={f01} alt="logo" />
          </Card>
          <Card>
            <img src={m02} alt="logo" />
          </Card>
          <Card>
            <img src={m05} alt="logo" />
          </Card>
          <Card>
            <img src={w01} alt="logo" />
          </Card>
        </div>
      </div>
      <div className={classes.summary}>
        <Card className={classes.card}>
          <CardContent>
            <h2>Dołącz do grona zadowolonych klientów</h2>
          </CardContent>
          <CardActions>
            <Button>Kontakt</Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h2>od 1989 roku!</h2>
            <p>
              Firma Dziewiarstwo Maszynowe Mieczysław Klimczak istnieje na rynku
              od 1989 roku.
            </p>
          </CardContent>
          <CardActions>
            <Button> Dowiedz się wiecej</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
