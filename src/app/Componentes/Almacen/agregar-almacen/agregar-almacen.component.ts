import { Component, OnInit } from '@angular/core';
import { Almaneces } from 'src/app/interfaces/almaneces';

@Component({
  selector: 'app-agregar-almacen',
  templateUrl: './agregar-almacen.component.html',
  styleUrls: ['./agregar-almacen.component.css']
})
export class AgregarAlmacenComponent implements OnInit {
  almacenes: Almaneces[];
  constructor() { }

  ngOnInit(): void {
    this.almacenes = [];
  }

  
}
