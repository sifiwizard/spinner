const animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']
delay = 100;

while (delay < 2000) {
  for (const frame of animation) {
    setTimeout(() => {
      process.stdout.write(frame);
    }, delay);
    delay += 200;
  }
}

setTimeout(() => {
  process.stdout.write('\n'); 
}, delay);