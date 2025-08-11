import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponentComponent } from './layout/main-layout-component/main-layout-component.component';
import { HomeComponent } from './pages/home/home.component';
import { ResearchFriendsComponent } from './pages/research-friends/research-friends.component';
import { AllMyFriendsComponent } from './pages/all-my-friends/all-my-friends.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {path : '', 
  component : MainLayoutComponentComponent,
  // canActivate : [AuthGuard],
  children :[
      {path : '', redirectTo : 'home', pathMatch: 'full' },
      {path : 'home', component : HomeComponent},
      {path : 'profil', component : ProfilComponent},
      {path : 'profil/:id', component : ProfilComponent},
      {path : 'friends', component: AllMyFriendsComponent},
      {path : 'research', component : ResearchFriendsComponent},
    ]
  },
  {path : 'login', component: LoginComponent},
  {path : '**', redirectTo : 'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration : 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
