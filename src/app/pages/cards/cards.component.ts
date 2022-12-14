import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Users } from 'src/app/shared/models';
import { ServicesService } from 'src/app/shared/services/services.service';
import { AppState } from 'src/app/shared/store/appStore';
import * as action from '../../shared/store/user.action';
import { FormCreateComponent } from '../form-create/form-create.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public usuarios: Users[] = [];
  
  constructor(private store: Store<AppState>,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
      this.store.select('user').subscribe( d =>{
        this.usuarios = d.users
      })
  }

  updateUser(user: Users){
    this.store.dispatch(action.selectUser({id: user.id}))
    this.openDialog();
  }

  openDialog(){
    this.dialog.open(FormCreateComponent,{
      width: '450px',
      height: '280px',
      data: "rigth click"
    });
  }

  deleteUser(id: number){
    this.store.dispatch( action.deleteUser({id: id}))
  }

}
