import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import NotFoundSVG from '../../images/NotFound.svg';
import { Button } from '@material-ui/core';

export const NotFound: FC = () => (
  <div className="not-found">
    <img src={NotFoundSVG} alt="Not found" />
    <h1>Upsss...</h1>
    <h2>Nie udało znaleźć się pary do tej skarpety.</h2>
    <p>Przepraszamy. Spróbuj późnniej</p>
    <Button color="primary" component={Link} to="/">
      Wróć
    </Button>
  </div>
);
