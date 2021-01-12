const timer = function(timers) {
  if (!timers.length) {
    console.log('No timers selected.');
    return false;
  }

  for (let timer of timers) {
    if (Math.sign(timer) === -1 || isNaN(timer)) {
      continue;
    }
    setTimeout(() => {
      console.log('Beep at', timer, 'seconds.');
    }, timer * 1000);
  }
};

timer(process.argv.slice(2));