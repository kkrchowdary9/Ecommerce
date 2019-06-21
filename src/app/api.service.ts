import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
api="http://localhost/practice/index.php/Welcome/";
  constructor(private httpClient:HttpClient ) { }
  getSuperCategory()
  {
   return  this.httpClient.get(this.api+"getSuperCategories");
  }
  deleteSuperCategory(id)
  {
    return this.httpClient.post(this.api+"deleteSuperCategory",id);
  }
  addSupercatgry(params)
  {
    return this.httpClient.post(this.api+"AddSuperCategry",params);
  }
  addproducts(params)
  {
    return this.httpClient.post("http://ilanderclients.com/zentech/api/Welcome/AddProduct1",params);
  }
  getSuperCategoryById(id)
  {
    return this.httpClient.get(this.api + 'getSuperCategoryById?superCategoryId='+ id).pipe(map(data => data));

  }
  updateSuperCategry(params)
  {
    return this.httpClient.post(this.api+"updateSuperCategry",params).pipe(map(data => data));
  }
  getMainCategories()
  {
    return this.httpClient.get(this.api+"getMainCategories");
  }
  deleteMaincatgory(id)
  {
    return this.httpClient.post(this.api+"deleteMainCategory",id);
  }
  getMainCategoryById(id)
  {
    return this.httpClient.get(this.api+"getMainCategoryById?mainCategoryId="+ id).pipe(map(data => data));
  }
  updateMainCategry(params)
  {
    return this.httpClient.post(this.api+ "updateMainCategry",params).pipe(map(data => data));
  }
  Addmainctegory(params)
  {
    return this.httpClient.post(this.api+"AddMainCategry",params);
  }
  getSubcategory()
  {
    return this.httpClient.get(this.api+"getSubCategories");
  }
  deleteSubCategory(id)
  {
    return this.httpClient.post(this.api+"deleteSubCategory",id)
  }
  AddsubCategory(params)
  {
    return this.httpClient.post(this.api+"AddSubCategry",params);
  }
  updateSubcatgory(id)
  {
    return this.httpClient.get(this.api+"getSubCategoryById?subCategoryId="+id).pipe(map(data => data));
  }
  getProducts()
  {
    return this.httpClient.get("http://ilanderclients.com/zentech/api/Welcome/getImages")
  }
}
