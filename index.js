// const os = require("os");
// console.log(os.platform());
// console.log(os.cpus().length);
// console.log(os.arch());
// console.log(os.uptime());


const fs = require("fs");
const path = require('path');


//MEATHOD-1

fs.readdir(process.argv[2], { withFileTypes: true },
    (err, files) => {
        if (err) throw err;
        console.log(files)

        files.map((item) => {
            if (item.isFile()) {
                console.log(`${item.name}:File`)
            }
            else {
                console.log(`${item.name}:Folder`)
            }
        })

    })


//MEATHOD-2

fs.readdir(process.argv[2], function (err, files) {
    files.forEach(file => {
        if (err) throw err;
        else if(path.extname(file) == "") {
            console.log(file + " -- " + "folder")
        } else {
            console.log(file + " -- " + "file")
        }
    }) 
})

//MEATHOD-3

fs.readdir(process.argv[2],{ withFileTypes: true }, function(err, allFiles) {
    if (err) throw err;
   const files = [];
   const directories = [];
    allFiles.forEach(dirent =>{
        if(dirent.isDirectory()){
            directories.push(dirent.name);   
        }else{
                files.push(dirent.name);       
            }
    })
    console.log("The Directories are - ↓");
    console.log(directories)
    console.log("The Files are - ↓");
    console.log(files)
})
