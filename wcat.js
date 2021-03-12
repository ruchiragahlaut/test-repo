let fs = require('fs');
let path = require('path');

const { func_print} = require('./commands/print');
const { func_set } = require('./commands/fun_next');
const { func_next} = require('./commands/fun_set');



let command_input=process.argv.slice(2);

let commandInputLength=command_input.length;


if(command_input[0]=="-n"){
    func_print(command_input[1]);
}

else if(command_input[0]=="-b"){
    func_set(command_input[1]);
}

else if(command_input[0]=="-s"){

    func_next(command_input[1]);

}
else{
        console.log("WRONG COMMAND");
    }
   



