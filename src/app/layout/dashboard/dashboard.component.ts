import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loadComponent: any

  ngOnInit(): void {
    this.loadComponent = 'item'
  }

  navigateTo(type: any){
    if (type == 'item') {
      this.loadComponent = 'item'
    } else {
      this.loadComponent = 'cart'
    }
  }
}
