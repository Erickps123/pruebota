import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Almaneces } from "./../interfaces/almaneces";

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  private allowCors= 'https://cors-anywhere.herokuapp.com/';
  private api ='http://erickps-001-site1.ctempurl.com/api';

  constructor(
    private http: HttpClient,
    
  ) {
      
   }
  
   getAlmacen(){
      const url= `${this.allowCors}${this.api}/almacenes/`;
     return this.http.get<Almaneces[]>(url);
   }

   getAlmacenSolo(id: string){
    const url= `${this.allowCors}${this.api}/almacenes/${id}`;
    return this.http.get<Almaneces[]>(url);
  }

  PostAlmacen(almacen: Almaneces) {
    const path = `${this.allowCors}${this.api}/almacenes`;
    return this.http.post(path, almacen);
  }

  UpdateAlmacen(almacen: Almaneces) {
    const path = `${this.allowCors}${this.api}/almacenes/${almacen.Id}`;
    return this.http.put<Almaneces>(path, almacen);
  }
  DeleteAlmacen(id: string) {
    const path = `${this.allowCors}${this.api}/almacenes/${id}`;
    return this.http.delete(path);
  }
}
