import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-laatste16',
  templateUrl: './laatste16.component.html',
  styleUrls: ['./laatste16.component.scss']
})
export class Laatste16Component implements OnInit {

  match:any

   constructor(private data:DataService, private route:ActivatedRoute) {
    this.route.params.subscribe(params => this.match = params['match']);
    
  }

  ngOnInit(): void {
    this.data.GetYear(this.match).subscribe(data => this.match = data);

  }

}
