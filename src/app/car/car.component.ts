import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  name = 'Cars Works!';
  price = 400;
  public drivers = [];
  public errorMsg;
  constructor(private _driverService : DriverService) { };

  onDelete() {
    console.log('Delete Method');
  }

  ngOnInit() {
    this._driverService.getDrivers()
      .subscribe(data => this.drivers = data, error => this.errorMsg = error);

    // this.drivers = this._driverService.getDrivers();
  }

}
