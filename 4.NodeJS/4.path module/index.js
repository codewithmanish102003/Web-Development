const path = require('path');
const { clearScreenDown } = require('readline');

//1.path.basename() returns the last part of a path
const filepath='/users/students/docs/file.txt'
console.log(path.basename(filepath))

//2.path.dirname() returns the directory name of a path
console.log(path.dirname(filepath))

//3.path.join() join multiple path segments
const fullpath=path.join('/users','john','docs','file.txt')
console.log(fullpath)

//4.path.extreme() returns the file extension of a file
console.log(path.extname(fullpath))
