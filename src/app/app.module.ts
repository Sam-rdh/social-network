import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponentComponent } from './layout/main-layout-component/main-layout-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { sidebarFriendsComponent } from './pages/sidebarFriends/sidebarFriends.component';
import { ResearchFriendsComponent } from './pages/research-friends/research-friends.component';
import { UserFilterPipe } from './core/pipes/user-filter.pipe';
import { FriendCardComponentComponent } from './components/friend-card-component/friend-card-component.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllMyFriendsComponent } from './pages/all-my-friends/all-my-friends.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ProfilCardComponent } from './components/profil-card/profil-card.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainLayoutComponentComponent,
    sidebarFriendsComponent,
    ResearchFriendsComponent,
    UserFilterPipe,
    FriendCardComponentComponent,
    HeaderComponent,
    FooterComponent,
    AllMyFriendsComponent,
    ProfilComponent,
    ProfilCardComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
