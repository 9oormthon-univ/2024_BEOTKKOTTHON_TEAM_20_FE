export interface Post {
    postId: number;
    title: string;
    content: string;
    scrapCount: number;
    commentCount: number;
    categoryId: number;
    tag: string[];
    aiScript?: string;
    createdAt:Date;
    updatedAt:Date;
  }
  