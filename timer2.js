const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", (key) => {
  switch (key) {
    case "\u0003":
      process.stdout.write("Thanks for using me, ciao!\n");
      process.exit();
    case "\u0062":
      process.stdout.write(".\n");
  }
  if (key >= 1 && key <= 9) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write(".\n");
    }, key * 1000);
  }
});
