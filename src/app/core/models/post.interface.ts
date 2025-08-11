export interface PostReactions {
  likes: number;
  dislikes: number;
}

export interface Post {
  id: number;
  body: string;
  reactions: PostReactions;
  likedBy : number[];
  views: number;
  userId: number | undefined;
}

export interface PostsApiResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}