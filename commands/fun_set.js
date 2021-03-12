let fs=require("fs");
let path=require("path");
let readline=require("readline");

let b=0;

function func_s(dirPath){
    if (fs.existsSync(dirPath)) {
            //File Exists
            const file = readline.createInterface({ 
                input: fs.createReadStream(dirPath), 
            }); 
            file.on('line', (line) => { 
                if(line.length > 0) {
                    if(b>0){
                        console.log();
                    }
                    console.log(line);
                    b = 0;
                }else{
                    b++;
                }
            }); 
        }
    else{
            console.log("File Not Found");
        }
      
}


module.exports={
    func_set:func_s
}