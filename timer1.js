// Input
const input = process.argv;
const alarmTimes = input.slice(2);

for (const alarm of alarmTimes) {
  // if ((alarm * 1 !== alarm) || alarm < 0) {
  //   continue;
  // }

  setTimeout(() => {
    // process.stdout.write('\x07'); // => Not working on my PC
    process.stdout.write('.');
  }, alarm * 1000);
}
setTimeout(() => process.stdout.write('\n'), Math.max(...alarmTimes) * 1000);