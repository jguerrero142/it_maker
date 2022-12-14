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

  /**
     * Variable que identifica el formulario a utilizar
     */
  public form: boolean = false

  /**
     * Variable que maneja el formulario
     */
  public contactForm!: FormGroup;

  /**
     * Variable que lleva el consecutivo de los usuarios cargados
     */
  public serial!: number
  constructor(private readonly fb: FormBuilder,
               private service: ServicesService,
               public dialog: MatDialog,
               private store: Store<AppState>) { }

  ngOnInit(): void {
    /**
     * Se inicia el formulario
     */
    this.contactForm = this.initForm();

    /**
     * Validamos si se ah seleccionado un usuario para actualizar y asi mostrar un tipo de formulario
     */
    this.store.select('user').subscribe(d =>{
      if(d.update > 0){
        this.form = true
      }
    })
  }

  onSubmit(): void {

    /**
     * Selecciona el serial del usuario para asignar el consecutivo al nuevo usuario
     */
    this.store.select('user').subscribe(d =>{
      this.serial = d.serial      
    })

    /**
     * Obtenemos la variables del formulario y creamos el objecto
     */
    const {name, job } = this.contactForm.value
      const user = {
        id: this.serial,
        email: 'george.bluth@reqres.in',
        first_name: name,
        last_name: job,
        fullName: job,
        avatar: 'https://reqres.in/img/faces/3-image.jpg',
      }

      /**
     * Envia el nuevo usuario al estado
     */
      this.store.dispatch(action.oneUser({user: user}))
      this.dialog.closeAll()
  }

  onSubmitUpdate(){
    /**
     * Actualiza el usuario en la aplicacion
     */
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

      /**
     * Envia el usuario con la nueva informacion
     */
      this.store.dispatch(action.updateUser({user: user}))
      this.dialog.closeAll()
  }

  /**
     * Se configura las validaciones del formulario
     */
  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      job: ['', [Validators.required]],
    })
  }

}
