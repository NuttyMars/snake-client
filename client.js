const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => console.log('Successfully connected to game server'));
  conn.on('connect', () => {
    conn.write('Name: NOM');
    
    // conn.write('Move: up');
    // setTimeout(() => conn.write('Move: up'), 50);
    // setTimeout(() => conn.write('Move: up'), 100);
    // setTimeout(() => conn.write('Move: up'), 150);
    // setTimeout(() => conn.write('Move: up'), 200);
    // setTimeout(() => conn.write('Move: up'), 250);
    // setTimeout(() => conn.write('Move: up'), 300);
    // setTimeout(() => conn.write('Move: up'), 350);
    // setTimeout(() => conn.write('Move: up'), 400);
    // setTimeout(() => conn.write('Move: up'), 450);
    // setTimeout(() => conn.write('Move: up'), 500);
    // setTimeout(() => conn.write('Move: up'), 550);

  });


  conn.on('data', () => console.log('you ded cuz you idled'));

  return conn;
}


module.exports = { connect };