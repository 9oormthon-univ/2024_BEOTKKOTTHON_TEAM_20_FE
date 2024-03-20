export interface Post {
    postId: number;
    title: string;
    summary: string;
    scrapCount: number;
    commentCount: number;
    categoryId: number;
    tag: string[];
    createdAt:Date;
  }
  export interface DetailPost{
    postId: number;
    title: string;
    content:string,
    scrapCount: number;
    commentCount: number;
    tag: string[];
    categoryId: number;
    userNickname:string;
    userProfileImage:string;
    createdAt:Date;
  }
  