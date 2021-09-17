import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApireqService} from "../../services/apireq.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit, OnDestroy {
  stocks = []
  recall;
  DATA = ['AAPL', 'AAPL']
  constructor(private call : ApireqService) {
    this.stocks = this.call.getDataForItemReusable(this.DATA)
  }

  ngOnInit() {
    this.recall = setInterval(() => {
      this.stocks = this.call.getDataForItemReusable(this.DATA)
    }, 180 * 1000);
  }

  ngOnDestroy(){
    if (this.recall) {
      clearInterval(this.recall);
    }
  }



// {"symbol":"AAPL", <- ova mi treba
//  "name":"Apple Inc", <- ova
//  "exchange":"NASDAQ", <- ova
//   "currency":"USD", <- ova
//   "datetime":"2021-09-10",
//   "open":"154.956",
//   "high":"155.480",
//   "low":"148.700",
//   "close":"149.870",
//   "volume":"112510236",
//   "previous_close":"154.070",
//   "change":"-4.200",
//   "percent_change":"-2.726", <- ova mi treba za gore
//   "average_volume":"69332398",
//   "fifty_two_week":
//   {"low":"103.100",
//   "high":"157.260",
//   "low_change":"46.770",
//   "high_change":"-7.390",
//   "low_change_percent":"45.364",
//    "high_change_percent":"-4.699",
//    "range":"103.099998 - 157.259995"
// }}


  //na sekoi 3 minuti pravi refresh na dashboard


  //indcies must be the same as stock
  //cenite da bidat dark blue

  ///raspored na tabovi

  //Indicies
  //Stock
  //Forex
  //Crypto
}
