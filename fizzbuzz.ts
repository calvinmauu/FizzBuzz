import * as fs from "fs"
import {Output} from "./util";

const argLength = process.argv.length;

console.log("Hello World!");

if ((argLength != 5)&&(argLength != 3)) {
 console.log("You need either 3 or 5 arguments!");
 process.exit();
}

let firstString = "Fizz";
let secondString = "Buzz";

if (argLength == 5) {
  firstString = process.argv[3];
  secondString = process.argv[4];
}

const input = fs.readFileSync('config.txt', 'utf8');

const inputArray = input.split("\n");

let processedRange = ["", ""];
let startNum = 0;
let endNum = 0;
let outputString = "";

for(var loop = 0; inputArray.length > loop; loop++) {
  outputString = outputString + "\n";
  
  if (loop == inputArray.length - 1) {
    console.log(outputString);
    break;
  }
  
  processedRange = inputArray[loop].split(",");
  startNum = Number(processedRange[0]);
  endNum =  Number(processedRange[1]);
  
  for (var counter = startNum; endNum > counter; counter++) {
    outputString = outputString + Output(counter, firstString, secondString) + " ";
  }
  
  outputString = outputString + Output(counter, firstString, secondString);
}
