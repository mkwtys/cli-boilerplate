const program = require('commander');

program
  .version('0.2.0')
  .action((input) => {
    console.log("cli output: %s", input);
  })
  .parse(process.argv);

const args = program.args;

if (!args.length) {
  program.help();
  process.exit(1);
}
