const {FsTree} = require('../dist');


FsTree.getDirectoryTree('..', 4).then(result=>{
    console.log(FsTree.stringifyTree(result," "));
})