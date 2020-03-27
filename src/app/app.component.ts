import { Component } from '@angular/core';
import { ApiservicesService } from "./servicios/apiservices.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  public ID : number;
  public Codigo : string;
  public Ubicacion : string;
  public Inventario : string;
  public ID_Encargado : number;


  constructor(
    private apiServices: ApiservicesService
  ) {

  }

  getAlmacen(){
    this.apiServices.getAlmacen().subscribe(almacenes =>{
      console.log(almacenes);
    });
  }
  getAlmacenSolo(){
    this.apiServices.getAlmacenSolo('2').subscribe(almacenes =>{
      console.log(almacenes);
    });
  }

  PostAlmacen() {
    const almacen = {
      Codigo: this.Codigo,
      Ubicacion: this.Ubicacion,
      Inventario: this.Inventario,
      ID_Encargado: this.ID_Encargado
    };
    this.apiServices.PostAlmacen(almacen)
    .subscribe((registro) => {
      console.log(registro);
    });
  }

  UpdateAlmacen() {
    const almacen = {
      Id: this.ID,
      Codigo: this.Codigo,
      Ubicacion: this.Ubicacion,
      Inventario: this.Inventario,
      ID_Encargado: this.ID_Encargado
    };
    this.apiServices.UpdateAlmacen(almacen)
    .subscribe(registro => {
      console.log(registro);
    });
  }

  DeleteAlmacen() {
    this.apiServices.DeleteAlmacen('3')
    .subscribe((registro) => {
      console.log(registro);
    });
  }
}
