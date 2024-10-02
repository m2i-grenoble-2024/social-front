export interface User {
    id?:number;
    email:string;
    username:string;
    password:string;
    role?:string;
    createdAt?:string|Date;
    banDate?:string|Date;
}

export interface Post {
    id?:number;
    content:string;
    postedAt?:string|Date,
    author?:User;
    respondTo?:Post;
    responseCount?:number;
}