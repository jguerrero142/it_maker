import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServicesService } from 'src/app/shared/services/services.service';


@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(private readonly fb: FormBuilder,
               private service: ServicesService,
               public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(): void {
    const user = this.contactForm.value
    this.createUsers(user);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      job: ['', [Validators.required]],
    })
  }

  createUsers(data: any){
    this.service.createUsers(data).subscribe( resp =>{
      console.log(resp)
      this.dialog.closeAll()
    })
  }

}
