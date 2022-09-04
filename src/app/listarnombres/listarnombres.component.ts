import { Component } from '@angular/core';

@Component({
  selector: 'app-listarnombres',
  templateUrl: './listarnombres.component.html',
  styleUrls: ['./listarnombres.component.css']
})
export class ListarnombresComponent {

  nombres!:String[];

  constructor() {
    this.nombres=[];
   }

  ngOnInit(): void {
  }

  anadirnombre(nombre:String){
    this.nombres.push(nombre);

  }

}
