// import { makeStyles } from '@material-ui/core';
import React, { FC, useState } from 'react';
import {
  Typography,
  Icon,
  makeStyles,
  TextField,
  Button,
  FormControl,
} from '@material-ui/core';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Business as BusinessIcon,
} from '@material-ui/icons';
import { theme } from 'Theme';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: theme.spacing(1),
    flexDirection: 'column',
  },
  main: {
    display: 'flex',
    padding: theme.spacing(1),
  },
  side: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
  contactRow: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
}));

export const Contact: FC = (props) => {
  const classes = useStyles();
  const [message, setMessage] = useState('');

  const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    window.open(`mailto:test@example.com?subject=subject&body=${message}`);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2">Skontaktuj się z nami!</Typography>
      <div className={classes.main}>
        <div className={classes.side}>
          <div className={classes.contactRow}>
            <Icon>
              <PhoneIcon />
            </Icon>
            Telefon: 605-585-944
          </div>
          <div className={classes.contactRow}>
            <Icon>
              <EmailIcon />
            </Icon>
            E-mail: mik.skarpety@gmail.com
          </div>
          <div className={classes.contactRow}>
            <Icon>
              <BusinessIcon />
            </Icon>
            Telefon: 605-585-944
          </div>

          <div>
            <iframe
              title="Mapa do firmy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.580965352694!2d19.3053823512168!3d51.813816879586966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bb4978b1ced6b%3A0x90c015d9458ddaa3!2sKlimczak+Mieczys%C5%82aw.+Komputerowa+produkcja+skarpet+bawe%C5%82nianych+i+frotte!5e0!3m2!1spl!2spl!4v1451130744559"
              style={{ border: 0 }}
              width="100%"
              height="450"
            ></iframe>
          </div>
        </div>
        <div className={classes.side}>
          <Typography variant="h4" color="textSecondary">
            Napisz do nas!
          </Typography>

          <FormControl margin="dense">
            <TextField
              label="Tytuł"
              variant="outlined"
              placeholder="Tytuł wiadomości"
            />
          </FormControl>
          <FormControl margin="dense">
            <TextField
              label="Wiadomość"
              multiline
              rows={4}
              variant="outlined"
              placeholder="Napisz tutaj wiadomość..."
              onChange={handleChangeMessage}
            />
          </FormControl>
          <Button color="primary" onClick={handleSubmit}>
            Wyślij
          </Button>
        </div>
      </div>
    </div>
  );
};
