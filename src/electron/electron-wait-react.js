const { Socket } = require('net');
const { exec } = require('child_process');

const port = process.env.PORT ? process.env.PORT - 100 : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new Socket();

let startedElectron = false;

const tryConnection = () =>
  client.connect({ port }, () => {
    client.end();

    if (!startedElectron) {
      startedElectron = true;
      console.log('starting electron');
      exec('npm run electron');
    }
  });

tryConnection();

client.on('error', error => {
  setTimeout(tryConnection, 1000);
});
