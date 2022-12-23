import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-matchinfo',
  templateUrl: './matchinfo.component.html',
  styleUrls: ['./matchinfo.component.scss']
})
export class MatchinfoComponent implements OnInit {

  match:any
   constructor(private data:DataService, private route:ActivatedRoute) {
    this.route.params.subscribe(params => {this.match = params['id'];});

   }

  ngOnInit(): void {
    this.data.GetMatch(this.match).subscribe(data => this.match = data);

  }

}
