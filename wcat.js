let fs = require('fs');
let path = require('path');

const { fun_1} = require('./commands/print');
const { fun_2 } = require('./commands/fun_next');
const { fun_3} = require('./commands/fun_set');



let command_input=process.argv.slice(2);

let commandInputLength=command_input.length;


if(command_input[0]=="-n"){
    fun_1(command_input[1]);
}

else if(command_input[0]=="-b"){
    fun_2(command_input[1]);
}

else if(command_input[0]=="-s"){

    fun_3(command_input[1]);

}
else{
        console.log("WRONG COMMAND");
    }
   



