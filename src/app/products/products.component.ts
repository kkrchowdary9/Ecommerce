import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  tableObj=[];
  mesg="";
  path="";
  obj={name:'',title:null,price:null};

  constructor(private s:ApiService) { }

  ngOnInit()
  {
    this.getProducts();
  }
  getProducts()
  {
    this.s.getProducts().subscribe((output:any)=>{
      console.log(output);
      this.tableObj=output.data;
      this.path="http://ilanderclients.com/zentech/api/assets/uploads/";
    });
  }
  addProdcuts()
  {
    var a:any=document.getElementById("image1");
    var f=new FormData();
    f.append("pName",this.obj.name);
    f.append("cost",this.obj.price);
    f.append("singleImage",a.files[0]);
    this.s.addproducts(f).subscribe((out:any)=>
    {
      console.log();
      if(out.status==1)
      {
          this.mesg=out.message;
          this.getProducts();
      }
      else
      {
        this.mesg=out.message;
      }
    });
  }
}
