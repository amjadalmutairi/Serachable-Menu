import { Component, Pipe, PipeTransform , Input, Output,EventEmitter} from '@angular/core';

@Pipe({
  name: 'filterList',
  pure: false
})
export class FilterPipe implements PipeTransform {
  //Get items from list that (startsWith) [you can change it to whatever filter you want]
  transform(list, filterItem): any {
      return filterItem ?
      list.filter(item => item.value.toLowerCase().startsWith(filterItem.toLowerCase()))
          : list;
  }
}

@Component({
  selector: 'searchable-menu',
  templateUrl: './searchable-menu.component.html',
  styleUrls: ['./searchable-menu.component.css']
})
export class SearchableMenuComponent {

  @Input() list; //Input list.
  @Output() selectedItem = new EventEmitter(); //Selected item from menu.

  hideMenu = true;
  userInput  = "" //Filter.
  selectedValue= "" //For display purpose.
  constructor() { }

  setSelectedItem(key){
    this.selectedItem.emit(key) //Emit the selected item
    this.selectedValue = this.getValueByKey(key)
  }

  getValueByKey(key) : string { //For display purpose.
    let result = ""
    this.list.forEach(element => {
      if (element.key === key)
      result = element.value
    });
    return result
  }
}