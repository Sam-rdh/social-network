import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from 'src/app/core/models/user.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-main-layout-component',
  templateUrl: './main-layout-component.component.html',
  styleUrls: ['./main-layout-component.component.scss']
})
export class MainLayoutComponentComponent implements OnInit {

  showSideBar! : boolean;

  valueFriendSelected! : User;

  constructor(private auth : AuthService,public router : Router, public ui : UiService) { }

  ngOnInit(): void {

  //  this.auth.getCurrentUserByToken();

  //  this.router.events.subscribe(
  //   (event) => {  if(event instanceof NavigationEnd){  if((this.router.url.startsWith('/friends'))){this.ui.closeSidebar()} else{this.ui.openSidebar()} }    }
  //  )
  
  this.auth.getCurrentUserByToken();

  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      // Sidebar masquée sur /friends ET /contact, visible ailleurs
      if (this.router.url.startsWith('/friends') || this.router.url.startsWith('/contact')) {
        this.ui.closeSidebar();
      } else {
        this.ui.openSidebar();
      }
    }
  });

   
  }

}
