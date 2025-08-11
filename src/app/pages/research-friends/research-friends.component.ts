import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { get } from 'http';
import { User, UserApi } from 'src/app/core/models/user.interface';
import { FriendsService } from 'src/app/core/services/friends/friends.service';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-research-friends',
  templateUrl: './research-friends.component.html',
  styleUrls: ['./research-friends.component.scss']
})
export class ResearchFriendsComponent implements OnInit {

  visibleFriendsCount : number = 10


  constructor(public friendsService : FriendsService, private ui : UiService, private router : Router) { }

  ngOnInit(): void {
      this.friendsService.getAllUsers();

      this.ui.setCurrentSection('research')

  }


  addFriends(friend : User){
    this.friendsService.addFriends(friend) 
  }

  deleteFriend(id : number){
    this.friendsService.deleteFriend(id)
  }

  ifMyFriend(id : number) : boolean{
    
   return !!this.friendsService.ifMyFriend(id)

  }

  getAllUsers(){
    this.friendsService.getAllUsers()
  }

  navigateToMyFriends(){
    this.router.navigate(['/friends']);
  }


}
