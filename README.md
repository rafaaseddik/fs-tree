# FS Tree Tool
The node js app to get the structure of a directory in a programmatical way. It also displays the structure in the Windows command "tree" style.

## Usage 
```javascript
const {FsTree} = require('fs-tree-tool');

FsTree.getDirectoryTree('..', 4).then(result=>{
    console.log(FsTree.stringifyTree(result," "));
})

```

## Docs (in progress)
The library exposes two functions :
- getDirectoryTree(path, depth) : this functions returns an object that describes the structures at the given path with the given depth. It returns a tree-like structure.
- stringifyTree(tree): it takes the output of the getDirectoryTree result and return it in a human readable format string.


  
