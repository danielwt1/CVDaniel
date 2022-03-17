import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  loaded=false;
  constructor() { }
  
  ngOnInit(): void {
    setInterval(()=>{
      this.loaded=true;
    },3000);
  }

}
