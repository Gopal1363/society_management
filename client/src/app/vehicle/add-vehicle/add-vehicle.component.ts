import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from '../vehicle.service'

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: VehicleService) { }

  ngOnInit() {
  }

}
