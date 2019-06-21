import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import * as $ from 'jquery';
declare  var $:any;
@Component({
  selector: 'app-admin-sub-category',
  templateUrl: './admin-sub-category.component.html',
  styleUrls: ['./admin-sub-category.component.css']
})
export class AdminSubCategoryComponent implements OnInit {
  tableObj=[];
  tableObj1=[];
  tableObj2=[];
  deleMsg=[];
  tabObj=[];
  obj3={SubName:null,MainID:null}
  updObj={mainId:null, Subname:null}
  constructor(private s:ApiService) { }

  ngOnInit()
  {
    this.getsupercategory();
    this.getSubCategory();
  }
  getsupercategory()
  {
    this.s.getSuperCategory().subscribe((output:any)=>{
    //console.log(output);
      if(output.status==1)
      {
        this.tableObj=output.data;
      }
      console.log(this.tableObj);
    })
  }
  getSuperCatid()
  {
    var id=$("#selectData1").val();

      this.s.getMainCategories().subscribe((output:any)=>{

        if(output.status==1)
        {
            var result=output.data;

          for(var i=0;i<result.length;i++)
          {
            if(result[i].super_category_ids==id)
            {
            this.tableObj1.push(result[i]);
            }

          }
        }
        });
  }
  getmainCatid()
  {
    var id=$("#selectData11").val();
   alert(id);
   this.obj3.MainID=id;
  }
  getSubCategory()
  {
    this.s.getSubcategory().subscribe((output:any)=>{
      console.log(output)
      if(output.status==1)
      {
          this.tableObj2= output.data;
      }
    });
  }
  DeleteMe(id)
  {
    if(confirm('do you want delete me?'))
    {
      var formDate= new FormData();
      formDate.append("subCategoryId",id)
        this.s.deleteSubCategory(formDate).subscribe((output:any)=>{
          console.log(output);
        if(output.status==10)
          {
            this.deleMsg= output.data;
            this.getSubCategory();
          }
        });
    }
  }
  Addsubcategry()
  {
    console.log(this.obj3);
    var f= new FormData();
    f.append("mainCategoryIds",this.obj3.MainID);
    f.append("subCategoryName",this.obj3.SubName);
    this.s.AddsubCategory(f).subscribe((output:any)=>{
      console.log(output)
      if(output.status==1)
      {
        this.tabObj=output.data;
        this.getSubCategory();
      }
      else
      {
        this.tabObj=output.data;
      }
    });
  }
  UpdateMe(id)
  {
    $('#myModal3').modal('show');
    alert(id);
    this.s.updateSubcatgory(id).subscribe((output:any)=>{
console.log(output);
      if(output.status==1)
      {
        console.log( output.data[0].sub_category_aws_id)
        this.updObj.mainId= output.data[0].sub_category_aws_id;
        this.updObj.Subname= output.data[0].sub_category_name;
      }
    });
  }
  }

