import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/shared/models';
import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public usuarios: Users[] = [];
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.service.getUsers().subscribe( resp =>{
      this.usuarios = resp
      console.log(this.usuarios)
    })
  }

}
