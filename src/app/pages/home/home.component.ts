import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/appStore';
import { FormCreateComponent } from '../form-create/form-create.component';
import { NgxSpinnerService } from 'ngx-spinner';
import * as action from '../../shared/store/user.action';
import { ServicesService } from 'src/app/shared/services/services.service';
import { Users } from 'src/app/shared/models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuarios: Users[] = [];

  constructor(public auth: AuthService,
              private service: ServicesService,
              public dialog: MatDialog,
              private store: Store<AppState>,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.store.dispatch(action.loadingUser())
    this.service.getUsers().subscribe( resp =>{
      this.usuarios = resp
      console.log(this.usuarios)
      this.store.dispatch(action.cargarUser({users: this.usuarios}))
      this.store.dispatch(action.loadingSucces({serial: this.usuarios.length }))
    })

    this.store.select('user').subscribe(({loading}) => {
      if(loading){this.spinner.show()}
      if(!loading){this.spinner.hide()}
    })
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
