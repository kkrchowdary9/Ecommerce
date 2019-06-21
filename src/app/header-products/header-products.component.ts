import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header-products',
  templateUrl: './header-products.component.html',
  styleUrls: ['./header-products.component.css']
})
export class HeaderProductsComponent implements OnInit {
  tableObj1=[];
  path="";
  constructor(private s:ApiService) { }

  ngOnInit() {
    this.  getProducts();
  }
  getProducts()
  {
    this.s.getProducts().subscribe((output:any)=>{
      console.log(output);
      this.tableObj1=output.data;

      this.path="http://ilanderclients.com/zentech/api/assets/uploads/";
    });
}
}
