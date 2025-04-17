import fs from "fs";
const syncwriter=()=>fs.writeFileSync("./data.csv","This is a sync file");

 const syncreader =()=>{
const fileData= fs.readFileSync("./data.csv","utf-/8");
console.log(fileData);
}
const syncappend=()=>fs.appenfFileSync("./data.csv","\nThis is the line 2");

const syncdelete=()=>fs.unlikeSync("./data.csv");
export default {syncreader,syncwriter,syncappend,syncdelete}