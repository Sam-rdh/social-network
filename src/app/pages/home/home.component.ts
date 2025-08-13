import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UiService } from 'src/app/core/services/ui/ui.service';
import { Router } from '@angular/router';
import { FriendsService } from 'src/app/core/services/friends/friends.service';
import { PostsServiceService } from 'src/app/core/services/posts/posts-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  content : string = '';

  visiblePostsCount : number = 4;




  constructor(public postsService : PostsServiceService,private authService : AuthService,public friendsService :FriendsService, public ui : UiService, private router : Router) { }

  ngOnInit(): void {


      this.postsService.GetFetchPosts();

      this.authService.getCurrentUser();

      this.friendsService.getAllUsers();

      this.ui.setCurrentSection('home')
    
  }


  getPictureById(id : number){
    return this.friendsService.allUsers?.find(n => n.id == id)?.image
  }

  
   goToFriendProfil(id : number){
    this.router.navigate(['/profil', id])
  }

  idDivise10(id : number){
    return Math.floor(id/10);
  }

}
