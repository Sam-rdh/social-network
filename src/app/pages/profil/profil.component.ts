import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FriendsService } from 'src/app/core/services/friends/friends.service';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  showBtnRetour! : boolean;

  user : User| null | undefined = null;

  private id = new BehaviorSubject<number | null>(null)
  id$ = this.id.asObservable();
  setId(id : number){this.id.next(id)}


  constructor(public auth : AuthService,private ui : UiService, private friendsService : FriendsService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe(url => {

      const id = url.get('id');
      if (id) {
        this.user = this.friendsService.idGetFriendSelected(+id);
        this.showBtnRetour = true;
      } else {
      this.user = this.auth.getCurrentUser();
      this.showBtnRetour = false;

      this.ui.setCurrentSection('profil')

      }

    })

  }

}
