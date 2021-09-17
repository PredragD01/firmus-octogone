import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApireqService} from "../../services/apireq.service";

@Component({
  selector: 'app-indicies',
  templateUrl: './indicies.component.html',
  styleUrls: ['./indicies.component.css']
})
export class IndiciesComponent  implements OnInit, OnDestroy {
  indicies = []
  recall;
  DATA = ['IXIC','IXIC']
  constructor(private call : ApireqService) {
    this.indicies = this.call.getDataForItemReusable(this.DATA)

  }

  ngOnInit() {
    this.recall = setInterval(() => {
      this.indicies = this.call.getDataForItemReusable(this.DATA)
    }, 180 * 1000);
  }

  ngOnDestroy(){
    if (this.recall) {
      clearInterval(this.recall);
    }
  }


  //koa kje klikne na tabot neka se otvori modalot so detalni informacii

}
