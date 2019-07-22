import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  addvehicle(v_type, v_reg, v_color){
    const obj = {
      v_type,
      v_reg,
      v_color
    };
    console.log(obj);
    this.http.post('http://localhost:3000/vehicle/addvehicle', obj)
  }
}
