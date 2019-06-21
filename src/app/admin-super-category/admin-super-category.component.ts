import { Component, OnInit } from '@angular/core';
import { ApiService  } from "../api.service";
import * as $ from 'jquery';
declare  var $:any;
@Component({
  selector: 'app-admin-super-category',
  templateUrl: './admin-super-category.component.html',
  styleUrls: ['./admin-super-category.component.css']
})
export class AdminSuperCategoryComponent implements OnInit {
  tableObj=[];
  delMsg=[];
  Obj={suprCategry:null};
  updateObj={superCatName:null,superCatID:null};
  addSuprCatgry= "";
  Deleteme="";
  updateMesg="";
  constructor(private s:ApiService) { }

  ngOnInit() {
    this.getsupercategory()
  }
  updateMe(id)
  {
$("#myModal").modal("show");
    this.s.getSuperCategoryById(id).subscribe((output:any)=>{
      if(output.status==1)
      {
        console.log(output.data[0].super_category_aws_id);
        this.updateObj.superCatID=  output.data[0].super_category_aws_id;
        this.updateObj.superCatName=output.data[0].super_category_name;
      }
    });
  }
  updateMe1()
  {
    console.log(this.updateObj);
    var f=new FormData();
    f.append("superCategryName",this.updateObj.superCatName);
    f.append("superCategryId",this.updateObj.superCatID);
    this.s.updateSuperCategry(f).subscribe((output:any)=>{
      console.log(output);
        if(output.status==1)
        {
            this.updateMesg=output.message;
            this.getsupercategory();
        }
        else{
          this.updateMesg=output.message;
        }

    });
  }
getsupercategory()
{
  this.s.getSuperCategory().subscribe((output:any)=>{
  //console.log(output);
    if(output.status==1)
    {
      this.tableObj=output.data;
    }
  })
}
DeleteMe(id)
{
  console.log(id);
  if(confirm('do you to delete me?')){
    var formDate= new FormData();
    formDate.append("superCategoryId",id);
    this.s.deleteSuperCategory(formDate).subscribe((output:any)=>{
      console.log(output)
      if(output.status==1)
      {
        this.delMsg=output.message;
        this.getsupercategory()
      }
    })
  }
}
AddsuprCatgry()
{
  console.log(this.Obj.suprCategry);
  var formDate = new FormData();
  formDate.append("SuperCategoryName",this.Obj.suprCategry)
  this.s.addSupercatgry(formDate).subscribe((output:any)=>{
    console.log(output)
    if(output.status==1)
    {
      this.addSuprCatgry=output.message;
      this.getsupercategory()
    }
    else
    {
      this.addSuprCatgry=output.message;
    }
  })
}
}
