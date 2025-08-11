import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FriendsService } from '../friends/friends.service';
import { PostsApiResponse, Post } from '../../models/post.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UiService } from '../ui/ui.service';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  private urlPostsDdb : string = 'https://dummyjson.com/posts';

   private postSubject = new BehaviorSubject<Post[]>([]);
  
  postSubject$ = this.postSubject.asObservable();

  constructor(private http : HttpClient, private authService : AuthService, private friendsService : FriendsService, private uiService : UiService) { }


  fetchPosts() : Observable<PostsApiResponse>{
    return this.http.get<PostsApiResponse>(this.urlPostsDdb);
  }

  getFetchPost : number = 0; // Pour que la liste des posts soit rechargé une seul fois.

  GetFetchPosts(){

    if(this.getFetchPost < 1){
    this.fetchPosts().subscribe({
      next : (data) => {

        this.uiService.isLoading = false;
        const postsWithLikedBy = data.posts.map(p => ({
          ...p,
          likedBy: []  // on initialise vide pour éviter undefined
        }));
        this.postSubject.next(postsWithLikedBy);
      },
      error : (err) => {this.uiService.isLoading = false}
    })
    }
    this.getFetchPost++;

  }

  addPost(body : string){
  
      const  postWrite : Post = {

        id: this.postSubject.value.length,
        body: body,
        reactions: {likes: 0,
                    dislikes: 0},
        likedBy : [],
        views: 0,
        userId : this.authService.getCurrentUser()?.id,
      }  
       this.postSubject.next([postWrite, ...this.postSubject.value]);
 }

 toggleLike(postId: number, userId: number) {
  const allPost = this.postSubject.value;

  const newAllPost = allPost.map(post => {
    if (post.id === postId) {
      const hasLiked = post.likedBy.includes(userId);

      return {
        ...post,
        likedBy: hasLiked
          ? post.likedBy.filter(id => id !== userId) // Dislike
          : [...post.likedBy, userId],               // Like
        reactions: {
          ...post.reactions,
          likes: hasLiked ? post.reactions.likes - 1 : post.reactions.likes + 1
        }
      };
    }
    return post;
  });

  this.postSubject.next(newAllPost);
}

 
// like(postId: number, likedByy: number) { // Aidé par ChatGPT
//   const allPost = this.postSubject.value;

//   const newAllPost = allPost.map(post => {
//     if (post.id === postId && !post.likedBy.includes(likedByy)) {
//       return {
//         ...post,
//         likedBy: [...post.likedBy, likedByy],
//         reactions: { ...post.reactions, likes: post.reactions.likes + 1 }
//       };
//     }
//     return post;
//   });

//   this.postSubject.next(newAllPost);
// }

//  dislike(postId: number, likedByy: number){
//   const allPost = this.postSubject.value;

//   const newAllPost = allPost.map(post => {
//     if (post.id === postId && post.likedBy.includes(likedByy)) {
//       return {
//         ...post,
//         likedBy: post.likedBy.filter(id => id !== likedByy), // on retire le user
//         reactions: { ...post.reactions, likes: post.reactions.likes - 1 }
//       };
//     }
//     return post;
//   });

//   this.postSubject.next(newAllPost);
//  }
  

}