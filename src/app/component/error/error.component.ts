import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnChanges {

  @Input() error;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes :SimpleChanges){
    console.log(changes)

    if(changes.error.currentValue){
      this.error = "Symbol not found! Please specify it correctly"
    }else{
      this.error = false;
    }
  }

}
