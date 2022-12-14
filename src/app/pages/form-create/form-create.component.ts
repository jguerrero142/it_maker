import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServicesService } from 'src/app/shared/services/services.service';
import { AppState } from 'src/app/shared/store/appStore';
import * as action from '../../shared/store/user.action';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {
  public form: boolean = false
  public contactForm!: FormGroup;
  public serial!: number
  constructor(private readonly fb: FormBuilder,
               private service: ServicesService,
               public dialog: MatDialog,
               private store: Store<AppState>) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.store.select('user').subscribe(d =>{
      if(d.update > 0){
        this.form = true
      }
    })
  }

  onSubmit(): void {
    this.store.select('user').subscribe(d =>{
      this.serial = d.serial      
    })

    const {name, job } = this.contactForm.value
      const user = {
        id: this.serial,
        email: 'george.bluth@reqres.in',
        first_name: name,
        last_name: job,
        fullName: job,
        avatar: 'https://reqres.in/img/faces/3-image.jpg',
      }
      this.store.dispatch(action.oneUser({user: user}))
      this.dialog.closeAll()
  }

  onSubmitUpdate(){
    this.store.select('user').subscribe(d =>{
      this.serial = d.update      
    })

    const {name, job } = this.contactForm.value
      const user = {
        id: this.serial,
        email: 'george.bluth@reqres.in',
        first_name: name,
        last_name: job,
        fullName: job,
        avatar: 'https://reqres.in/img/faces/3-image.jpg',
      }
      this.store.dispatch(action.updateUser({user: user}))
      this.dialog.closeAll()
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      job: ['', [Validators.required]],
    })
  }

}
