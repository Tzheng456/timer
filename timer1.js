let args = process.argv.slice(2);
if (args.length === 0) {
  return;
}

for (let i = 0; i < args.length; i++) {
  if (!(args[i] < 0 || isNaN(args[i]))) {
    setTimeout(() => {
      process.stdout.write(".");
      console.log(`beep at ${args[i]}`);
    }, args[i] * 1000);
  }
}
