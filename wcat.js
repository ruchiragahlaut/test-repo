
// Display of content of files 

let input = process.argv.slice(2);
let fs = require("fs");

let options = [];
let filepaths = [];

for(let i=0 ;i<input.length;i++){
    if(input[i].charAt(0)=='-'){ // we are moving on every letter of input entered by user and checking the first word of every letter
        options.push(input[i]);
    }
    else{
        filepaths.push(input[i]);
    }
}

// now lets check the filepath enetered by user is valid or not 

for(let i=0;i<filepaths.length;i++){
    if(fs.existsSync(filepaths[i])==false){
        console.log(filepaths[i],"Not exist");
        return;
    }
}

// now code to display the content of those files whose paths are entered by user -->
let contentoffiles = "";
for(let i =0;i<filepaths.length;i++){
    contentoffiles+=fs.readFileSync(filepaths[i]);// reading of content
    contentoffiles+="\r\n";
}
console.log("contentoffiles");
console.log(contentoffiles);
let content = contentoffiles.split("\r\n");
//console.log("content")
//console.log(content);

//node wcat.js -s filepath => convert big line breaks into a singular line break


// console.log(content)
/*let strString =content.join("\n");
console.log("````````````````");
console.log(strString);
console.log("````````````````````````````````");
allcontent = strString.split("\n");
console.log(allcontent);*/


let ispresent = options.includes("-s");

if(ispresent){
    //console.log(content);
    console.log("````````````````");
    for(let i =1;i<content.length;i++){
        if(content[i]=="" && content[i-1] == "" ){
            content[i] = null;
        }
        else if(content[i]=="" && content[i-1]==null ){
            content[i] = null;
        }
    }
    let newdata =[];
    for(let i=0;i<content.length;i++){
        if(content[i]!=null){
        newdata.push(content[i]);
        }
    }
console.log(newdata);

}


// if someone entered the -n -b
let finaloption = "";
if(options.includes("-b")){

    if(options.includes("-n")){
        if(options.indexOf("b")<options.indexOf("-n")){
            finaloption = "-b";
        }
        else{
            finaloption = "-n";
        }
    }
    else{
        finaloption = "-b"
    }
    
}


if(options.includes("-n")){

    if(options.includes("-b")){
        if(options.indexOf("n")<options.indexOf("-b")){
            finaloption = "-n";
        }
        else{
            finaloption = "-b";
        }
    }
    else{
        finaloption = "-n"
    }
    
}

if(finaloption!=""){
    if(finaloption=="-b"){
        addLineToContent(content);
        console.log(content);

    }
    else{
        addLineToEveryOne(content);
        console.log(content);
    }
}

function addLineToContent(arr){
    let count =1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=""){
        let str = arr[i].split("");
        str.unshift(count+" ");
        arr[i] = str.join("");
        count+=1;
        }
}

}
function addLineToEveryOne(arr){
        for(let i=0;i<arr.length;i++){
                let str = arr[i].split("");
                str.unshift(i+1)+" ";
                arr[i] = str.join("");
        }
}

//console.log("`````````");



