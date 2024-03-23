export interface MyPostProps {
    postId: number;
    categoryId: number;
    title: string;
    createdAt: string; 
    summary: string;
    tag: string[];
    commentCount: number;
    scrapCount: number;
}