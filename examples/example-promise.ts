import {FsTree} from '../lib';

FsTree.getDirectoryTree('../../..', 4).then(result=>{
    console.log(FsTree.stringifyTree(result," "));
})
