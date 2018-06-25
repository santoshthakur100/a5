import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { IEmployee2 } from '../epmloyee';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
  name = 'Cars Works!';
  price = 400;

  selectedHero: IEmployee2;

  public count = 2;
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

  showMoreResult(e){
    console.log(e);
    this.count += 2;
  }

  onSelect(driver : IEmployee2): void {
    this.selectedHero = driver; 
  }

  // onSelect(employee: IEmployee2): void {
  //   this.selectedHero = employee; 
  // }

}
