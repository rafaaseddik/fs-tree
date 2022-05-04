import * as fs from 'fs';
import * as path from 'path';

import { FsFile } from './types';

export class FsTree{
    static async getDirectoryTree(path:string, maxDepth:number=1):Promise<FsFile | null>{
        if(!path || typeof path !=='string' || path.length===0){
            throw new Error('path must be a non empty string');
        }
        if(!fs.existsSync(path)){
            return null;
        }
        let result = await this.parsePath(path, maxDepth);
        
        return result;
    }
    
    private static parsePath(filePath:string, limit:number=1):FsFile{
        const rootStats = fs.statSync(filePath);
        const absolutePath= path.resolve(filePath);
        if(rootStats.isFile()){
            return {
                name:path.parse(filePath).base,
                fullPath:absolutePath,
                size:rootStats.size,
                extension:path.parse(filePath).base.split('.').at(-1),
                isDirectory:false
            } as FsFile;
        }
        else{
            
            let result = {
                name:this.getNameFromPath(absolutePath), 
                fullPath:absolutePath,
                size:0,
                extension:undefined,
                isDirectory:true
            } as FsFile;
            
            if(limit>0){
                let content = fs.readdirSync(filePath).map(file=>{
                    return this.parsePath(filePath+"\\"+file, limit-1);
                });
                result.content=content;
            }
            
            return result;
        }
    }
    private static getNameFromPath(filePath:string):string{
        return filePath.split('\\').at(-1) as string;
    }
    static stringifyTree(file:FsFile, indentChar:string="."){
        let result="";
        result+= this.parseFile(file, indentChar);
        return result;
    }
    private static parseFile(file:FsFile, indentChar:string,depth=0){
        let result = indentChar.repeat(depth)+file.name+'\n';
        if(file.content && file.content.length){
            file.content.forEach(subFile=>{
                result+=this.parseFile(subFile, indentChar, depth+1)
            })
        }
        return result;
    }
}