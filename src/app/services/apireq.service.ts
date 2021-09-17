import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApireqService {
  list = []
  apiKey = '5c6805a923d8447f9f8b697c18d7fb64'
  constructor(private http: HttpClient) {
    this.list = []
  }

  getDataForItem(item){
    return this.http.get("https://api.twelvedata.com/quote?symbol="+ item +"&dp=3&apikey=" + this.apiKey)
  }

  getCurrentPrieForItem(item){
    return this.http.get("https://api.twelvedata.com/price?symbol="+ item +"&dp=3&apikey=" + this.apiKey)
  }

  getDataForItemReusable(item){
    this.list = []
    this.getDataForItem(item).subscribe(data =>{
      this.getCurrentPrieForItem(item).subscribe(priceData =>{
        for(var i in data){
          for(var j in priceData){
            if(i==j){
              var dataWithPrice = data[i];
              dataWithPrice['price'] = priceData[j]['price']
              this.list.push(dataWithPrice)
            }
          }
        }
      })
    })
    return this.list;

  }

}
