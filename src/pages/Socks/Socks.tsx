import { Card, CardContent, Chip, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import React, { FC, useState } from 'react';
import { SOCKS } from '../../data';
import { Tag } from 'model';
import { useHistory } from 'react-router-dom';

const ALL_TAGS: Tag[] = Object.keys(Tag)
  .filter((k: any) => typeof Tag[k] === 'string')
  .map((k: any) => Tag[k]); // [0, 1]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  filters: {
    marginRight: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
  },
  filter: {
    margin: theme.spacing(1),
  },
  socks: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: theme.spacing(1),
  },
  mediumBig: {
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  },
  socksBig: {
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  },
  sock: {
    cursor: 'pointer',
    '&:hover': {
      boxShadow: theme.shadows[5],
    },
  },
  pic: {
    width: '100%',
  },
}));

export const Socks: FC = (props) => {
  const mediumSocks = useMediaQuery('(min-width: 600px)');
  const bigSocks = useMediaQuery('(min-width: 900px)');

  const history = useHistory();
  const classes = useStyles();
  const [activeTags, setActiveTags] = useState(ALL_TAGS);

  const toggleTag = (tag: Tag) => {
    setActiveTags((tags) => {
      return tags.some((active) => active === tag) ? [tag] : [...tags, tag];
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.filters}>
        <Typography variant='h6'>Filter</Typography>
        {ALL_TAGS.map((tag) => {
          return (
            <Chip
              className={classes.filter}
              label={tag}
              color={activeTags.every((active) => active !== tag) ? 'default' : 'primary'}
              onClick={() => toggleTag(tag)}
            />
          );
        })}
      </div>
      <div
        className={clsx(classes.socks, {
          [classes.mediumBig]: mediumSocks,
          [classes.socksBig]: bigSocks,
        })}
      >
        {SOCKS.filter((sock) => activeTags.some((active) => sock.tags.some((sockTag) => sockTag === active))).map(
          (sock) => {
            const img = require(`../../images/socks/${sock.id}.jpg`);
            return (
              <Card
                classes={{ root: classes.sock }}
                onClick={() => {
                  history.push(`/skarpeta/${sock.id}`);
                }}
              >
                <CardContent>
                  <img className={classes.pic} src={img} alt={sock.name} />
                  {sock.tags.map((tag) => (
                    <Chip label={tag} variant='outlined' />
                  ))}
                </CardContent>
              </Card>
            );
          }
        )}
      </div>
    </div>
  );
};
