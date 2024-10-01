export interface User {
    id?:number;
    email:string;
    username:string;
    password:string;
    role?:string;
    createdAt?:string|Date;
    banDate?:string|Date;
}