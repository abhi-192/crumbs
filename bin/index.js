#!/usr/bin/env node

const exec = require('child_process').exec;

//TODO make it work with script file
const myShellScript = exec('mkdir app config public react views tests && \
 touch app.js && \
 cd app && \
 mkdir models views controllers && \
 cd .. && \
 cd config && \
 mkdir routes && \
 cd .. && \
 cd public && \
 mkdir controllers && \
 cd .. && \
 cd views && \
 mkdir layouts pages && \
 cd .. && \
 cd tests && \
 mkdir users admins ');

myShellScript.stdout.on('data', (data)=>{
    console.log(data);
    // do whatever you want here with data
});
myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});

console.log('project intitialized');
