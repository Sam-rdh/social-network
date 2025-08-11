import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponse } from '../../models/auth.interface';
import { User, UserApi } from '../../models/user.interface';
import { AuthGuard } from '../../guards/auth.guard';



@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private apiUrlPost = `https://dummyjson.com/auth/login`;
  
  private apiCheckToken = 'https://dummyjson.com/auth/me';

  //private _currentUser : User | null = null;

  private _currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUserSubject$ = this._currentUserSubject.asObservable();

  constructor(private http : HttpClient, private guard : AuthGuard) {}

  loginUser(username : string, password : string) : Observable<AuthResponse>{
    return this.http.post<AuthResponse>(this.apiUrlPost, {username,password})
  }

  fetchUserByToken(token : string) : Observable<User>{
    return this.http.get<User>(this.apiCheckToken, {headers : {Authorization : `Bearer ${token}`}})
  }

  getCurrentUserByToken(){ //Mes a jours le user connecté par rapport au token local storage renvoyé par API

    if(!localStorage.getItem(`token`)){
      console.log(`Token introuvable !`);
      return
    }

    this.fetchUserByToken(localStorage.getItem(`token`) as string).subscribe({
      next : (data : User) => {this._currentUserSubject.next(data)},
      error : (err) => {console.log(err.error.message);}
    })
  }

  logout(){
    this.guard.setAuthState(false)
  }


  getCurrentUser() : User|null{ // Renvoie le user connecté
    return this._currentUserSubject.value;
  }


}
