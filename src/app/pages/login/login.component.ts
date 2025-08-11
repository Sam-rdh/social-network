import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AuthResponse } from 'src/app/core/models/auth.interface';
import { User } from 'src/app/core/models/user.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string = ``;
  password : string = ``; 

  messageErreur : any = ``;


  constructor(private authService : AuthService, private router : Router, private guard : AuthGuard) { }

  ngOnInit(): void {
    
  }

  loginUser(){

    this.authService.loginUser(this.username,this.password).subscribe({
     next : (data : AuthResponse) =>{
      console.log("Good");
      localStorage.setItem(`token`, data.accessToken);
      this.guard.setAuthState(true);
      this.router.navigate(['/home']);
      //console.log(localStorage.getItem(`token`));
     },
     error : (err) =>  {console.log(err);
            this.messageErreur = err.error.message}
      
  })
  }



}
