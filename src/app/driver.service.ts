import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IEmployee } from './epmloyee';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class DriverService {

  private _url: string = '/assets/data/employees.json';

  constructor(private http:HttpClient) { }

  getDrivers (): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);

    // return [
    //   {"id":1, "name":"Santosh", "age":"32"},
    //   {"id":2, "name":"Andrew", "age":"30"},
    //   {"id":3, "name":"Brandon", "age":"35"},
    //   {"id":4, "name":"Christina", "age":"36"},
    //   {"id":5, "name":"Amit Bhatt", "age":"30"},
    //   {"id":6, "name":"Om Prakash", "age":"28"}
    // ]
  }
}
