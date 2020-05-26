// import { makeStyles } from '@material-ui/core';
import React, { FC } from 'react';

// const useStyles = makeStyles((theme) => ({
//   main: {
//     display: 'flex',
//   },
//   socks: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr 1fr',
//     gridGap: theme.spacing(1),
//   },
//   summary: {
//     display: 'flex',
//   },
//   card: {
//     margin: theme.spacing(1),
//     flex: 1,
//   },
// }));

export const Contact: FC = (props) => {
  // const classes = useStyles();
  return (
    <div>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Kontakt</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{/* <i class="material-icons">store</i> */}</td>
                <td>Adres</td>
                <td>
                  ul. Wallenroda 10
                  <br />
                  Aleksandrow Łodzki 95-070
                </td>
              </tr>
              <tr>
                <td>{/* <i class="material-icons">phone</i> */}</td>
                <td>Numer telefonu</td>
                <td>605-585-944</td>
              </tr>
              <tr>
                <td>{/* <i class="material-icons">email</i> */}</td>
                <td>E-mail</td>
                <td>mik.skarpety@gmail.com</td>
              </tr>
            </tbody>
          </table>
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
    </div>
  );
};
