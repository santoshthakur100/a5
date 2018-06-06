import { Injectable } from '@angular/core';

@Injectable()
export class DriverService {

  constructor() { }
  
  getDrivers () {
    return [
      {"id":1, "name":"Santosh", "age":"32"},
      {"id":2, "name":"Andrew", "age":"30"},
      {"id":3, "name":"Brandon", "age":"35"},
      {"id":4, "name":"Christina", "age":"36"},
      {"id":5, "name":"Amit Bhatt", "age":"30"},
      {"id":6, "name":"Om Prakash", "age":"28"}
    ]
  }
}
