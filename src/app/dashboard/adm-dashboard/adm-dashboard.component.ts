import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-adm-dashboard',
  templateUrl: './adm-dashboard.component.html',
  styleUrls: ['./adm-dashboard.component.css']
})
export class AdmDashboardComponent implements OnInit {

  currentPath?: string;
  dashboard = (this.currentPath);

  updateProduct(){
    this.currentPath = "productUpdate";
  }

  constructor(private router: Router) {}

  ngOnInit(): void {

  }


}
