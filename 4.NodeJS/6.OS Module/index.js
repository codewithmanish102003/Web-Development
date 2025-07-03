const os=require('os')

console.log("Platform : ", os.platform())
console.log("OS type : ", os.type())
console.log("CPU Architecture : ",os.arch())
console.log("CPU Cores : ", os.cpus().length)
console.log("Home Directory : ", os.homedir())
console.log('System Uptime (s):', os.uptime());
console.log('Total Memory (MB):', os.totalmem() / 1024 / 1024);
console.log('Free Memory (MB):', os.freemem() / 1024 / 1024);
console.log('User Info:', os.userInfo());