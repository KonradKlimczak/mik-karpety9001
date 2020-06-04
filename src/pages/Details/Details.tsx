import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { NotFound } from 'components/NotFound';
import { SOCKS } from 'data';
import React, { FC } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'flex-start',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
}));

export const Details: FC = (props) => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const sock = SOCKS.find((s) => s.id === id);
  if (!sock) {
    return <NotFound />;
  }
  const img = require(`../../images/socks/${sock.id}.jpg`);
  return (
    <div className={classes.root}>
      <div>
        <img src={img} width="340" height="600" alt={sock.name} />
      </div>
      <div className={classes.description}>
        <h1> {sock.name} </h1>
        <h3>ID: {sock.id}</h3>
        <List>
          {sock.descriptions.map((desc) => (
            <ListItem>
              <ListItemText primary={desc} />
            </ListItem>
          ))}
        </List>
        <div className="mik-sizes">
          <p>Rozmiary</p>
          <div>
            {sock.sizes.map((size) => (
              <div>{size}</div>
            ))}
          </div>
        </div>
        <hr />
        <div>
          Ilość w paczce: <b>{sock.amount} par</b>
        </div>
        <Button component={RouterLink} to="/socks">
          Wróć
        </Button>
      </div>
    </div>
  );
};
