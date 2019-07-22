import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit() {
  }

  onClickAdd(){
    this.Router.navigate(['vehicle/addvehicle']);
  }

}
