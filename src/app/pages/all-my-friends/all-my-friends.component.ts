import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';
import { FriendsService } from 'src/app/core/services/friends/friends.service';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-all-my-friends',
  templateUrl: './all-my-friends.component.html',
  styleUrls: ['./all-my-friends.component.scss']
})
export class AllMyFriendsComponent implements OnInit {

  
  
  profilFriendChoice! : User;


  constructor(public friendsService : FriendsService, public ui : UiService) { }

  ngOnInit(): void {

    this.ui.setCurrentSection('friends');

  }

  stockUserFriend(user : User){
    this.profilFriendChoice = user;

  }

  

 


}
