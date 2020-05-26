import { makeStyles, CardContent, Card, Chip } from '@material-ui/core';
import React, { FC } from 'react';
import { SOCKS } from '../../data';
import { useParams } from 'react-router-dom';
import { NotFound } from '../../components/NotFound';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    gridGap: theme.spacing(1),
  },
  pic: {
    width: '100%',
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
      <div></div>
      <Card>
        <CardContent>
          <img className={classes.pic} src={img} alt={sock.name} />
          {sock.tags.map((tag) => (
            <Chip label={tag} variant="outlined" />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
