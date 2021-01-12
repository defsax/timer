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

// const timer = function(timers) {
//   if (!timers.length) {
//     console.log('No timers selected.');
//     return false;
//   }

//   for (let timer of timers) {
//     if (Math.sign(timer) === -1 || isNaN(timer)) {
//       continue;
//     }
//     setTimeout(() => {
//       console.log('Beep at', timer, 'seconds.');
//     }, timer * 1000);
//   }
// };

// timer(process.argv.slice(2));

/*
  The user can press b and it should beep right away
  
  The user can input any number from 1 to 9 and it should
      immediately output "setting timer for x seconds...", and
      beep after that number of seconds has passed
  
  The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
*/