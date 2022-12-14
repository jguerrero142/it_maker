import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    /**
     * Se valida si el usuario esta autenticado
     */
    this.auth.isAuthenticated$.subscribe(resp => {
      if(resp){
        this.router.navigate(['/index/home'])
      }
    })
  }
/**
     * Si el usuario esta atenticado lo redirecciona
     */
  login(){
    this.auth.loginWithRedirect()
  }
}
