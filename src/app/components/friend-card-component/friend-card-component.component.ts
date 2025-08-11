import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.interface';
import { FriendsService } from 'src/app/core/services/friends/friends.service';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-friend-card-component',
  templateUrl: './friend-card-component.component.html',
  styleUrls: ['./friend-card-component.component.scss']
})
export class FriendCardComponentComponent implements OnInit {

  @Input() user! : User;

  @Input() ifMyFriend! : boolean;

  @Input() showBtnAdd : boolean = true;

  @Input() showBtnDelete : boolean = true;

  @Output() addFriends = new EventEmitter<User>();

  @Output() deleteFriend = new EventEmitter<number>();

  @Output() PushName = new EventEmitter<boolean>();



  constructor(private friendsService : FriendsService, public ui : UiService, private router : Router) { }

  ngOnInit(): void {
  }

  onAddFriends(){
    if(this.user)
    this.addFriends.emit(this.user) 
  }

  onDeleteFriend(){
    if(this.user)
    this.deleteFriend.emit(this.user.id)
  }

  onPushName(){
    this.PushName.emit();
  }

  goToFriendProfil(id : number){
    this.router.navigate(['/profil', id])
  }

 


  



}
