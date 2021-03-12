let fs = require('fs'); 
let readline = require('readline'); 

let count=1;

function func_n(dirPath){
    if (fs.existsSync(dirPath)) {
        const file = readline.createInterface({ 
             input: fs.createReadStream(dirPath), 
        }); 
    
        file.on('line', (line) => { 
            console.log(count+". "+line);
            count++; 
        }); 
        }
    else{
        console.log('File Not Found');
    }

}

module.exports={
    func_next:func_n
}