# FS Tree Tool
The node js app to get the structure of a directory in a programmatical way. It also displays the structure in the Windows command "tree" style.

## Usage 
```javascript
const FsTree = require('fs-tree-tool');
let result = await FsTree.getDirectoryTree([PATH], [MAX_DEPTH])


FsTree.getDirectoryTree('../../..', 4).then(result=>{
    console.log(FsTree.stringifyTree(result," "));
})


```