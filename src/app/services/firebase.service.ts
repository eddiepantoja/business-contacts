import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Business } from '../models/business';
import { Category } from '../models/category';

@Injectable()
export class FirebaseService{
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private _af: AngularFire){
    
  }

  //paramter if for filtering category. set to null because it will not always take in a category
  getBusinesses(category:string = null){
    if(category != null && category != '0'){
      console.log(category);
      this.businesses = this._af.database.list('/businesses', {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      }) as
      FirebaseListObservable<Business[]>
    } else{
        this.businesses = this._af.database.list('/businesses') as
        FirebaseListObservable<Business[]>
    }
    return this.businesses;
  }

  getCategories(){
    this.categories = this._af.database.list('/categories') as
    FirebaseListObservable<Category[]>

    return this.categories;
  }

  addBusiness(newBusiness){
    return this.businesses.push(newBusiness);
  }

  updateBusiness(key, updateBusiness){
    return this.businesses.update(key, updateBusiness);
  }

   deleteBusiness(key){
    return this.businesses.remove(key);
  }

}

