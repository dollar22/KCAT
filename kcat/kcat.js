#!/usr/bin/env node

let inputArr = process.argv.slice(2);
let fs = require('fs');

if(inputArr[0]=="--help"){
    console.log(`
    KCAT file1.txt file2.txt upto n will print content of all files in terminal
    KCAT file1.txt file2.txt -s will remove mutiple line with one line
    kCAT file1.txt file2.txt -n will give numbering to all lines
    KCAT file2.txt file2.txt -b will give numbering to non empty lines

    NOTE:- commmands -n and -b can't implement together
    `);
}

let optionsArr = [];
let filesArr = [];

for(let i =0; i<inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar=='-'){
        optionsArr.push(inputArr[i]);
    } else{
        filesArr.push(inputArr[i]);
    }
}


let isBothPresent = optionsArr.includes("-b") && optionsArr.includes("-n")
if(isBothPresent == true){
    console.log("can't run both commands at same time");
    
}

for(let i = 0; i<filesArr.length; i++){
    isPresent = fs.existsSync(filesArr[i]);
    if(isPresent == false){
        console.log(`file ${filesArr[i]} is not Present`);
    }
}

let content = "";

for(let i = 0; i<filesArr.length; i++){
    content += fs.readFileSync(inputArr[i],'utf-8') +"\n";  
}

let contentArr = content.split("\n");
let isSPreset = optionsArr.includes("-s");
if (isSPreset == true) {
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }


let tempArr = [];
for(let i =0; i<contentArr.length;i++){
    if(contentArr[i]!=null){
        tempArr.push(contentArr[i]);
    }
}
  contentArr = tempArr
}

let isNPresent = optionsArr.includes("-n");
if(isNPresent == true){
    for(let i = 0; i<contentArr.length; i++){
        contentArr[i] = `${i+1} ${contentArr[i]}`
    }
}


let isBPresent = optionsArr.includes("-b");
if(isBPresent == true){

    let counter = 1;
    for(let i = 0; i<contentArr.length; i++){
        if(contentArr[i]!=""){
            contentArr[i] = `${counter} ${contentArr[i]}`
            counter++;
        }
    }
}
console.log(contentArr.join("\n"));

