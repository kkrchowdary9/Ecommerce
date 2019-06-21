import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import * as $  from  'jquery';
declare var $:any;
@Component({
  selector: 'app-admin-main-category',
  templateUrl: './admin-main-category.component.html',
  styleUrls: ['./admin-main-category.component.css']
})
export class AdminMainCategoryComponent implements OnInit {
  tableObj1=[];
  tabObj=[];
  delMsg1=[];
  obj={mainName:null,superID:null}
  obj1={SuperID:null, MainName:null}
  updateObj1={mainName:null,superID:null}
  updateMesg1="";
  AddmainCatgory="";
  constructor(private s:ApiService) { }

  ngOnInit()
  {
      this.getsupercategory();
      this.getmainCategory();
  }
  addMainCategoris()
  {
    console.log(this.obj);
    var formDate= new FormData();
    formDate.append("superCategoryIds",this.obj.superID);
    formDate.append("mainCategoryName",this.obj.mainName)
    this.s.Addmainctegory(formDate).subscribe((output:any)=> {
      console.log(output)
      if(output.status==1)
      {
        this.AddmainCatgory=output.message;
        this.getmainCategory();
      }
      else
      {
        this.AddmainCatgory=output.message;
      }
    })
  }
  getSuperCtId()
  {
    this.obj.superID=$("#selectData").val();

  }
  getsupercategory()
{
  this.s.getSuperCategory().subscribe((output:any)=>{
  //console.log(output);
    if(output.status==1)
    {
      this.tableObj1=output.data;
    }
  })
}
getmainCategory()
{
  this.s.getMainCategories().subscribe((output:any)=>{
    console.log(output)
    if(output.status==1)
    {
      this.tabObj= output.data;
    }
  });
}
DeleteMe(id)
{
  if(confirm('do you want to delete me?'))
  {
    var formDate= new FormData();
    formDate.append("mainCategoryId",id)
    this.s.deleteMaincatgory(formDate).subscribe((output:any)=>{
     // console.log(output)
      if(output.status==1)
      {
        this.delMsg1=output.data;
        this.getmainCategory();
      }
    })
  }
}
UpdateMe(id)
{
  $('#myModal1').modal('show');
  this.s.getMainCategoryById(id).subscribe((output:any)=>{

    if(output.status==1)
    {
      console.log(output.data[0].main_category_aws_id);
      this.updateObj1.superID= output.data[0].main_category_aws_id;
      this.updateObj1.mainName = output.data[0].main_category_name;
    }
  })
}
UpdateMe1()
{
  console.log(this.updateObj1)
  var formDate = new FormData();
  formDate.append("mainCategryId",this.updateObj1.superID);
  formDate.append("mainCategryName",this.updateObj1.mainName);
  this.s.updateMainCategry(formDate).subscribe((output:any)=> {
    console.log(output)
    if(output.status==1)
    {
      this.updateMesg1= output.message;
      this.getmainCategory();
    }
    else
    {
      this.updateMesg1= output.message;
    }
  });
}
}
