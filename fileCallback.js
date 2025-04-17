import fs from "fs";
const callbackWriter =() =>{


fs.writeFile(".dataCallback.csv","This the callback file",(err)=>{
    if(err){
        console.log("unable to write (callback)",err);
     } else{
            console.log("file has been written successfully.(callback");

        }
    
    }
)}
 const callbackReader =() =>{
    fs.readFile(".dataCallback.csv","utf-8",(err,data)=>{
if(err){
    console.log("unable to read data.(callback)",err);

}else{
    console.log("Data is:",data);
}
})
 }

export default {callbackWriter};