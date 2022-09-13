import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-new',
  templateUrl: './search-new.component.html',
  styleUrls: ['./search-new.component.css']
})
export class SearchNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchValue: string = '';

  // getSearchValue(event: Event){
  //   this.searchValue = (<HTMLInputElement>event.target).value
  // }

  @Output() showSearchValue: EventEmitter<string> = new EventEmitter<string>();

  onShowSearchValue(){
    this.showSearchValue.emit(this.searchValue);
    // console.log(this.searchValue);
  }

  sayHello(inputEl: HTMLInputElement){
    alert('Hello ' +inputEl.value);
  }

}
