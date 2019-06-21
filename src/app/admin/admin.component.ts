import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class ADMINComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  adminLogin()
  {
      this.router.navigate(["/admin-dashboard"])
  }
}
