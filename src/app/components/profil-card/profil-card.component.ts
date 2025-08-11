import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-profil-card',
  templateUrl: './profil-card.component.html',
  styleUrls: ['./profil-card.component.scss']
})
export class ProfilCardComponent implements OnInit {

  @Input() user! : User;

  @Input() AfficheBtnRetour : boolean = true;
  //@Input() user! : any

  @Output() closeProfilFriend = new EventEmitter<boolean>();

  @Output() btnRetour = new EventEmitter<boolean>();


  constructor(private auth : AuthService,private router : Router, private activatedRoute : ActivatedRoute, public ui : UiService) { }

  ngOnInit(): void {

    //const id = this.route.snapshot.paramMap.get('id');
    //this.user = id;

  }

  onCloseProfilFriend(){
    this.closeProfilFriend.emit()
  }

}
