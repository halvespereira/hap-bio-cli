#!/usr/bin/env node

const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

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
Henrique Pereira - software engineer


Technology enthusiast, originally from Brazil but currently a citizen of the world. Known for being a JavaScript developer enjoys learning new things. 

LinkedIn: https://www.linkedin.com/in/henrique-pereira/
Instagram: @halveapereira
GitHub: halveapereira

`);
