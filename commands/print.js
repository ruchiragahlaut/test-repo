let fs=require("fs");
let readline=require("readline");

let count=0; 

function funprint(dirPath){ 

    if (fs.existsSync(dirPath)) {
        const file = readline.createInterface({ 
            input: fs.createReadStream(dirPath), 
        }); 

        file.on('line', (line) => { 
            if(line.length > 0) {
                console.log(count+". "+line);
                count++;
            }else{
                console.log(line);
            }
        });
    }
else{
        console.log('File Not Found');
    }
}

module.exports={
    fun_print:funprint
}