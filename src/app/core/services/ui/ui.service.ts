import { HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {


  private currentSection = new BehaviorSubject<string>('');
  currentSection$ = this.currentSection.asObservable();
  setCurrentSection(NameSection : string){this.currentSection.next(NameSection)}
  clearCurrentSection(){this.currentSection.next('')}


  private sidebarVisibleSubject = new BehaviorSubject<boolean>(true);
  sidebarVisible$ = this.sidebarVisibleSubject.asObservable();
  closeSidebar(){this.sidebarVisibleSubject.next(false)};
  openSidebar(){this.sidebarVisibleSubject.next(true)};

  private allMyFriendsVisibleSubject = new BehaviorSubject<boolean>(true);
  allMyFriendsVisible$ = this.allMyFriendsVisibleSubject.asObservable();
  closeAllMyFriends(){this.allMyFriendsVisibleSubject.next(false)};
  openAllMyFriends(){this.allMyFriendsVisibleSubject.next(true)};

  private profilFriendSelectedSubject = new BehaviorSubject<boolean>(false);
  profilFriendSelect$ = this.profilFriendSelectedSubject.asObservable();
  openProfilFriendSelect(){this.profilFriendSelectedSubject.next(true)};
  closeProfilFriendSelect(){this.profilFriendSelectedSubject.next(false)};


  isLoading = false;


  constructor(private router : Router) { }


  onBtnRetour(){
    
    let section = '';
    this.currentSection$.pipe(take(1)).subscribe(val => {
      section = val;
    })
    this.router.navigate([section])
    
  }
}

//showSidebar(), hideSidebar()

// 	•	sidebarVisibleSubject
