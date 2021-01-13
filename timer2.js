//timer2.js
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\rBEEP!');
  }

  if (!isNaN(key) && key !== '0') {
    process.stdout.write('\nSetting timer for ' + key + ' seconds...');
    setTimeout(() => {
      process.stdout.write('\nBEEP! ' + key + ' seconds up!');
    }, key * 1000);
  }

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.stdout.write('\nThanks for using me, ciao!\n');
    process.exit();
  }

});