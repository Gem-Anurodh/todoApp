import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {
  userInfo: any;
  taskArray: any;
  editdata: any;
  editCheck: boolean = false;
  searchText: any;
  filteredData: any;
  showLoader: boolean = false;
  constructor() {}

  addNewItem(value: string) {
    console.log(value);
    this.filteredData = this.taskArray.filter((item: any) => {
      return item.title.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
}
