const fs = require('fs');

const content = 'Hey this is a test file';


//1.creating and writing in a file
fs.writeFile('fs module/output.txt', content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});


//2.opening and reading from a file
fs.readFile('fs Module/output.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);
});

//3.append data in a file

fs.appendFile('fs module/output.txt',"\n New line is added!",(err)=>{
  if(err){
    console.error("Error in appending file!")
  }else{
    console.log("data appended successfully!")
  }
})
  
// //4.deleting a file

// fs.unlink('fs module/output.txt',(err)=>{
//   if(err){
//     console.error("Error in deleting file!")
//   }else{
//     console.log("File deleted successfully")
//   }
// })