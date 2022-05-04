export interface FsFile {
    name:string;
    fullPath:string;
    size:number;
    extension:string|undefined;
    isDirectory:boolean;
    content:FsFile[]|undefined;
}
