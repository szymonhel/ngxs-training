import { Injectable } from '@angular/core';
import {Store} from "@ngxs/store";
import {Animal} from "./store/base-store.actions";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private store: Store) { }

  public testMethod(){
    this.store.dispatch(new Animal.Add('Test'));
  }
}
