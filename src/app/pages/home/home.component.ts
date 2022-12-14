import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@auth0/auth0-angular';
import { FormCreateComponent } from '../form-create/form-create.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.auth.user$.subscribe( d => { console.log(d) })
  }

  openDialog(){
    this.dialog.open(FormCreateComponent,{
      width: '450px',
      height: '280px',
      data: "rigth click"
    });
  }

  logOut(){
    this.auth.logout();
  }

}
