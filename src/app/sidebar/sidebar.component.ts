import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navbarfixed:boolean=false;
  loaded=false;
  @HostListener('window:scroll',['$event'])onscroll(){
    if(window.scrollY>960){
      this.navbarfixed=true;
    }
    else{
      this.navbarfixed=false;
    }
  }
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.loaded=true;
    },3000);
  }


}
