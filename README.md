# Verifica GreenPass node-server

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Applicazione in node che utilizza la lib [DCC-UTILS] del Ministero della Salute per controllare la validità del GreenPass.

Il codice riutilizza quasi completamente quello del ValidatorServer di [Luca Dentella](https://github.com/lucadentella/raspberry-dgc), lavoro eccellente: l'ho adattato al frontend.

Per gli utilizzatori o amanti del mondo Raspberry vi consiglio di dare un occhiata a [Raspberry-dgc](https://github.com/lucadentella/raspberry-dgc)

## Prima di iniziare

Nessun dato viene salvato!

## Installazione

Richiede [Node.js](https://nodejs.org/) e [NPM](http://https://www.npmjs.com).

Installare le dipendenze e avvia il server

```sh
cd gp 
npm i
node app.js
```

## License

MIT
**Free Software, Hell Yeah!**
Ogni contributo è utile!

   [DCC-UTILS]: <https://github.com/ministero-salute/dcc-utils>
