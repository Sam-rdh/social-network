import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserApi } from 'src/app/core/models/user.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FriendsService } from 'src/app/core/services/friends/friends.service';


@Component({
  selector: 'app-sidebar-friends',
  templateUrl: './sidebarFriends.component.html',
  styleUrls: ['./sidebarFriends.component.scss']
})
export class sidebarFriendsComponent implements OnInit {


  @Output() friendSelected = new EventEmitter<User>();


  

  constructor(public FriendsService : FriendsService, private router : Router) { }

  ngOnInit(): void {
  }


  onFriendSelected(user : User){
    this.friendSelected.emit(user)
  }

  showMoreFriends(){
    
  }
  


}
