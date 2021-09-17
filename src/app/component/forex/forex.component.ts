import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApireqService} from "../../services/apireq.service";

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit, OnDestroy {
  forexList = [];
  // needen = ['AUD/USD', 'EUR/CHF', 'EUR/USD', 'GBP/USD','USD/CAD', 'USD/CHF', 'USD/CNH', 'USD/HKD','USD/ILS', 'USD/JPY', 'USD/MXN','USD/RUB',
  // 'USD/TRY', 'XAU/USD', 'XPD/USD', 'XPD/USD', 'XAG/USD']
  needen = ['AUD/USD', 'EUR/CHF']
  recall;
  constructor(private call : ApireqService) {
    this.forexList = this.call.getDataForItemReusable(this.needen)

  }

  ngOnInit() {
    this.recall = setInterval(() => {
      this.forexList = this.call.getDataForItemReusable(this.needen)
    }, 180 * 1000);
  }

  ngOnDestroy(){
    if (this.recall) {
      clearInterval(this.recall);
    }
  }



// symbol
// name
// current price

}
