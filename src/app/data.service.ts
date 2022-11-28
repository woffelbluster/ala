import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetYears(){
    return this.http.get('https://k0497.azurewebsites.net/api/years/getallyears');
  }
}
