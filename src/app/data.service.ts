import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
    
  GetYears(){
    return this.http.get('https://k0497.azurewebsites.net/api/years/getallyears');
  }
  GetYear(year: number){
    return this.http.get('https://k0497.azurewebsites.net/api/matches/getallmatchesbyyear?year='+year);
  }
  GetMatch(matchid: number){
    return this.http.get('https://k0497.azurewebsites.net/api/matches/GetMatchesById?matchid='+matchid);
  }
  GetPlayers(matchid: number){
    return this.http.get('https://k0497.azurewebsites.net/api/players/getallplayersbymatch?matchid='+matchid)
  }

  
}
