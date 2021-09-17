import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ApireqService} from "../../services/apireq.service";
declare var $: any;

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {

  constructor(private call : ApireqService) { }
  @Output() error = new EventEmitter<any>();
  item:any;
  data: Object = {
    fifty_two_week: {}
  };
  price = {};
  ngOnInit() {
  }

  getDetails(){
    this.call.getDataForItem(this.item).subscribe(data=>{
      this.error.emit(false)
      if(data['code'] == 400){
        this.error.emit(data['message'])
        $('#exampleModal').modal('hide');
      }else{
        this.error.emit(false)

        $('#exampleModal').modal('show');
        this.data = data;
        this.call.getCurrentPrieForItem(this.item).subscribe(price =>{
          this.price = price;
        })
      }
    })
  }


}
