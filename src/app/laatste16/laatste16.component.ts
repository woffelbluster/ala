import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';



@Component({
  
  selector: 'app-laatste16',
  templateUrl: './laatste16.component.html',
  styleUrls: ['./laatste16.component.scss']


  
})

export class Laatste16Component implements OnInit {

  year:any

   constructor(private data:DataService, private route:ActivatedRoute) {
    this.route.params.subscribe(params => {this.year = params['id'];});

   }

  ngOnInit(): void {

    this.data.GetYear(this.year).subscribe(data => {
      this.year = data;
      this.year = this.year.reverse().map((item:any, index:any) => {
        return {...item, id: index + 1};
      });
      //finale
      this.year[0].final = true;
      //troost ronde
      this.year[1].troost = true;
      //halve finale
      this.year.forEach((item:any, index:any) => {
        if (index === 2 || index === 3) {
          item.halve = true;
        }
      });
      //kwart finale
      this.year.forEach((item:any, index:any) => {
        if (index === 4 || index === 5 || index === 6 || index === 7) {
          item.kwart = true;
        }
      });
      //achtste finale
      this.year.forEach((item:any, index:any) => {
        if (index === 8 || index === 9 || index === 10 || index === 11 || index === 12 || index === 13 || index === 14 || index === 15) {
          item.kwart = true;
        }
      });









      console.log(this.year);
    });




  }




}
