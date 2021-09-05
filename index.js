#!/usr/bin/env node

const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const linkedInClr = chalk.hex("#0077b5").bold.inverse;
const gitHubClr = chalk.hex("#6cc644").bold.inverse;
const instagramClr = chalk.hex("#833ab4").bold.inverse;
const websiteClr = chalk.hex("#ff4c4c").bold.inverse;
const dim = chalk.dim;

welcome({
  title: `${pkgJSON.name}`,
  tagLine: `Hi there, I'm Henrique. Nice to meet you.`,
  version: `${pkgJSON.version}`,
  description: `${pkgJSON.description}`,
  bgColor: `#fadc00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`
${chalk.hex("#ff4c4c").bold.inverse(` Henrique Pereira `)} 

${chalk.italic(
  `Technology enthusiast, originally from Brazil and currently living in different parts of the world at a time. Known for being a JavaScript developer enjoys learning new things. Feel free to reach out, I'm always available for a chat.`
)} 

${linkedInClr(` LinkedIn `)} ${dim(`https://www.linkedin.com/in/henrique-pereira/`)}
${gitHubClr(" Github ")} ${dim(`github.com/halveapereira`)}
${instagramClr(" Instagram ")} ${dim(`halveapereira`)}
${websiteClr(" Website ")} ${dim(`henriquepereira.com`)}
`);
