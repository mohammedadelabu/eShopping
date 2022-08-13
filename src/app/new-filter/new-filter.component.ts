import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-filter',
  templateUrl: './new-filter.component.html',
  styleUrls: ['./new-filter.component.css']
})
export class NewFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedRadioButtonValue: string = 'All'

  @Output() filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue)
    // console.log(this.selectedRadioButtonValue);

  }

}
