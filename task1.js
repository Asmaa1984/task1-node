const fs = require("fs");
const obj = (fName , lName , age , city)=>{
    return({fName:fName,lName : lName ,age: age, city :city}) 
};
function createFile(fileName , list ){
    const listJSON = JSON.stringify(list);
    fs.writeFileSync(fileName , listJSON);
    console.log("file is created")};
function fileRead(fileName){
    const fileContent = fs.readFileSync(fileName , "utf-8");
    return JSON.parse(fileContent)};
const list1 = obj("ahmed","hosam",20,"alex");
const fileName = "list.json";
createFile(fileName , list1);
const fileContObj= fileRead(fileName);
console.log(fileContObj);
const list2 = obj("adel","ahmed",40,"cairo");
createFile(fileName , list2);
const fileContObj2= fileRead(fileName);
console.log(fileContObj2);