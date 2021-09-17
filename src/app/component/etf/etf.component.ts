import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApireqService} from "../../services/apireq.service";

@Component({
  selector: 'app-etf',
  templateUrl: './etf.component.html',
  styleUrls: ['./etf.component.css']
})
export class EtfComponent implements OnInit, OnDestroy {
  needen = ['BTC', 'ETH', 'LTC', 'BCH', 'EOS','XRP', 'XLM']
  etfList = []
  recall;
  constructor(private call : ApireqService) {
    this.etfList = this.call.getDataForItemReusable(this.needen)

  }
  ngOnInit() {
    this.recall = setInterval(() => {
      this.etfList = this.call.getDataForItemReusable(this.needen)
    }, 180 * 1000);
  }

  ngOnDestroy(){
    if (this.recall) {
      clearInterval(this.recall);
    }
  }
}
