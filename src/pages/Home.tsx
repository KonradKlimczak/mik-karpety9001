import React, { FC } from 'react';
import {
  Divider,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import logo from '../images/mik.jpg';
import './App.css';

export const Home: FC = (props) => {
  return (
    <div>
      <div>
        <Divider />
        <Card>
          <CardContent>
            <h2>Dołącz do grona zadowolonych klientów</h2>
          </CardContent>
          <CardActions>
            <Button>Kontakt</Button>
          </CardActions>
        </Card>
        <Card>
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
