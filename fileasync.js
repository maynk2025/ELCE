
import fs from "fs/promises";
const asyncwriter = async()=>{

 }
 const asyncreader = async()=>{
    try{

    
    
const fileData= await fs.readFile("./dataasync.csv","utf-8");
return fileData;
 }
    catch (error){
        console.log("Error reading ",error);

    }
}
    


asyncwriter();
const data = await asyncreader();
console.log(data);