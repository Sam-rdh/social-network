import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User, UserApi } from '../../models/user.interface';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  private friendSelectedSubject = new Subject<User>();
  friendSelected$ = this.friendSelectedSubject.asObservable();
  editFriendSelected(user : User){this.friendSelectedSubject.next(user)}

  myFriends : User[] = [];

  afficherMoreFriend : boolean = false;

  visibleFriendsCount : number = 4;

  visibleResearchFriendsCount : number = 10;


  allUsers : User[] | null = null;

  searchValue : string = ``;

  private apiUrlBdd = `https://dummyjson.com/users`;

  constructor(private http : HttpClient, private router : Router, private auth : AuthService) { }


  apiGetAllUser() : Observable<UserApi>{
   return this.http.get<UserApi>(this.apiUrlBdd)
  }

  addFriends(friend : User){
    if (this.myFriends.find(n => n.id == friend.id)) {
      return
    }
    this.myFriends.push(friend);
    if (this.myFriends.length > this.visibleFriendsCount) {
      this.afficherMoreFriend = true;
    }
    //console.log(this.myFriends)

  }

  deleteFriend(id : number){
    this.myFriends = this.myFriends.filter(n => n.id != id)
    //console.log(this.myFriends)
  }

  ifMyFriend(id : number){
    return this.myFriends.find(n => n.id == id)
  }

  getAllUsers(){
    this.apiGetAllUser().subscribe({
      next : (data : UserApi) => {
        let tab = data.users
        tab = tab.filter(n => n.id != this.auth.getCurrentUser()?.id);
        

        this.allUsers = data.users;
      },
      error : (err) => {}
    })
  }

  idGetFriendSelected(id : number){
   return this.allUsers?.find(n => n.id == id);
  }



}


