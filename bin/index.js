#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const exec = require('child_process').exec;

//TODO make it work with script file
const myShellScript = exec('sh work.sh');

myShellScript.stdout.on('data', (data)=>{
    console.log(data);
    // do whatever you want here with data
});
myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});



const greeting = chalk.white.bold(" Project Initialized!! ");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);

/*
    http://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs

    https://github.com/alextanhongpin/node-js-folder-structure

    https://medium.com/stackfame/how-to-run-shell-script-file-or-command-using-nodejs-b9f2455cb6b7

*/